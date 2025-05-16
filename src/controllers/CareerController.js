const CareerCategoryModel = require('../models/CareerCategoryModel')
const CareerModel = require('../models/CareerModel')
const mongoose = require('mongoose')
let ObjectId = mongoose.Types.ObjectId;


exports.SaveJobCategory = async (req, res) => {
    try{
        let reqBody = req.body;
        let data = await CareerCategoryModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadJobCategory = async (req, res) => {
    try{
        let jobCategoryID = new ObjectId(req.params.jobCategoryID)
        let data = await CareerCategoryModel.findOne({_id:jobCategoryID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateJobCategory = async (req, res) => {
    try{
        let jobCategoryID = new ObjectId(req.params.jobCategoryID)
        let reqBody = req.body;
        let data = await CareerCategoryModel.updateOne({_id:jobCategoryID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveJobCategory = async (req, res) => {
    try{
        let jobCategoryID = new ObjectId(req.params.jobCategoryID)
        let data = await CareerCategoryModel.deleteOne({_id:jobCategoryID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.JobCategoryList = async (req, res) => {
    try {
        let data = await CareerCategoryModel.aggregate([
            {
                $lookup: {
                    from: "careers", // assuming the collection for jobs is called "jobs"
                    localField: "_id",
                    foreignField: "careerCategoryID", // assuming the foreign key in jobs collection is "categoryId"
                    as: "jobs"
                }
            },
            {
                $addFields: {
                    jobCount: { $size: "$jobs" } // adding the length of the jobs array
                }
            },
            {
                $project: {
                    jobs: 0 // exclude the jobs array from the final response if not needed
                }
            }
        ]);

        res.status(200).json({status: 'success', data: data});
    } catch (e) {
        res.status(200).json({status: 'fail', data: e.toString()});
    }
}


exports.SaveJob = async (req, res) => {
    try{
        let reqBody = req.body;
        let data = await CareerModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadJob = async (req, res) => {
    try{
        let jobID = new ObjectId(req.params.jobID)
        let data = await CareerModel.findOne({_id:jobID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateJob = async (req, res) => {
    try{
        let jobID = new ObjectId(req.params.jobID)
        let reqBody = req.body;
        let data = await CareerModel.updateOne({_id:jobID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveJob = async (req, res) => {
    try{
        let jobID = new ObjectId(req.params.jobID)
        let data = await CareerModel.deleteOne({_id:jobID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.JobList = async (req, res) => {
    try{
        let data = await CareerModel.aggregate([
            {$lookup:{from:'careercategories',localField:'careerCategoryID',foreignField:'_id',as:'category'}},
            {$unwind:"$category"}
        ])
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.JobListByCategory = async (req, res) => {
    try{
        let jobCategoryID = new ObjectId(req.params.jobCategoryID)
        let matchStage = {$match:{careerCategoryID:jobCategoryID}}
        let joinStage = {$lookup:{from:'careercategories',localField:'careerCategoryID',foreignField:'_id',as:'category'}}
        let unwindStage = {$unwind:"$category"};
        let data = await CareerModel.aggregate([
            matchStage,joinStage,unwindStage
        ])
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}


// Job Search API without pagination

exports.JobListBySearch = async (req, res) => {
    try {
        let RegexStage = {"$regex":req.params.keyword, "$options":"i"}
        let SearchStage = [{title:RegexStage}]
        let QueryStage = {$or:SearchStage}

        let MatchStage = {$match: QueryStage}

        let joinStage = {$lookup:{from:'careercategories',localField:'careerCategoryID',foreignField:'_id',as:'category'}}
        let unwindStage = {$unwind:"$category"};

        let data = await CareerModel.aggregate([
            MatchStage,
            joinStage,
            unwindStage
        ])

        res.status(200).json({status:'success',data:data})
    } catch (e) {
        res.status(500).json({ status: 'fail', message: e.toString() });
    }
};

