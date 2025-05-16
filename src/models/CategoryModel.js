const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        name:{type:String, required:true},
        image:{type:String, required:true},
        description:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const CategoryModel = mongoose.model('categories', DataSchema)

module.exports = CategoryModel;