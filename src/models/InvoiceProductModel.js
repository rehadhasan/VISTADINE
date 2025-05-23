const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        userID:{type:mongoose.Schema.Types.ObjectId, required:true},
        invoiceID:{type:mongoose.Schema.Types.ObjectId, required:true},
        productID:{type:mongoose.Schema.Types.ObjectId, required:true},
        qty:{type:String, required:true},
        price:{type:String, required:true},
        size:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)
let InvoiceProductModel = mongoose.model('invoiceproducts' ,DataSchema)
module.exports = InvoiceProductModel;