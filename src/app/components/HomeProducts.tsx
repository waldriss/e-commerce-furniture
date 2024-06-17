import React from 'react'
import Product from './products/Product'
import { ProductInterface } from '../typing/interfaces';
import { getServerSideproducts } from '../functions/api/serverSideRequests';
import HomeProductsClientProvider from './HomeProductsClientProvider';

const HomeProducts = async() => {
 
  const products:ProductInterface[]=await getServerSideproducts({limit:"8"});
 
 
 
  
  return (
   <HomeProductsClientProvider initialProducts={products} />
  )
}

export default HomeProducts