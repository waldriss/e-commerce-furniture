"use client"
import Image from 'next/image'
import React from 'react'


const ProductInfoColors = ({selectedcolor,setselectedcolor,productId,product_colors_images,product_colors}:{selectedcolor:string,setselectedcolor:(value:string)=>void,productId:string,product_colors_images:[]|string[],product_colors:[]|string[]}) => {
  
  return (product_colors_images.length!=0&&
    <>
    <h3 className='text-[1.2rem] font-sans font-semibold pb-[10px] pt-5 text-[#A37A74]'> Colors</h3>
    <div className='flex overflow-x-scroll pt-2 pb-4  gap-y-[10px] gap-x-[15px] customScrollBar_dark'>
      {product_colors_images?.map((imageurl:string,index:number)=> <Image height={80} width={80} key={index} onClick={()=>setselectedcolor(product_colors[index])} src={"https://get.ru/"+imageurl} alt=""  className={` w-20 cursor-pointer rounded-lg border-[3px]  ${selectedcolor==product_colors[index]?'border-[#A37A74]':''}`}/> )}
      
    </div>
    </>
  )
}

export default ProductInfoColors