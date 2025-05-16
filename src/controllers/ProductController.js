const CategoryModel = require('../models/CategoryModel')
const ProductModel = require('../models/ProductModel')
const ProductDetailsModel = require('../models/ProductDetailsModel')
const SliderModel = require('../models/SliderModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveCategory = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await CategoryModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateCategory = async (req,res)=>{
    try{
        let categoryID = new ObjectId(req.params.categoryID);
        let reqBody = req.body;
        let data = await CategoryModel.updateOne({_id:categoryID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadCategory = async (req,res)=>{
    try{
        let categoryID = new ObjectId(req.params.categoryID);
        let data = await CategoryModel.findOne({_id:categoryID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveCategory = async (req,res)=>{
    try{
        let categoryID = new ObjectId(req.params.categoryID);
        let data = await CategoryModel.deleteOne({_id:categoryID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.CategoryList = async (req,res)=>{
    try{
        let data = await CategoryModel.find()
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.SaveProduct = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await ProductModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.SaveProductDetails = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await ProductDetailsModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateProduct = async (req,res)=>{
    try{
        let productID = new ObjectId(req.params.productID)
        let reqBody = req.body;
        let data = await ProductModel.updateOne({_id:productID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateProductDetails = async (req,res)=>{
    try{
        let productID = new ObjectId(req.params.productID)
        let reqBody = req.body;
        let data = await ProductDetailsModel.updateOne({productID:productID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ProductDetails = async (req,res)=>{
    try{
        let productID = new ObjectId(req.params.productID)
        let matchStage = {$match: {_id:productID}}
        let joinStage = {$lookup:{from:'productdetails',localField:'_id',foreignField:'productID', as:'details'}}
        let unwindStage = {$unwind: '$details'}
        let data = await ProductModel.aggregate([
            matchStage, joinStage, unwindStage
        ])
        res.status(200).json({status:'success',data:data[0]})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveProduct = async (req,res)=>{
    try{
        let productID = new ObjectId(req.params.productID)
        let data = await ProductModel.deleteOne({_id:productID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveProductDetails = async (req,res)=>{
    try{
        let productID = new ObjectId(req.params.productID)
        let data = await ProductDetailsModel.deleteOne({productID:productID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ProductList = async (req, res) => {
    try {
        let data = await ProductModel.find()
        res.status(200).json({status: 'success', data: data});
    } catch (e) {
        res.status(500).json({status: 'fail', data: e.toString()});
    }
}

exports.ProductListByCategory = async (req,res)=>{
    try{
        let categoryID = new ObjectId(req.params.categoryID);
        let matchStage = {$match:{categoryID:categoryID}}
        let joinStage = {$lookup:{from:'categories',localField:'categoryID',foreignField:'_id',as:'category'}}
        let unwindStage = {$unwind:'$category'}
        let data = await ProductModel.aggregate([matchStage,joinStage,unwindStage])
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.MenuProductList = async (req,res)=>{
    try{
        let data = await ProductModel.find({type:'menu'})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.MenuProductListByRemark = async (req,res)=>{
    try{
        let remark = req.params.remark;
        let data = await ProductModel.find({type:'menu',remark:remark})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ProductListByType = async (req,res)=>{
    try{
        let type = req.params.type;
        let data = await ProductModel.find({type:type})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ProductListByRemark = async (req,res)=>{
    try{
        let remark = req.params.remark;
        let data = await ProductModel.find({remark:remark})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ProductListByFilter = async (req, res) => {
    try {
        let searchCondition = {}; // Initialize searchCondition as an empty object
        let matchCondition = {};

        // Search by keyword
        if (req.body['keyword']) {
            let RegexStage = { "$regex": req.body['keyword'], "$options": "i" };
            let SearchStage = [
                { name: RegexStage },
                { description: RegexStage }
            ];
            searchCondition = { $or: SearchStage };
        }

        // Filter by categoryID
        if (req.body['categoryID']) {
            matchCondition.categoryID = new ObjectId(req.body['categoryID']);
        }

        // Filter by rating
        if (req.body['rating']) {
            matchCondition.rating = { $gte: req.body['rating'] };
        }

        // Convert price to integer and filter by price range
        let addFieldStage = { $addFields: { NumericPrice: { $toInt: "$price" } } };
        let priceMin = parseInt(req.body['priceMin']);
        let priceMax = parseInt(req.body['priceMax']);
        let priceCondition = {};

        if (!isNaN(priceMin)) {
            priceCondition['NumericPrice'] = { $gte: priceMin };
        }
        if (!isNaN(priceMax)) {
            priceCondition['NumericPrice'] = {
                ...(priceCondition['NumericPrice'] || {}),
                $lte: priceMax
            };
        }

        // Aggregation pipeline
        let pipeline = [];

        if (Object.keys(searchCondition).length > 0) {
            pipeline.push({ $match: searchCondition });
        }
        if (Object.keys(matchCondition).length > 0) {
            pipeline.push({ $match: matchCondition });
        }

        pipeline.push(addFieldStage);

        if (Object.keys(priceCondition).length > 0) {
            pipeline.push({ $match: priceCondition });
        }

        // Join with category collection
        let JoinWithCategoryStage = {
            $lookup: {
                from: 'categories',
                localField: 'categoryID',
                foreignField: '_id',
                as: 'category'
            }
        };
        pipeline.push(JoinWithCategoryStage);

        // Unwind the joined category field
        let UnwindCategory = { $unwind: "$category" };
        pipeline.push(UnwindCategory);

        // Execute aggregation
        let data = await ProductModel.aggregate(pipeline);

        // Success response
        res.status(200).json({ status: "success", data: data });
    } catch (e) {
        // Error response with a 500 status code
        res.status(200).json({ status: 'fail', data: e.toString() });
    }
};

exports.SaveSlider = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await SliderModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateSlider = async (req,res)=>{
    try{
        let sliderID = new ObjectId(req.params.sliderID)
        let reqBody = req.body;
        let data = await SliderModel.updateOne({_id:sliderID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadSlider = async (req,res)=>{
    try{
        let sliderID = new ObjectId(req.params.sliderID)

        let matchStage = {$match: { _id: sliderID}}
        let joinWithProduct = {$lookup: {from: "products", localField: "productID", foreignField: "_id", as: "product"}}
        let unwindStage = {$unwind:'$home'}

        let data = await SliderModel.aggregate([
            matchStage,joinWithProduct,unwindStage
        ])
        res.status(200).json({status:'success',data:data[0]})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveSlider = async (req,res)=>{
    try{
        let sliderID = new ObjectId(req.params.sliderID)
        let data = await SliderModel.deleteOne({_id:sliderID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.SliderList = async (req, res) => {
    try {
        let data = await SliderModel.find()
        res.status(200).json({status:'success',data:data})
    } catch (e) {
        res.status(500).json({status: 'fail', data: e.toString()});
    }
}