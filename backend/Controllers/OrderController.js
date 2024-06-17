const Cart = require('../models/Cart');
const { Order } = require('../models/Order');
const Product = require('../models/Product');


const createOrder = async (req, res) => {
    try {
        const { user, products,CartId } = req.body




        const deleteCart = await Cart.findByIdAndDelete(CartId);
        
        for await (element of products){
            const updateQuery = { _id: element._id };
            const updateOperation = { $inc: { quantity: -element.orderQuantity } };
            const buyprodect= await Product.updateOne(updateQuery, updateOperation);
        }
        const newOrder = new Order({
            user: user,
            products: products
        });
        


        const result = await newOrder.save();
        
        res.status(201).json({ sucess: `new Order created` })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}


const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.body.id);
        res.status(200).json({...order,totalprice:order.TotalPrice()});
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}


const ShowOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

const DeleteOrder = async (req, res) => {
    const deleteOrder = Order.findByIdAndDelete(req.body.id)
        .then(() => res.status(201).json({ sucess: `Order deleted` }))
        .catch((err) => res.status(500).json({ message: err.message }))
}