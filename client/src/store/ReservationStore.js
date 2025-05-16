import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../utility/Utility.js";

let URL = '/api/v1'

const ReservationStore = create((set)=>({
    isSubmit:false,

    SaveReservationRequest:async (postBody)=>{
        try{
            set({isSubmit:true})
            let res = await axios.post(`${URL}/SaveReservation`, postBody)
            if(res.data['status'] === "success"){
                return true
            }
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isSubmit:false})
        }
    },
}))


export default ReservationStore;