const mongoose = require('mongoose')


const {Schema}=mongoose;

const UserSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phone:String,
    address:String,
    role:String,
    refresh_token:String
});
module.exports={User:mongoose.model('User',UserSchema),UserSchema:UserSchema}
