const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        title:{type:String, required:true},
        image:{type:String, required:true},
        description:{type:String, required:true},
        status:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const FeaturesModel = mongoose.model('features', DataSchema)

module.exports = FeaturesModel;