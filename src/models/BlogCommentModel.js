const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        userID:{type:String, required:true},
        blogID:{type:String, required:true},
        feedback:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const BlogModel = mongoose.model('blogComments', DataSchema)

module.exports = BlogModel;