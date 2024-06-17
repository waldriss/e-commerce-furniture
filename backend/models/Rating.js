const mongoose = require('mongoose')
const {UserSchema}=require('./User');

const {Schema}=mongoose;

const RatingSchema=new Schema({
    
    user:{type:UserSchema,required:true },
    productId:String,
    
    note:Number,
    
});

module.exports={Rating:mongoose.model('Rating',RatingSchema)};