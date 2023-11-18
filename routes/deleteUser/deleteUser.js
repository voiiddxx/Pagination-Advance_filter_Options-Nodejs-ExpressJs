const express = require("express");
const {User} = require("../../models/usermodel");

const deleteuserRouter = express.Router();

//  CREATING API FOR DELETING THE USER

    deleteuserRouter.delete("/api/user:id" , async(req , res)=>{
        try {
            if(req.params.id){
                await User.findByIdAndDelete(req.params.id);
                res.json({status:"Deleted"});
            }
            else{
                return res.status(400).json({message:"No id found"});
            }
        } catch (error) {
            return res.status(500).json({error:error.message});
        }
    })

module.exports = deleteuserRouter;