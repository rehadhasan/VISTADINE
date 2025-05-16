const FaqModel = require('../models/FaqModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveFaq = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await FaqModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateFaq = async (req,res)=>{
    try{
        let faqID = new ObjectId(req.params.faqID);
        let reqBody = req.body;
        let data = await FaqModel.updateOne({_id:faqID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadFaq = async (req,res)=>{
    try{
        let faqID = new ObjectId(req.params.faqID);
        let data = await FaqModel.findOne({_id:faqID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveFaq = async (req,res)=>{
    try{
        let faqID = new ObjectId(req.params.faqID);
        let data = await FaqModel.deleteOne({_id:faqID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.FaqList = async (req,res)=>{
    try{
        let data = await FaqModel.find()
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}



