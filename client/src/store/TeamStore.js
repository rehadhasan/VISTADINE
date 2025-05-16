import {create} from "zustand";
import axios from "axios";

let URL = '/api/v1'

const TeamStore = create((set)=>({
    TeamList:null,
    TeamListRequest:async ()=>{
        let res = await axios.get(`${URL}/TeamList`)
        if(res.data['status'] === "success"){
            set({TeamList:res.data['data']})
        }
    }
}))


export default TeamStore;