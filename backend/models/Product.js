const mongoose = require('mongoose');
const { Rating } = require('./Rating');


const {Schema}=mongoose;

const ProductSchema=new Schema({
    productName:String,
    description:String,
    price:Number,
    first_category:String,
    second_category:String,
    quantity:Number,
    colors:[String],
    main_images:[String],
    image_without_bg:String,
    colors_images:[String],
    sale:{type:Number,default:-1},
    width:Number,
    depth:Number,
    length:Number,
    dateAdded:{type:Date,default:Date.now}
});
ProductSchema.methods.rating=async function(){
   
    const ratings=await Rating.find({'productId':this._id});
    
    if (ratings.length==0){
        return 0;

    }else{
        const sum=ratings.reduce((acc,rating)=>acc+rating.note,0)
        const avg=Math.trunc(sum/ratings.length);
        return avg;
    }

}


module.exports={Product:mongoose.model('Product',ProductSchema),ProductSchema:ProductSchema}
