import React from 'react'
import Link from 'next/link'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import fauteuil from "@/public/fauteuil.png"
import svgbackground from "@/public/bg-product.svg"
import { truncate } from '@/src/app/functions/truncate'

const CheckoutProduct = ({cartProduct,quantity,ProductColor}:any) => {
  const product_image=cartProduct.image_without_bg;
  const imgsrc="https://raw.githubusercontent.com/waldriss/ecom_images/main"+product_image.split(".jpg")[0]+product_image.split(".jpg")[1]+".png";
  return (
    <div className='[&:not(:last-child)]:pb-[15px]   flex gap-[15px] [&:not(:last-child)]:border-b-[1px] [&:not(:last-child)]:border-solid [&:not(:last-child)]:border-b-[#626274]'>
          <Link style={{ 'backgroundImage': `url(${svgbackground.src})`}} href={`/products/${cartProduct._id}`} className='bg-[#4f4f5e] shadow-md rounded-xl relative flex justify-center items-center w-[130px] h-[148px] bg-cover' >
            <img className='relative z-[2] w-[98%] h-[78%] object-cover object-center shadowpng' src={imgsrc}alt="" />
            
          </Link>
          <div className='relative flex-1 flex flex-col justify-start items-start'>
            <Link href={`/products/${cartProduct._id}`} className=' no-underline break-words font-serif text-[1rem] xl:text-[0.95rem] pb-[5px] text-white'> {truncate(cartProduct.productName,25) } </Link>

            <div className=''>
                <span className='relative text-[#A37A74] font-serif xl:text-[0.95rem] '> 137x123x13</span>
                {ProductColor&&<div  style={{backgroundColor:ProductColor}}  className={` cursor-pointer absolute xl:relative xl:translate-y-0 translate-y-1 w-6 h-6 rounded-full border-solid `}></div>}
            </div>
            <div className=' w-full absolute bottom-1 flex justify-between items-center'>
              
              <span className='text-[1.05em] xl:text-[0.95rem] font-serif text-white ' > €{cartProduct.sale!==-1?cartProduct.sale:cartProduct.price}</span>

            </div>


          </div>

        </div>
  )
}

export default CheckoutProduct