import {create} from "zustand";
import axios from "axios";

let URL = '/api/v1'

const ContactStore = create((set)=>({
    SaveContactRequest:async (postBody)=>{
        let res = await axios.post(`${URL}/SaveContact`,postBody)
        if(res.data['status'] === "success"){
            return true
        }
    }
}))


export default ContactStore;