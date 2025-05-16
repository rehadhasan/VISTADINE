const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        userID:{type:mongoose.Types.ObjectId, required:true},
        productID:{type:mongoose.Types.ObjectId, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const WishModel = mongoose.model('wishes', DataSchema)

module.exports = WishModel;