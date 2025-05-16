const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        userID:{type:mongoose.Types.ObjectId, required:true},
        fullName:{type:String, required:true},
        emailAddress:{type:String, required:true},
        numberOfPersons:{type:String, required:true},
        phone:{type:String, required:true},
        checkInDate:{type:String, required:true},
        checkInTime:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const ReservationModel = mongoose.model('reservations', DataSchema)

module.exports = ReservationModel;