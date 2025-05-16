import {create} from "zustand";
import axios from "axios";

let URL = '/api/v1'

const FaqStore = create((set)=>({
    FaqList:null,
    FaqListRequest:async ()=>{
        let res = await axios.get(`${URL}/FaqList`)
        if(res.data['status'] === "success"){
            set({FaqList:res.data['data']})
        }
    }
}))


export default FaqStore;