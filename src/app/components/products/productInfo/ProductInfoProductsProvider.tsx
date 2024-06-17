import { getServerSideproducts } from '@/src/app/functions/api/serverSideRequests';
import { ProductInterface } from '@/src/app/typing/interfaces';
import React from 'react'
import ProductInfoProducts from './ProductInfoProducts';

const ProductInfoProductsProvider = async() => {
  
    const products:ProductInterface[]=await getServerSideproducts({limit:"8"});
  
  return (
    <ProductInfoProducts initialProducts={products} />
  )
}

export default ProductInfoProductsProvider