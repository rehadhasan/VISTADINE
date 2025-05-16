import {create} from "zustand";
import axios from "axios";

let URL = '/api/v1'

const CareerStore = create((set)=>({
    JobCategoryList:null,
    JobCategoryListRequest:async ()=>{
        let res = await axios.get(`${URL}/JobCategoryList`)
        if(res.data['status'] === "success"){
            set({JobCategoryList:res.data['data']})
        }
    },

    JobList:null,
    JobCount:0,
    JobListRequest:async ()=>{
        let res = await axios.get(`${URL}/JobList`)
        if(res.data['status'] === "success"){
            set({JobList:res.data['data']})
            set({JobCount:res.data['data'].length})
        }
    },

    JobListByCategoryRequest:async (jobCategoryID)=>{
        let res = await axios.get(`${URL}/JobListByCategory/${jobCategoryID}`)
        if(res.data['status'] === "success"){
            set({JobList:res.data['data']})
            set({JobCount:res.data['data'].length})
        }
    },

    JobListBySearchRequest:async (keyword)=>{
        let res = await axios.get(`${URL}/JobListBySearch/${keyword}`)
        if(res.data['status'] === "success"){
            set({JobList:res.data['data']})
            return true
        }
    },

    JobDetails:null,
    ReadJobRequest:async (jobID)=>{
        let res = await axios.get(`${URL}/ReadJob/${jobID}`)
        if(res.data['status'] === "success"){
            set({JobDetails:res.data['data']})
        }
    }
}))


export default CareerStore;