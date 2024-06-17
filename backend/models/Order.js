const mongoose = require('mongoose')
const {UserSchema}=require('./User');
const {ProductSchema}=require('./Product');

const {Schema}=mongoose;

const OrderSchema=new Schema({
    user:{type:UserSchema,required:true },
    products:[{product:{type:ProductSchema,required:true},orderQuantity:Number}],
    date:{type:Date,default:Date.now},
    status:{type:String,default:'pending'}
});
/*
OrderSchema.methods.TotalPrice=()=>{
    this.products.reduce((total,products)=>total+product,0);
}*/
module.exports={Order:mongoose.model('Order',OrderSchema)};
