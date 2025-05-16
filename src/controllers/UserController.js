const {EncodeToken} = require("../utility/TokenHelper");
const UserModel = require('../models/UserModel')
const OTPModel = require('../models/OTPModel')
const ProfileModel = require('../models/ProfileModel')

const mongoose = require('mongoose')
const SendEmailHelper = require("../utility/SendEmailHelper");
const ObjectId = mongoose.Types.ObjectId;

exports.SaveUser = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await UserModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateUser = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let reqBody = req.body;
        let data = await UserModel.updateOne({_id:userID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadUser = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let data = await UserModel.findOne({_id:userID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveUser = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let data = await UserModel.deleteOne({_id:userID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.SendOTP = async (req,res)=>{
    try{
        let email = req.params.email;
        let result = await UserModel.find({email:email}).countDocuments()

        if(result===1){
            let code = Math.floor(10000+Math.random()*90000)
            await OTPModel.updateOne({email:email},{$set:{email:email,otp:code,status:'0'}},{upsert:true})

            let EmailSubject = 'Restaurant Says Verify Your Email!';
            let EmailText = 'Your verification code is = '+' '+code;
            await SendEmailHelper(email,EmailText,EmailSubject)

            res.status(200).json({status:"success", data:"OTP Send Successfully."})
        }else{
            res.status(200).json({status:"fail", data:"No User Found!"})
        }
    }catch (e) {
        res.status(200).json({status:"fail", data:e.toString()})
    }
}

exports.VerifyOTP = async (req,res)=>{
    try{
        let email = req.params.email;
        let otp = req.params.otp;
        let result = await OTPModel.find({email:email,otp:otp,status:'0'}).countDocuments()

        if(result===1){
            await OTPModel.updateOne({email:email,otp:otp}, {email:email,otp:otp,status:'1'}, {upsert:true})
            res.status(200).json({status:"success", data:"OTP Verification Successfully."})
        }else{
            res.status(200).json({status:"fail", data:"Invalid OTP!"})
        }
    }catch (e) {

    }
}

exports.ResetPassword = async (req,res)=>{
    try{
        let email = req.params.email;
        let otp = req.params.otp;
        let password = req.params.password;
        let result = await OTPModel.find({email:email,otp:otp,status:'1'}).countDocuments()

        if(result===1){
            await OTPModel.updateOne({email:email,otp:otp,status:'1'},{email:email,otp:'0',status:'0'}, {upsert:true})
            await UserModel.updateOne({email:email},{password:password})
            res.status(200).json({status:"success", data:"Password Forgotten Successfully."})
        }else{
            res.status(200).json({status:"fail", data:"Something Went Wrong!"})
        }
    }catch (e) {
        res.status(200).json({status:"fail", data:e.toString()})
    }
}

exports.LoginUser = async (req,res)=>{
    try{
        let reqBody = req.body;
        let email = req.body['email'];
        let result = await UserModel.find(reqBody).countDocuments()
        if(result === 1){
            // Encode cookie
            let userID = await UserModel.find({email:email}).select('_id')
            let token = await EncodeToken(email,userID[0]['_id'])

            //Config cookie
            let CookieOptions = {expires:new Date(Date.now()+24*6060*1000), httpOnly:false, credentials:true}
            res.cookie('token', token, CookieOptions)

            res.status(200).json({status:'success',data:token})
        }else{
            res.status(200).json({status:'fail',data:'No User Found!'})
        }
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.LogoutUser = async (req,res)=>{
    try{
        let CookieOptions = {expires:new Date(Date.now()-24*6060*1000), httpOnly:false}
        res.cookie("token", "", CookieOptions)
        res.status(200).json({status:"success", data:"Logout Successful."})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.SaveProfile = async (req,res)=>{
    try{
        let reqBody = req.body;
        let userID = new ObjectId(req.headers.userID);
        let email = req.headers.email;
        reqBody['userID'] = userID;
        reqBody['cus_email'] = email;
        let data = await ProfileModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateProfile = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let reqBody = req.body;
        reqBody.userID = userID;
        let data = await ProfileModel.updateOne({userID:userID}, {$set:reqBody}, {upsert:true})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadProfile = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let data = await ProfileModel.findOne({userID:userID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveProfile = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let data = await ProfileModel.deleteOne({userID:userID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}





