const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        categoryName:{type:String, required:true},
        categoryDes:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const CareerCategoryModel = mongoose.model('careercategories', DataSchema)

module.exports = CareerCategoryModel;