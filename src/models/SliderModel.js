const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        productID:{type:mongoose.Types.ObjectId, required:true},
        title:{type:String, required:true},
        image:{type:String, required:true},
        description:{type:String, required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const SliderModel = mongoose.model('productsliders', DataSchema)

module.exports = SliderModel;