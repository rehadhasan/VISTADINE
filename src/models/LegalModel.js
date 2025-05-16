const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        title:{type:String, required:true},
        content:{type:String, required:true},
        type:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const LegalModel = mongoose.model('legals', DataSchema)

module.exports = LegalModel;