const CartModel = require('../models/CartModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveCart = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let reqBody = req.body;
        reqBody['userID'] = userID;
        let data = await CartModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateCart = async (req,res)=>{
    try{
        let cartID = new ObjectId(req.params.cartID);
        let userID = new ObjectId(req.headers.userID);
        let reqBody = req.body;
        reqBody['userID'] = userID;
        let data = await CartModel.updateOne({userID:userID,_id:cartID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadCart = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let cartID = new ObjectId(req.params.cartID);
        let matchStage = {$match:{userID:userID,_id:cartID}}
        let joinWithProduct = {$lookup:{from:'products',localField:'productID',foreignField:'_id',as:'product'}}
        let unwindProduct = {$unwind:'$product'}

        let data = await CartModel.aggregate([
            matchStage,joinWithProduct,unwindProduct
        ])
        res.status(200).json({status:'success',data:data[0]})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveCart = async (req,res)=>{
    try{
        let cartID = new ObjectId(req.params.cartID);
        let userID = new ObjectId(req.headers.userID);
        let data = await CartModel.deleteOne({userID:userID,_id:cartID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.CartList = async (req,res)=>{
    try{
        let data = await CartModel.aggregate([
            {$lookup:{from:'products',localField:'productID',foreignField:'_id',as:'product'}},
            {$unwind:'$product'}
        ])
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}