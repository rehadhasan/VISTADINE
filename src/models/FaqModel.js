const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        question:{type:String, required:true},
        answer:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const FaqModel = mongoose.model('faqs', DataSchema)

module.exports = FaqModel;