
const express= require('express');
const { CreateProduct,FilterProducts,ShowProductbyid,tesst } = require('./Controllers/ProductController');
const { login, signup, getAuthenticatedUser, logout, googleLogIn, getGoogleUser } = require('./Controllers/UserController');
const { getCartbyUser, addProductToCart, removeProductFromCart, ChangeNumberOfProductFromCart } = require('./Controllers/CartController');
const { addProductToFavorite, removeProductFromFavorite, getFavoriteProducts, checkProductInFavorite } = require('./Controllers/FavoriteProductsController');
const { AddRating, getProductRating } = require('./Controllers/RatingController');
const { auth } = require('./middlewares/auth');
const { handleRefreshToken } = require('./Controllers/refreshTokenController');



routes=express.Router();

routes.get('',FilterProducts);
routes.get('/product',ShowProductbyid)
routes.post('',CreateProduct);
//-----------auth
routes.post('/login',login);
routes.post('/signup',signup);
routes.get("/getAuth", auth, getAuthenticatedUser);
routes.post('/logout',auth,logout);

routes.post('/googleLogin',googleLogIn)
routes.post('/getGoogleUser',auth,getGoogleUser)

//-----------auth
routes.post('/refreshToken',handleRefreshToken);

routes.post('/getCart',getCartbyUser)

routes.post('/AddProductToCart',addProductToCart)
routes.post('/removeProductFromCart',removeProductFromCart);
routes.post('/ChangeNumberOfProductFromCart',ChangeNumberOfProductFromCart);


routes.post('/AddProductToFavorite',addProductToFavorite);
routes.post('/removeProductFromFavorite',removeProductFromFavorite);

routes.post('/rateProduct',AddRating);



module.exports = routes;
