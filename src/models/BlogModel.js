const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        title:{type:String, required:true},
        image:{type:String, required:true},
        content:{type:String, required:true},
        remark:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const BlogModel = mongoose.model('blogs', DataSchema)

module.exports = BlogModel;