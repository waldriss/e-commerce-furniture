import { TFilterattributes } from "../typing/global";
import { ProductInterface, TCart } from "../typing/interfaces";

export const convertToUrlSearchParams=( filterattributes: TFilterattributes)=>{
    return Object.entries(filterattributes)
    .filter(([_, value]) => value !== undefined)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);
}


export function addFavoritedByToProductFromList(products: ProductInterface[], productId: string, userId: string): ProductInterface[] {
  return products.map(product => {
    if (product._id === productId) {
      return {
        ...product,
        favoritedBy: [...product.favoritedBy, userId]
      };
    }
    return product;
  });
}


export function removeFavoritedByFromProductFromList(products: ProductInterface[], productId: string, userId: string): ProductInterface[] {
  return products.map(product => {
    if (product._id === productId) {
      return {
        ...product,
        favoritedBy: product.favoritedBy.filter(id => id !== userId)
      };
    }
    return product;
  });
}




export function addFavoritedByToOneProduct(product: ProductInterface, userId: string): ProductInterface {
  if (product) {
    return {
      ...product,
      favoritedBy: [...product.favoritedBy, userId]
    };
  }
  return product;
}


export function removeFavoritedByFromOneProduct(product: ProductInterface, userId: string): ProductInterface {
  if (product) {
    return {
      ...product,
      favoritedBy: product.favoritedBy.filter(id => id !== userId)
    };
  }
  return product;
}



export function updateRatingProducts(products: ProductInterface[], productId: string,initialRating:number,userNewRating:number,userInitialRating?:number): ProductInterface[] {
  return products.map(product => {
    if (product._id === productId) {
      return {
        ...product,
        averageRating:userInitialRating?((initialRating*product.ratings.length)-userInitialRating+userNewRating)/product.ratings.length:((initialRating*product.ratings.length)+userNewRating)/(product.ratings.length+1)
      };
    }
    return product;
  });
}

export function updateRatingofOneProduct(product: ProductInterface,initialRating:number,userNewRating:number,userInitialRating?:number): ProductInterface {
 
      return {
        ...product,
        averageRating:userInitialRating?((initialRating*product.ratings.length)-userInitialRating+userNewRating)/product.ratings.length:((initialRating*product.ratings.length)+userNewRating)/(product.ratings.length+1)
      };
   

}




export function updateNumberOfProductInCart(cart: TCart, productId: string, color: string, newQuantity: number): TCart {
  let newTotalPrice=cart.totalPrice;
  const updatedCartProducts = cart.cartProducts.map(cartProduct => {
    if (cartProduct.product._id === productId && cartProduct.color === color) {
      
      if(cartProduct.product.sale===-1)
      newTotalPrice=newTotalPrice-(cartProduct.quantity*cartProduct.product.price)+(newQuantity*cartProduct.product.price) 
      else
      newTotalPrice=newTotalPrice-(cartProduct.quantity*cartProduct.product.sale)+(newQuantity*cartProduct.product.sale)
      
      return {
        ...cartProduct,
        quantity: newQuantity
      };
    }
    return cartProduct;
  });

  return {
    ...cart,
    cartProducts: updatedCartProducts,
    totalPrice:newTotalPrice

  };
}


export function updateRemoveProductFromCart(cart: TCart, productId: string, color: string,productPrice:number,productQuantity:number): TCart {
  let newTotalPrice=cart.totalPrice-productPrice*productQuantity;
  const updatedCartProducts = cart.cartProducts.filter(cartProduct=>cartProduct.color!==color||cartProduct.product._id!==productId)

  return {
    ...cart,
    cartProducts: updatedCartProducts,
    totalPrice:newTotalPrice

  };
}