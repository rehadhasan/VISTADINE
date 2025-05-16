const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        name:{type:String, required:true},
        image:{type:String, required:true},
        designation:{type:String, required:true},
        facebook:{type:String, required:true},
        twitter:{type:String, required:true},
        instagram:{type:String, required:true},
        linkedin:{type:String, required:true},
        status:{type:String, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const TeamModel = mongoose.model('teams', DataSchema)

module.exports = TeamModel;