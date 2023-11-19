const express = require("express");
const mongoose = require("mongoose");
const createUserRouter = require("./routes/createUser/createUser");
const getUserRouter = require("./routes/getUser/getUser");
const deleteuserRouter = require("./routes/deleteUser/deleteUser");
const updateUserRouter = require("./routes/updateUser/updateUser");
const teamRouter = require("./routes/team/team");
require("dotenv").config();
const cors = require("cors");


// INITIALIZING THE APP
const app = express();

//CONNECTING THE DATABASE
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Connected to database");
}).catch((e)=>{
    console.log(e);
})


// MIDDLEWARES
app.use(express.json());
app.use(cors());



// ROUTES CONTROLLERS
app.use(createUserRouter);
app.use(getUserRouter);
app.use(deleteuserRouter);
app.use(updateUserRouter);
app.use(teamRouter);


//  STARTING THE SERVER

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running at ${process.env.PORT}`);
})