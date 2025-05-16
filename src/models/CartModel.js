const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        userID:{type:mongoose.Types.ObjectId, required:true},
        productID:{type:mongoose.Types.ObjectId, required:true},
        size:{type:String, required:true},
        qty:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const CartModel = mongoose.model('carts', DataSchema)

module.exports = CartModel;