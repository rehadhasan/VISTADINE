const ReviewModel = require('../models/ReviewModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveReview = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let reqBody = req.body;
        reqBody['userID'] = userID;
        let data = await ReviewModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateReview = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let reqBody = req.body;
        let productID = new ObjectId(reqBody['productID']);
        let data = await ReviewModel.updateOne({userID:userID,productID:productID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadReview = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let productID = new ObjectId(req.params.productID);
        let data = await ReviewModel.findOne({userID:userID,productID:productID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveReview = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let productID = new ObjectId(req.params.productID);
        let data = await ReviewModel.deleteOne({userID:userID,productID:productID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReviewList = async (req,res)=>{
    try{
        let data = await ReviewModel.aggregate([
            {$lookup:{from:'users',localField:'userID',foreignField:'_id',as:'customer'}},
            {$unwind:'$customer'}
        ])
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReviewListByProduct = async (req,res)=>{
    try{
        let productID = new ObjectId(req.params.productID);
        let data = await ReviewModel.aggregate([
            {$match:{productID:productID}},
            {$lookup:{from:'users',localField:'userID',foreignField:'_id',as:'customer'}},
            {$unwind:'$customer'}
        ])
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}