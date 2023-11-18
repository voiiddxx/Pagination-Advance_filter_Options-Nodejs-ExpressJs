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
            user:userSchema
        }
    ],
});

const Team = mongoose.model("Team" , teamSchema);
module.exports = Team;