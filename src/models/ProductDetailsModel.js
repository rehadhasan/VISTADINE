const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        productID:{type:mongoose.Types.ObjectId, required:true},
        description:{type:String, required:true},
        size:{type:String, required:true},
        Spicy_Level:{type:String, required:false},
        Vegetarian:{type:String, required:false},
        Gluten_Free:{type:String, required:false},
        img1:{type:String, required:true},
        img2:{type:String, required:true},
        img3:{type:String, required:true},
        img4:{type:String, required:true},
        img5:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const ProductDetailsModel = mongoose.model('productDetails', DataSchema)

module.exports = ProductDetailsModel;