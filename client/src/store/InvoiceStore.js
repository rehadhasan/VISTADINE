import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../utility/Utility.js";

let URL = '/api/v1'

const InvoiceStore = create((set)=>({
    isSubmit:false,

    CreateHomeDeliveryInvoice:async ()=>{
        try{
            set({isSubmit:true})
            let res = await axios.post(`${URL}/CreateHomeDeliveryInvoice`)
            if(res.data['status'] === "success"){
                window.location.href = res.data['data']['GatewayPageURL']
            }
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isSubmit:false})
        }
    },

    CreatePickUpInvoice:async (postBody)=>{
        try{
            set({isSubmit:true})
            let res = await axios.post(`${URL}/CreatePickUpInvoice`, postBody)
            if(res.data['status'] === "success"){
                window.location.href = res.data['data']['GatewayPageURL']
            }
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isSubmit:false})
        }
    },

    CreateOnTableInvoice:async (postBody)=>{
        try{
            set({isSubmit:true})
            let res = await axios.post(`${URL}/CreateOnTableInvoice`, postBody)
            if(res.data['status'] === "success"){
                window.location.href = res.data['data']['GatewayPageURL']
            }
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isSubmit:false})
        }
    },

    InvoiceList:null,
    InvoiceListRequest:async ()=>{
        try{
            let res = await axios.get(`${URL}/InvoiceList`)
            if(res.data['status'] === "success"){
                set({InvoiceList:res.data['data']})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    InvoiceDetails:null,
    InvoiceProductDetails:null,
    InvoiceDetailsRequest:async (invoiceID)=>{
        try{
            let res = await axios.get(`${URL}/InvoiceDetails/${invoiceID}`)
            if(res.data['status'] === "success"){
                set({InvoiceDetails:res.data['invoice']})
                set({InvoiceDetailsRequest:res.data['product']})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },
}))


export default InvoiceStore;