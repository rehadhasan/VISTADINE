const ContactModel = require('../models/ContactModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveContact = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await ContactModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateContact = async (req,res)=>{
    try{
        let contactID = new ObjectId(req.params.contactID);
        let reqBody = req.body;
        let data = await ContactModel.updateOne({_id:contactID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadContact = async (req,res)=>{
    try{
        let contactID = new ObjectId(req.params.contactID);
        let data = await ContactModel.findOne({_id:contactID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveContact = async (req,res)=>{
    try{
        let contactID = new ObjectId(req.params.contactID);
        let data = await ContactModel.deleteOne({_id:contactID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ContactList = async (req,res)=>{
    try{
        let data = await ContactModel.find()
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}



