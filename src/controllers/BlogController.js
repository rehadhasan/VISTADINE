const BlogModel = require('../models/BlogModel')
const BlogCommentModel = require('../models/BlogCommentModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.SaveBlog = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await BlogModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateBlog = async (req,res)=>{
    try{
        let blogID = new ObjectId(req.params.blogID);
        let reqBody = req.body;
        let data = await BlogModel.updateOne({_id:blogID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadBlog = async (req,res)=>{
    try{
        let blogID = new ObjectId(req.params.blogID);
        let data = await BlogModel.findOne({_id:blogID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveBlog = async (req,res)=>{
    try{
        let blogID = new ObjectId(req.params.blogID);
        let data = await BlogModel.deleteOne({_id:blogID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.BlogList = async (req,res)=>{
    try{
        let data = await BlogModel.find()
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.BlogListByRemark = async (req,res)=>{
    try{
        let remark = req.params.remark;
        let data = await BlogModel.find({remark:remark})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.SaveComment = async (req,res)=>{
    try{
        let userID = new ObjectId(req.params.userID);
        let reqBody = req.body;
        reqBody['userID'] = userID;
        let data = await BlogCommentModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateComment = async (req,res)=>{
    try{
        let commentID = new ObjectId(req.params.commentID);
        let reqBody = req.body;
        let data = await BlogCommentModel.updateOne({_id:commentID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveComment = async (req,res)=>{
    try{
        let commentID = req.params.commentID;
        let data = await BlogCommentModel.deleteOne({_id:commentID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.CommentList = async (req,res)=>{
    try{
        let blogID = req.params.blogID;
        let data = await BlogCommentModel.find({blogID:blogID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}



