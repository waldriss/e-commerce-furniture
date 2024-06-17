
import React, { useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5';

import ProductInfosAddBtn_Colors_Container from './ProductInfosAddBtn_Colors_Container';

const ProductInfos = ({productWidth,productLength,productDepth,searchParams,productId,productName,productDescription,productPrice,product_colors_images,product_colors}:{productWidth:string,productLength:string,productDepth:string,searchParams:any,productId:string,productName:string,productDescription:string,productPrice:number,product_colors_images:[] | string[],product_colors:[] | string[]}) => {
    const sizes=[37,38,39,40,41,42,43,44];
        /*{sizes.map((size,index)=><span  onClick={()=>selectsize(index)} className={`inline-block rounded-[10px] py-[5px] px-5 border-[1px] border-solid border-black  cursor-pointer duration-[0.1s] ease-in hover:text-white hover:bg-black ${selectedsize==index&&'text-white bg-black'}`}> {size}</span> )}*/

   
  return (
    <div className='pl-[50px] xxl:pl-6 pr-[70px] xxl:pr-4 flex-1 xl:w-full xl:px-14 xl:mt-14 lg:px-7 md:px-4 smcart:px-3'>
    
    <h2 className='font-semibold font-sans pb-5 text-[1.5em] smcart:text-[1.4em] '>{productName}</h2>
    <span className='text-[1.2rem] font-serif'> €{productPrice}</span>
    <hr className='border-0 bg-[#33333d] h-[4px] mt-5 w-full' />
    <span className='inline-block py-[5px] px-[10px] font-serif text-[0.8rem] bg-[#A37A74] font-thin rounded-[10px] text-white mt-[30px]'> In Stock</span>

    <h3 className='text-[1.2rem] font-sans font-semibold pb-[10px] pt-5 text-[#A37A74] '>Description</h3>
    <p className='text-[1rem] max-w-[600px] xl:max-w-full font-serif'>{productDescription}</p>
    <section className='pt-5 flex justify-around items-center '>
    <h3 className='text-[1.2rem] font-sans font-semibold  '> length:{productLength}</h3>
    <h3 className='text-[1.2rem] font-sans font-semibold  '> depth:{productDepth}</h3>
    <h3 className='text-[1.2rem] font-sans font-semibold  '> width:{productWidth}</h3>
    
    </section>
    
    <ProductInfosAddBtn_Colors_Container productId={productId} product_colors_images={product_colors_images} product_colors={product_colors}/>

    {/*<div className='cursor-pointer flex items-center'>
    <IoHeartOutline  /> <span className='text-[1.1rem]'> ADD TO LIST</span>
  </div>*/}
  </div>
  )
}

export default ProductInfos