import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../utility/Utility.js";

let URL = '/api/v1'

const WishStore = create((set)=>({
    isSubmit:false,

    SaveWishRequest:async (productID)=>{
        try{
            set({isSubmit:true})
            let res = await axios.get(`${URL}/SaveWish/${productID}`)
            if(res.data['status'] === "success"){
                return true
            }
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isSubmit:false})
        }
    },

    WishDetails:null,
    WishDetailsRequest:async (productID)=>{
        try{
            let res = await axios.get(`${URL}/ReadWish/${productID}`)
            if(res.data['status'] === "success"){
                set({WishDetails:res.data['data']})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    WishList:null,
    WishListRequest:async ()=>{
        try{
            let res = await axios.get(`${URL}/WishList`)
            if(res.data['status'] === "success"){
                set({WishList:res.data['data']})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    RemoveWishRequest:async (productID)=>{
        try{
            set({isSubmit:true})
            let res = await axios.get(`${URL}/RemoveWish/${productID}`)
            if(res.data['status'] === "success"){
                return true
            }
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isSubmit:false})
        }
    }
}))


export default WishStore;