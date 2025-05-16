const FeaturesModel = require('../models/FeaturesModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveFeature = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await FeaturesModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateFeature = async (req,res)=>{
    try{
        let featureID = new ObjectId(req.params.featureID);
        let reqBody = req.body;
        let data = await FeaturesModel.updateOne({_id:featureID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadFeature = async (req,res)=>{
    try{
        let featureID = new ObjectId(req.params.featureID);
        let data = await FeaturesModel.findOne({_id:featureID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveFeature = async (req,res)=>{
    try{
        let featureID = new ObjectId(req.params.featureID);
        let data = await FeaturesModel.deleteOne({_id:featureID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.FeatureList = async (req,res)=>{
    try{
        let data = await FeaturesModel.find({status:'active'})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}