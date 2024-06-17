const mongoose = require('mongoose')
const {UserSchema}=require('./User');
const {ProductSchema}=require('./Product');

const {Schema}=mongoose;
const FavoriteProductsSchema=new Schema({
    user:{type:UserSchema,required:true },
    products:[{type:ProductSchema,required:true}],
    
});
module.exports={FavoriteProducts:mongoose.model('FavoriteProducts',FavoriteProductsSchema)};