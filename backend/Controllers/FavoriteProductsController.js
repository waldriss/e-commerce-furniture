const {FavoriteProducts} = require("../models/FavoriteProducts");
const {Product} = require("../models/Product");
const {User} = require("../models/User");



const checkProductInFavorite=async(req,res)=>{
    try {
        
        
        const {userId,productId}=req.query
        if(userId=='undefined'||productId=='undefined'){
            return res.status(201).json({});

        }
        const user=await User.findById(userId);
        if(user){
            
            
            const existed_favorites_products = await FavoriteProducts.findOne({ 'user._id': userId });
            if (existed_favorites_products) {
               
                
                if (existed_favorites_products.products.some((favoriteproduct)=>favoriteproduct._id.equals(productId))){
                    
                   
                    res.status(201).json({ productInFavorite:true });

                }
                else{
                    
                    res.status(201).json({ productInFavorite:false });

                }
            }
            else{ 
                res.status(201).json({ productInFavorite:false });
            }
         }
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: err.message })
    }




}

const getFavoriteProducts=async(req,res)=>{
    try {
        const { userId } = req.body
        const existed_favorites_products = await FavoriteProducts.findOne({ 'user._id': userId });

        if (!existed_favorites_products) {
            res.status(201).json({message:"user has no favorite"});
        }
        else{
            res.status(201).json({ FavoriteProducts:existed_favorites_products.products });

        }
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
}



const addProductToFavorite=async (req,res)=>{
    try {
        
        const { userId, productId } = req.body
        const user=await User.findById(userId);
        const product = await Product.findById(productId);
       
        const existed_favorites_products = await FavoriteProducts.findOne({ 'user._id': userId });
        if (!existed_favorites_products) {
            const newFavorite = new FavoriteProducts({
                user: user,
                $push: []
            });
            
            newFavorite.products.push(product);
            
            const result = await newFavorite.save();
            
            res.status(201).json({ success: `new Favorite created` });
        }
        else{
           
            if (!existed_favorites_products.products.some((favoriteproduct)=>favoriteproduct._id.equals(product._id))) {
                existed_favorites_products.products.push(product);
                await existed_favorites_products.save();
                res.status(201).json({ success: `product added to Favorite` });

            }
            else{
                res.status(201).json({message:"product is already in favorite"});
            }
        }

    }
    catch(err){
        res.status(500).json({ message: err.message })
    }


}


const removeProductFromFavorite=async(req,res)=>{
      try{
        
        const { userId, productId } = req.body

        const existed_favorites_products = await FavoriteProducts.findOne({ 'user._id': userId });
        if (!existed_favorites_products) {
            res.status(201).json({ message: `user has no products in favorite` });

        }
        else{
            existed_favorites_products.products=existed_favorites_products.products.filter((favoriteproduct)=>!(favoriteproduct._id.equals(productId)))
            await existed_favorites_products.save();
            if(existed_favorites_products.products.length!=0){
                
                res.status(201).json({ success : `product removed from favorite` } );
            }
            else{
                
                const deleteFavorite = await existed_favorites_products.deleteOne();
                

                res.status(201).json({success :"favorite deleted"});

            }

        }



      }
      catch(err){
        res.status(500).json({ message: err.message })
        }
      
}


module.exports={checkProductInFavorite,getFavoriteProducts,addProductToFavorite,removeProductFromFavorite}