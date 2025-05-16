const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        userID:{type:mongoose.Schema.Types.ObjectId, require:true},
        invoiceID:{type:mongoose.Schema.Types.ObjectId, require:true},
        name:{type:String, required:true},
        email:{type:String, required:true},
        phone:{type:String, required:true},
        pickup_Date:{type:String, required:true},
        pickup_Time:{type:String, required:true},
        order_Notes:{type:String, required:false}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const PickUpModel = mongoose.model('pickups', DataSchema)

module.exports = PickUpModel;