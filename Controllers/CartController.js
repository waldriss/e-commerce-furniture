const { Cart } = require('../models/Cart');
const {Product} = require('../models/Product');
const {User} = require('../models/User');

const getCartbyUser=async(req,res)=>{
    try {
        const { userId } = req.body
        const existedcart = await Cart.findOne({ 'user._id': userId });

        if (!existedcart) {
            res.status(201).json({ cartProducts:[],totalPrice:0 });

        }
        else{
            const totalPrice=existedcart.products.reduce((total,productswithqty)=>total+(productswithqty.product.sale!==-1?productswithqty.product.sale:productswithqty.product.price)*productswithqty.quantity,0)
            res.status(201).json({ cartProducts:existedcart.products,totalPrice:totalPrice });

        }
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }

}

const addProductToCart = async (req, res) => {
    try {
        const { userId, productId,color } = req.body
        
        const user=await User.findById(userId);
        const product = await Product.findById(productId);
       

        const existedcart = await Cart.findOne({ 'user._id': userId });
        if (!existedcart) {
            const newCart = new Cart({
                user: user,
                $push: []
            });
            
            newCart.products.push({product:product, quantity: 1,color:color});
            const result = await newCart.save();
            
            res.status(201).json({ success: `new Cart created` });

        } else {
            if (existedcart.products.some((product_with_qty)=>product_with_qty.product._id.equals(product._id)&&product_with_qty.color==color)) {
               
                
                existedcart.products.map((cart_product) => { if (cart_product.product._id.equals(product._id)&&cart_product.color==color) { cart_product.quantity++; } })
                await existedcart.save();
                res.status(201).json({ success: `product added to cart` });
            }
            else {
                existedcart.products.push({product:product, quantity: 1,color:color});
                await existedcart.save();
                res.status(201).json({ success: `product added to cart` });
            }

        }


    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}
const removeProductFromCart = async (req, res) => {
    try {
        let { userId, productId,color } = req.body
        if(color==undefined){color=""}
        
        const existedcart = await Cart.findOne({ 'user._id': userId });
        if (!existedcart) {

            res.status(201).json({ message: `Cart does not exist` });

        } else {
            
            existedcart.products=existedcart.products.filter((product_with_qty)=>{
               if(product_with_qty.product._id.equals(productId)==true&&product_with_qty.color==color){
                return false}
               else{ return true} });
            
            await existedcart.save();
            
            if(existedcart.products.length!=0){
                
                res.status(201).json({ success: `product removed from cart` ,cartProducts:existedcart.products} );
            }
            else{
                
                const deleteCart = await existedcart.deleteOne();
                

                res.status(201).json({success:"cart deleted"});

            }

        }

    }
    catch (err) {
        res.status(500).json({ message: err.message })

    }
}


const ChangeNumberOfProductFromCart = async (req, res) => {
    try {
        let { userId, productId,qty,color} = req.body
        if(color==undefined){color=""}
        const existedcart = await Cart.findOne({ 'user._id': userId });
   
        if (!existedcart) {
           

            res.status(201).json({ message: `Cart does not exist` });

        } else {
           
            const index_remove=-1.
          /*  await Cart.updateOne({ _id: existedcart._id }, { $pull: { products: product } });
            res.status(201).json({ success: `product removed from cart` });*/
            existedcart.products.map((product_with_qty,index) => { if (product_with_qty.product._id.equals(productId)&&product_with_qty.color==color) { product_with_qty.quantity=qty;
            if (product_with_qty.quantity<=0) index_remove=index  } })
            if(index_remove>-1) existedcart.products.splice(index_remove,1);
                await existedcart.save();
                res.status(201).json({ success: `product cart quantity updated`});

        }

    }
    catch (err) {
        res.status(500).json({ message: err.message })

    }
}


const ShowCarts = async (req, res) => {
    try {
        const carts = await Cart.find({});
        res.status(200).json(Carts);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

const DeleteCart = async (req, res) => {
    const deleteCart = Cart.findByIdAndDelete(req.body.id)
        .then(() => res.status(201).json({ success: `Cart deleted` }))
        .catch((err) => res.status(500).json({ message: err.message }))
}


module.exports = { getCartbyUser,addProductToCart,removeProductFromCart,ChangeNumberOfProductFromCart }