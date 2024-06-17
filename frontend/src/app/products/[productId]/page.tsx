import React, { Suspense } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { ProductInfoInterface, ProductInterface } from '../../typing/interfaces'
import { getServerSideproductbyid, getServerSideproducts } from '../../functions/api/serverSideRequests'
import ProductInfoContainer from '../../components/products/productInfo/ProductInfoContainer'
import bg_body from "@/public/bgbody3.svg";
import ProductInfoProductsProvider from '../../components/products/productInfo/ProductInfoProductsProvider'
import LoadingSvg from '../../components/LoadingSvg'

type Params={
  params:{productId:string},
  searchParams:any
}


const ProductInfosPage = async({params:{productId},searchParams}:Params) => {
  const product:ProductInfoInterface=await getServerSideproductbyid(productId);
  const SuspensFallback=<div className="w-full flex items-center justify-center">
  <LoadingSvg/>
  </div>

  
  
  return (
    <div className='pt-[180px] pb-[100px] bg-[#f2e8d9] xl:pt-36 ' style={{ 'backgroundImage': `url(${bg_body.src})`}}>
   <ProductInfoContainer  initialProduct={product} productId={productId} searchParams={searchParams}/>
   <Suspense fallback={SuspensFallback} >
    <ProductInfoProductsProvider/>
   </Suspense>
   </div>
  )
}

export default ProductInfosPage


/*export async function generateStaticParams(){
  const productsdata:Promise<Product[]>= getproducts({});
  const products=await productsdata;
  products.map(product=>({productId:product._id}))
}*/