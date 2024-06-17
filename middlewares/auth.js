const {check}=require("express-validator");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");



exports.loginValidation=[
    check("email","Email is required").not().isEmpty(),
    check("password","Password is required").not().isEmpty(),

]
exports.auth = async (req, res, next) => {
      
    const authorizationHeader = req.header("Authorization");
    // Split the authorization header value
    if(!authorizationHeader) return res.status(400).json({message:"no header"});
    const splitAuthorizationHeader = authorizationHeader.split(" ");
  
    // Get the type of token and actual token
    const bearer = splitAuthorizationHeader[0];
    const token = splitAuthorizationHeader[1];
  
    // Check the type
    if (bearer !== "Bearer")
      return res
        .status(400)
        .json({ message: "The type is must be a Bearer" });
  
    // Check the token
    if (!token) return res.status(404).json({message:"No token found"});
    const providerheader = req.header("provider");
    if(providerheader==="google"){
      const response = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`);
    

      if (response.ok) {
        const data = await response.json();
        
        const existingUser = await User.findOne({ email: data.email });
        
        if(existingUser){
          //req.userId=existingUser._id;
          next();
    
    
        }else{
          return res.status(401).json({message:"Unauthorized"});
     
        }
       
      }
      else{
        
        res.status(401).json({message:"Unauthorized"});

      }




    }
    else{
    try {
      jwt.verify(token,process.env.JWT_SECRET,
        (err,decoded)=>{

        if(err)  return res.status(401).json({message:"Unauthorized"});
        //req.userId = decoded.userId;
        next();

      });
  
      
  
   
    } catch (err) {
      
      res.status(401).json({message:"Unauthorized"});
    }
  }
  };