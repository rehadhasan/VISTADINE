import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../utility/Utility.js";

let URL = '/api/v1'

const ProductStore = create((set)=>({
    SliderList:null,
    SliderListRequest:async ()=>{
        let res = await axios.get(`${URL}/SliderList`)
        if(res.data['status'] === "success"){
            set({SliderList:res.data['data']})
        }
    },

    CategoryList:null,
    CategoryListRequest:async ()=>{
        let res = await axios.get(`${URL}/CategoryList`)
        if(res.data['status'] === "success"){
            set({CategoryList:res.data['data']})
        }
    },

    MenuProductList:null,
    MenuProductListRequest:async ()=>{
        let res = await axios.get(`${URL}/MenuProductList`)
        if(res.data['status'] === "success"){
            set({MenuProductList:res.data['data']})
        }
    },

    MenuProductListByRemarkRequest:async (remark)=>{
        let res = await axios.get(`${URL}/MenuProductListByRemark/${remark}`)
        if(res.data['status'] === "success"){
            set({MenuProductList:res.data['data']})
        }
    },

    ProductListByType:null,
    ProductListByTypeRequest:async (Type)=>{
        let res = await axios.get(`${URL}/ProductListByType/${Type}`)
        if(res.data['status'] === "success"){
            set({ProductListByType:res.data['data']})
        }
    },


    ProductListByRemark:null,
    ProductListByRemarkRequest:async (Remark)=>{
        let res = await axios.get(`${URL}/ProductListByRemark/${Remark}`)
        if(res.data['status'] === "success"){
            set({ProductListByRemark:res.data['data']})
        }
    },

    ProductList:null,
    ProductListByCategoryRequest:async (categoryID)=>{
        let res = await axios.get(`${URL}/ProductListByCategory/${categoryID}`)
        if(res.data['status'] === "success"){
            set({ProductList:res.data['data']})
        }
    },


    ProductListRequest:async ()=>{
        let res = await axios.get(`${URL}/ProductList`)
        if(res.data['status'] === "success"){
            set({ProductList:res.data['data']})
        }
    },

    ProductListByFilterRequest:async (postBody)=>{
        let res = await axios.post(`${URL}/ProductListByFilter`,postBody)
        if(res.data['status'] === "success"){
            set({ProductList:res.data['data']})
            return true
        }
    },

    productDetails:null,
    productDetailsRequest:async (productID)=>{
        let res = await axios.get(`${URL}/ProductDetails/${productID}`)
        if(res.data['status'] === "success"){
            set({productDetails:res.data['data']})
        }
    },

    ReviewListByProduct: null,
    ReviewCount: 0,
    AverageRating: 0,
    ReviewListByProductRequest:async (productID)=>{
        try {
            let res = await axios.get(`${URL}/ReviewListByProduct/${productID}`)
            if(res.data['status'] === "success"){
                set({
                    ReviewListByProduct: res.data['data'],
                    ReviewCount: res.data['data'].length,
                });
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    TeamList:null,
    TeamListRequest:async ()=>{
        let res = await axios.get(`${URL}/TeamList`)
        if(res.data['status'] === "success"){
            set({TeamList:res.data['data']})
        }
    },

    BlogList:null,
    BlogListRequest:async ()=>{
        let res = await axios.get(`${URL}/BlogList`)
        if(res.data['status'] === "success"){
            set({BlogList:res.data['data']})
        }
    },
}))


export default ProductStore;