const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        careerCategoryID:{type:mongoose.Types.ObjectId, required:true},
        title:{type:String, required:true},
        jobDes:{type:String, required:true},
        education:{type:String, required:true},
        experience:{type:String, required:true},
        deadline:{type:String, required:true},
        vacancy:{type:String, required:true},
        employStatus:{type:String, required:true},
        jobLocation:{type:String, required:true},
        salary:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const CareerModel = mongoose.model('careers', DataSchema)

module.exports = CareerModel;