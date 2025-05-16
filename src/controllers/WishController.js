const WishModel = require('../models/WishModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveWish = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let productID = new ObjectId(req.params.productID);
        let data = await WishModel.create({userID:userID,productID:productID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateWish = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let productID = new ObjectId(req.params.productID);
        let data = await WishModel.updateOne({userID:userID,productID:productID},{productID:productID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadWish = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let productID = new ObjectId(req.params.productID);
        let matchStage = {$match:{userID:userID,productID:productID}}
        let joinWithProduct = {$lookup:{from:'products',localField:'productID',foreignField:'_id',as:'product'}}
        let unwindProduct = {$unwind:'$product'}

        let data = await WishModel.aggregate([
            matchStage,joinWithProduct,unwindProduct
        ])
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveWish = async (req,res)=>{
    try{
        let productID = new ObjectId(req.params.productID);
        let userID = new ObjectId(req.headers.userID);
        let data = await WishModel.deleteOne({userID:userID,productID:productID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.WishList = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let matchStage = {$match:{userID:userID}}
        let joinWithProduct = {$lookup:{from:'products',localField:'productID',foreignField:'_id',as:'product'}}
        let unwindProduct = {$unwind:'$product'}
        let data = await WishModel.aggregate([
            matchStage,joinWithProduct,unwindProduct
        ])
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}