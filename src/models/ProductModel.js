const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        name:{type:String, required:true},
        categoryID:{type:mongoose.Types.ObjectId, required:true},
        shortDes:{type:String, required:true},
        discount:{type:Boolean, required:true},
        price:{type:String, required:true},
        discountPrice:{type:String, required:true},
        image:{type:String, required:true},
        remark:{type:String, required:true},
        type:{type:String, required:true},
        stock:{type:Boolean, required:true},
        rating:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const ProductModel = mongoose.model('products', DataSchema)

module.exports = ProductModel;