const mongoose = require("mongoose");
const { userSchema } = require("./usermodel");

const teamSchema = mongoose.Schema({
    team_name:{
        type:String,
    },
    team_tagline:{
        type:String,
    },
    team_member:
    [
        {
            type:mongoose.Schema.ObjectId,
            ref:'User',
            sparse:true
            
        }
    ],
});

const Team = mongoose.model("Team" , teamSchema);
module.exports = Team;