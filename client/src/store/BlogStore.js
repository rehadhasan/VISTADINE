import {create} from "zustand";
import axios from "axios";

let URL = '/api/v1'

const BlogStore = create((set)=>({
    BlogList:null,
    BlogListRequest:async ()=>{
        let res = await axios.get(`${URL}/BlogList`)
        if(res.data['status'] === "success"){
            set({BlogList:res.data['data']})
        }
    },

    BlogListByRemarkRequest:async (remark)=>{
        let res = await axios.get(`${URL}/BlogListByRemark/${remark}`)
        if(res.data['status'] === "success"){
            set({BlogList:res.data['data']})
        }
    },

    BlogDetails:null,
    BlogDetailsRequest:async (blogID)=>{
        let res = await axios.get(`${URL}/ReadBlog/${blogID}`)
        if(res.data['status'] === "success"){
            set({BlogDetails:res.data['data']})
        }
    },

    SaveCommentRequest:async (postBody)=>{
        let res = await axios.post(`${URL}/SaveComment`,postBody)
        if(res.data['status'] === "success"){
            return true
        }
    },

    CommentList:null,
    CommentListRequest:async (blogID)=>{
        let res = await axios.get(`${URL}/CommentList/${blogID}`)
        if(res.data['status'] === "success"){
            set({CommentList:res.data['data']})
        }
    }
}))


export default BlogStore;