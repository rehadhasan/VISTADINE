const LegalModel = require('../models/LegalModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveLegal = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await LegalModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateLegal = async (req,res)=>{
    try{
        let legalID = new ObjectId(req.params.legalID);
        let reqBody = req.body;
        let data = await LegalModel.updateOne({_id:legalID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadLegal = async (req,res)=>{
    try{
        let legalID = new ObjectId(req.params.legalID);
        let data = await LegalModel.findOne({_id:legalID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.LegalListByType = async (req,res)=>{
    try{
        let type = req.params.type;
        let data = await LegalModel.findOne({type:type})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveLegal = async (req,res)=>{
    try{
        let legalID = new ObjectId(req.params.legalID);
        let data = await LegalModel.deleteOne({_id:legalID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}