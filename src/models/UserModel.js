const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        firstName:{type:String, required:true},
        lastName:{type:String, required:true},
        email:{type:String, required:true, unique:true},
        phone:{type:String, required:true},
        password:{type:String, required:true},
        photo:{type:String, required:false, default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTalRtNSLyUU_nNW2Z8_qQO8hTz9bXUh_jg&s'}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const UserModel = mongoose.model('users', DataSchema)

module.exports = UserModel;