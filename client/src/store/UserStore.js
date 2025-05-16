import {create} from "zustand";
import axios from "axios";
import Cookies from 'js-cookie';
import {getEmail, getOTP, setEmail, setOTP, unauthorized} from "../utility/Utility.js";

let URL = '/api/v1'

const UserStore = create((set)=>({
    isLogin:()=>{
        return !!Cookies.get('token')
    },
    isSubmit:false,

    SaveUserRequest:async (postBody)=>{
        try{
            set({isSubmit:true})
            let res = await axios.post(`${URL}/SaveUser`, postBody)
            if(res.data['status'] === "success"){
                return true
            }
        }finally {
            set({isSubmit:false})
        }
    },

    LoginUserRequest:async (postBody)=>{
        try{
            set({isSubmit:true})
            let res = await axios.post(`${URL}/LoginUser`, postBody)
            if(res.data['status'] === "success"){
                return true
            }
        }finally {
            set({isSubmit:false})
        }
    },

    LogoutUserRequest:async ()=>{
        try{
            let res = await axios.get(`${URL}/LogoutUser`)
            if(res.data['status'] === "success"){
                return true
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    SendOTPRequest:async (email)=>{
        try{
            setEmail(email)
            set({isSubmit:true})
            let res = await axios.get(`${URL}/SendOTP/${email}`)
            if(res.data['status'] === "success"){
                return true
            }
        }finally {
            set({isSubmit:false})
        }
    },

    VerifyOTPRequest:async (otp)=>{
        try{
            setOTP(otp)
            let email = getEmail()
            set({isSubmit:true})
            let res = await axios.get(`${URL}/VerifyOTP/${email}/${otp}`)
            if(res.data['status'] === "success"){
                return true
            }
        }finally {
            set({isSubmit:false})
        }
    },

    ResetPasswordRequest:async (password)=>{
        try{
            let email = getEmail()
            let otp = getOTP()
            set({isSubmit:true})
            let res = await axios.get(`${URL}/ResetPassword/${email}/${otp}/${password}`)
            if(res.data['status'] === "success"){
                return true
            }
        }finally {
            set({isSubmit:false})
        }
    },

    UserDetails:null,
    UserDetailsRequest:async ()=>{
        try{
            let res = await axios.get(`${URL}/ReadUser`)
            if(res.data['status'] === "success"){
                set({UserDetails:res.data['data']})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    UpdateUserRequest:async (postBody)=>{
        try{
            let res = await axios.post(`${URL}/UpdateUser`, postBody)
            if(res.data['status'] === "success"){
                return true
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    SaveProfileRequest:async (postBody)=>{
        try{
            let res = await axios.post(`${URL}/SaveProfile`, postBody)
            if(res.data['status'] === "success"){
                return true
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    ProfileDetails:{},
    ReadProfileRequest:async ()=>{
        try{
            let res = await axios.get(`${URL}/ReadProfile`)
            if(res.data['status'] === "success"){
                set({ProfileDetails:res.data['data']})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    UpdateProfileRequest:async (postBody)=>{
        try{
            let res = await axios.post(`${URL}/UpdateProfile`, postBody)
            if(res.data['status'] === "success"){
                return true
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },
}))


export default UserStore;