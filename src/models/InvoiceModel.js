const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        userID:{type:mongoose.Schema.Types.ObjectId, require:true},
        cus_details:{type:String, required:true},
        ship_details:{type:String, required:true},
        tran_id:{type:String, required:true},
        val_id:{type:String, required:true},

        serving_Method:{type:String, required:true},
        delivery_status:{type:String, required:true},
        payment_status:{type:String, required:true},

        total:{type:String, required:true},
        vat:{type:String, required:true},
        shipping:{type:String, required:false},
        payable:{type:String, required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)
let InvoiceModel = mongoose.model('invoices' ,DataSchema)
module.exports = InvoiceModel;