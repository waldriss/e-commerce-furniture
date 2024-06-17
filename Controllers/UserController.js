const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const {OAuth2Client} = require('google-auth-library');


const JWT_SECRET=process.env.JWT_SECRET;
const JWT_REFRESH_SECRET=process.env.JWT_REFRESH_SECRET;
const expiresTime=24*60*60*1000;
const refreshexpiresTime=3*24*60*60*1000;
const client = new OAuth2Client();


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const access_token = jwt.sign({ userId: user._id }, JWT_SECRET,{expiresIn:'3600s'});

      const refresh_token=jwt.sign({ userId: user._id }, JWT_REFRESH_SECRET,{expiresIn:'3d'});
      
      user.refresh_token=refresh_token;
      await user.save();
      
      res.cookie("jwt",refresh_token,{httpOnly:true,maxAge:3*24*60*60*1000,sameSite: 'none', secure: true});



      res.status(200).json({ user:{userId:user._id,email:user.email,firstName:user.firstName,lastName:user.lastName},access_token,expiresIn:new Date().setTime(new Date().getTime()+expiresTime),refresh_token,refresh_expiresIn:new Date().setTime(new Date().getTime()+refreshexpiresTime) });

  } catch (err) {
    res.status(500).json({ message: err.message });

  }
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password, phone, address } = req.body;
  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.status(500).json({ message: "email already used." });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        phone: phone,
        address: address,
        role:"role"
      });
      const result = await newUser.save();
      /*const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour
      });*/
      res.status(201).json({ message: "User registered successfully.",user:newUser });


    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



const getAuthenticatedUser =async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    // Check the user just in case
    if (!user)
      return res.status(404).json({message:"User not found"});

    // Send the response
    res
      .status(200)
      .json({message:`Hello ${user.firstName}`, user});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message:"Server error"});
  }};


const logout=async (req, res) => {
  try {
    const cookies=req.cookies
    if(!cookies?.jwt) return res.status(401).json({message:'no token'});
    const refreshToken=cookies.jwt; 
  //is refresh token in db?
    const user = await User.findOne({ refresh_token: refreshToken });
    if (!user) {
      res.clearCookie('jwt',{httpOnly:true})
        return res.status(204).json({ message: 'invalid token' });
      }

      user.refresh_token='';
      await user.save();
      res.clearCookie('jwt',{httpOnly:true,sameSite:'None',secure:true});
      res.status(204).json({ message: 'user logged out' });



  } catch (err) {
    res.status(500).json({ message: err.message });

  }
};


//----------------------- Google Auth
const googleLogIn=async(req,res)=>{
  const { firstName, lastName, email, phone, address } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      if(firstName) existingUser.firstName=firstName;
      if(lastName) existingUser.lastName=lastName;
      if(phone) existingUser.phone=phone;

      const updated_existingUser=await existingUser.save();
      res.status(201).json({ message: "User updated successfully.",user:updated_existingUser });
    } else {
      const newUser = new User({
        firstName: firstName?firstName:'',
        lastName: lastName?lastName:'',
        email: email,
        phone: phone?phone:0,
        role:"role",
      });
      const result = await newUser.save();
    
      res.status(201).json({ message: "User registered successfully.",user:newUser });


    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

}


const getGoogleUser=async(req,res)=>{
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if(existingUser){
      res.status(201).json({ user:{userId: existingUser._id} });


    }else{
      return res.status(500).json({ message:"user does not exist" });
 
    }
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }


}




  
 



module.exports = {getGoogleUser, login,signup,getAuthenticatedUser,logout,googleLogIn }