import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../utility/Utility.js";

let URL = '/api/v1'

const CartStore = create((set)=>({
    isSubmit:false,

    SaveCartRequest:async (postBody)=>{
        try{
            set({isSubmit:true})
            let res = await axios.post(`${URL}/SaveCart`,postBody)
            if(res.data['status'] === "success"){
                return true
            }
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isSubmit:false})
        }
    },

    CartList: null,
    CartCount: 0,
    CartTotal: 0,
    CartVAT: 0,
    CartPayable: 0,

    CartListRequest: async () => {
        try {
            let res = await axios.get(`${URL}/CartList`);
            if (res.data['status'] === "success") {
                const cartItems = res.data['data'];
                const cartCount = cartItems.length;
                const cartTotal = cartItems.reduce((total, item) => {
                    return total + (parseFloat(item.product.discountPrice) * parseInt(item.qty));
                }, 0);

                const vat = cartTotal * 0.05; // Assuming VAT is 5%
                const payable = cartTotal + vat;

                set({
                    CartList: cartItems,
                    CartCount: cartCount,
                    CartTotal: cartTotal,
                    CartVAT: vat,
                    CartPayable: payable,
                });
            }
        } catch (e) {
            unauthorized(e.response.status)
        }
    },

    RemoveCartRequest:async (cartID)=>{
        try{
            let res = await axios.get(`${URL}/RemoveCart/${cartID}`)
            if(res.data['status'] === "success"){
                return true
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    }
}))


export default CartStore;