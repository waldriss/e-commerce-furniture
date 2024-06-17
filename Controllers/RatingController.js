const { Product } = require("../models/Product");
const { Rating } = require("../models/Rating");
const { User } = require("../models/User");



const AddRating=async(req,res)=>{
    try {
        
        const { productId,userId,rating } = req.body
        
        const existed_rating = await Rating.findOne({ 'user._id': userId ,'productId':productId});
        const product=await Product.findById(productId);
        if (!existed_rating) {
            const user=await User.findById(userId);
        
            const NewRating=new Rating({
                user:user,
                productId:productId,
                note:rating
            })
            const result = await NewRating.save();
            
            
            const newCalculatedRating=await product.rating();

            res.status(201).json({ sucess: `product rated`,rating:result,newCalculatedRating:newCalculatedRating });

            
        }
        else{
            existed_rating.note=rating;
            await existed_rating.save();
            const newCalculatedRating=await product.rating();

            res.status(201).json({ sucess: `Product rating updated`,rating:existed_rating,newCalculatedRating:newCalculatedRating });
        }
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }

}

const getProductRating=async(req,res)=>{
    try{
        

    
    const product=await Product.findById(req.query.productId);
    if(!product){
        
        return res.status(201).json({ message: `product does not exist` });

    }
    else{
        
        const rating=await product.rating();
        return res.status(201).json({ productRating:rating });

    }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }

}

module.exports={AddRating,getProductRating}