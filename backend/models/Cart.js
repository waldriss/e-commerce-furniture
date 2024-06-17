const mongoose = require('mongoose')
const {UserSchema}=require('./User');
const {ProductSchema}=require('./Product');

const {Schema}=mongoose;

const CartSchema=new Schema({
    user:{type:UserSchema,required:true },
    products:[{product:{type:ProductSchema,required:true},quantity:Number,color:String}],
    
});
module.exports={Cart:mongoose.model('Cart',CartSchema)};
