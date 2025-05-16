const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        userID:{type:mongoose.Schema.Types.ObjectId, require:true},
        invoiceID:{type:mongoose.Schema.Types.ObjectId, require:true},
        name:{type:String, required:true},
        email:{type:String, required:true},
        phone:{type:String, required:true},
        table_No:{type:String, required:true},
        waiter_Name:{type:String, required:false},
        order_Notes:{type:String, required:false}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const TableModel = mongoose.model('tables', DataSchema)

module.exports = TableModel;