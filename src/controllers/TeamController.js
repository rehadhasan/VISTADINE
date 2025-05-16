const TeamModel = require('../models/TeamModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveTeam = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await TeamModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateTeam = async (req,res)=>{
    try{
        let teamID = new ObjectId(req.params.teamID);
        let reqBody = req.body;
        let data = await TeamModel.updateOne({_id:teamID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadTeam = async (req,res)=>{
    try{
        let teamID = new ObjectId(req.params.teamID);
        let data = await TeamModel.findOne({_id:teamID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveTeam = async (req,res)=>{
    try{
        let teamID = new ObjectId(req.params.teamID);
        let data = await TeamModel.deleteOne({_id:teamID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.TeamList = async (req,res)=>{
    try{
        let data = await TeamModel.find({status:"active"})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}