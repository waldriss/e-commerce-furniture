const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config();





const expiresTime=24*60*60*1000;

const JWT_ACCESS_SECRET=process.env.JWT_SECRET;
const JWT_REFRESH_SECRET=process.env.JWT_REFRESH_SECRET
const handleRefreshToken = async (req, res) => {
    try {
      
      const authorizationHeader = req.header("Authorization");
      // Split the authorization header value
      if(!authorizationHeader) return res.status(400).json({message:"no header"});
      const splitAuthorizationHeader = authorizationHeader.split(" ");
    
      // Get the type of token and actual token
      const refresh = splitAuthorizationHeader[0];
      const refreshToken = splitAuthorizationHeader[1];
      
      // Check the type
      if (refresh !== "Refresh")
        return res
          .status(400)
          .json({ message: "The type is must be a Bearer" });
    
       

      if (!refreshToken) return res.status(404).json({message:"No token found"});
      
      //// nrmlmnt hna tred no refresh token
      const user = await User.findOne({ refresh_token: refreshToken });
      if (!user) {
       
          return res.status(401).json({ message: 'invalid token' });
        }
        
  
        jwt.verify(refreshToken,JWT_REFRESH_SECRET,
            (err,decoded)=>{
              
                if(err||!user._id.equals(decoded.userId)) return res.status(403).json({ message: 'invalid token' });
                const access_token=jwt.sign(
                    { userId: user._id },
                    JWT_ACCESS_SECRET,
                    {expiresIn:'3600s'}
                );
                // good verif here
                res.status(200).json({access_token,expiresIn:new Date().setTime(new Date().getTime()+expiresTime) });



            });
  
    } catch (err) {
      res.status(500).json({ message: err.message });
  
    }
  };



  module.exports = { handleRefreshToken }