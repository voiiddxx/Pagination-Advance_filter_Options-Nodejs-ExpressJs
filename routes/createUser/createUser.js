const express = require("express");
const {User} = require("../../models/usermodel");

const createUserRouter = express.Router();
    

// CREATING API FOR USER CREATION

createUserRouter.post("/api/users" , async(req,res)=>{
    try {
        const {first_name,
            last_name,
            email,
            avatar,
            gender,
            available,
            domain} = req.body;

            if(first_name && last_name && email &&  gender && avatar &&  domain){
                let ExistingUser = await User.findOne({email});
                if(ExistingUser){
                    res.status(400).json({message:"User is Already available with this email address"});
                }
                
                else{
                    let user = new User({
                        first_name,
                        last_name,
                        email,
                        gender,
                        avatar,
                        domain,
                        available
                    });
                    user = await user.save();
                    res.json(user);
                }
            }
            else{
                res.status(400).json({message:"Please Fill All Feild"});
            }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"There is some error occured"});
    }
})
module.exports = createUserRouter;