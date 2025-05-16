import {create} from "zustand";
import axios from "axios";

let URL = '/api/v1'

const ReviewStore = create((set)=>({
    ReviewList:null,
    ReviewListRequest:async ()=>{
        let res = await axios.get(`${URL}/ReviewList`)
        if(res.data['status'] === "success"){
            set({ReviewList:res.data['data']})
        }
    }
}))


export default ReviewStore;