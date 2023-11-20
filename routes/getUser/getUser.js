const express = require("express");
const {User} = require("../../models/usermodel");

const getUserRouter = express.Router();


// GETTING USER BY PAGINATION
getUserRouter.get("/api/user" , async(req , res)=>{
    try {
        const page = req.query.page;
        const limit =5;
        const startIndex = (page-1)*limit;
        const endIndex = page*limit;
        let user = await User.find({});
        const pageuser = user.slice(startIndex , endIndex);
        res.json(pageuser);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})

// CREATING API FOR GETTING THE USER USING ID

getUserRouter.get("/api/users/:id" , async(req , res)=>{
    try {
        if(req.params.id){
            
        let user = await User.findById(req.params.id);
        if(user){
            res.json(user);
        }
        else{
            return res.status(400).json({message:"No user found"});
        }
        }
        else{
            return res.status(400).json({message:"No id found"});
        }
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

// GET USER BASED ON FILTER API

getUserRouter.get("/api/users" , async(req,res)=>{

    try {
        const {domain , available , gender } = req.query;
        let queryObject = {};
        if(domain){

            queryObject.domain = domain;
        }
        if(available){
            queryObject.available = available;
        }
        if(gender){
            queryObject.gender = gender;
        }


        

        let user = await User.find(queryObject);

        let page = req.query.page;

        const limit = 5;

        const Start = (page-1)*limit;

        const lastIndex = page*limit;
        
        user = user.slice(Start , lastIndex);
        res.json(user);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

//  IMPLEMENTED SEARCH USING NAME OF THE USERS
getUserRouter.get("/api/user/search" , async(req , res)=>{
    try {
        const {first_name} = req.query;
        

        console.log(first_name);
        let querySearchObject = {};
        if(first_name){
            querySearchObject.first_name = {$regex:first_name , $options: "i"};
        }

        let user = await User.find(querySearchObject);
        if(!user){
            return res.status(400).json({message:"There is some problem occured"});
        }
        let page = req.query.page;
        
        const limit = 5;

        const Start = (page-1)*limit;

        const lastIndex = page*limit;
        
        user = user.slice(Start , lastIndex);
        
        res.json(user);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})


module.exports = getUserRouter;