const express = require("express");
const Team = require("../../models/teamModel");

const teamRouter = express.Router();

// CREATING API FOR TEAM CREATION

teamRouter.post("/api/team" , async (req , res)=>{
    try {
       const {team_name , team_tagline,team_member} = req.body;
      
       let team = new Team({
        team_name,
        team_tagline,
        team_member,
       });
       console.log(team_member);
       await team.save();
       res.json(team);

    } catch (error) {
        console.log(error);
        return res.status(500).json({error:error.message});
    }
});


//   API FOR GETTING ALL TEAM'

    teamRouter.get("/api/team" , async(req , res)=>{
        try {
            let team = await Team.find({});
            if(!team){
                return res.status(401).json({message:"No Team found"});
            }
            
            res.json(team);
        } catch (error) {
            return res.status(500).json({error:error.message});
        }
    })

//  API FOR FETCHING TEAM BY ID

teamRouter.get("/api/team/:id" , async(req , res)=>{
    try {
        let team = await Team.findById(req.params.id);
        if(!team){
            return res.status(400).json({message:"No Team Found"});
        }
        else{
            res.json(team);
        }
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})




module.exports = teamRouter;

