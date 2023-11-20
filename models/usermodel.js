const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name:{
        type:String,
    },
    last_name:{
        type:String
    },
    email: {
        type: String,
        required: true,
        sparse:true,
        validate: {
          validator: function (value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Invalid email address format',
        },
      },
      gender:{
        type:String,
      },
      avatar:{
        type:String
      },
      domain:{
        type:String,
      },
    available:{
        type:Boolean
    }
});

const User = mongoose.model("User" , userSchema);
module.exports = {User , userSchema};
