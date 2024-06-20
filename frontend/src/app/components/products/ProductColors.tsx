"use client"
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProductColors = ({product_colors,showcolors,setshowcolors,setselectedcolor,selectedcolor}:{product_colors:[]|string[],showcolors:boolean,setshowcolors:(value:boolean)=>void,setselectedcolor:(value:string)=>void,selectedcolor:string}) => {

    const selectcolor=(color:string)=>{
       setselectedcolor(color);

    }
    
  return (
    <>
   <div className={`smcart:-top-[346px] lg:-top-[266px] xxl:-top-[293px] -top-[312px] flex flex-col justify-end h-20  left-0   z-0  absolute mb-1   w-full duration-[0.2s] transition ${showcolors?'opacity-100 -translate-y-[60px]':'opacity-0 pointer-events-none -translate-y-0'} `}>
    <div className='bg-[#4f4f5e] p-3 flex flex-wrap gap-x-1 gap-y-1 rounded-xl'>
    {product_colors?.map((color:string,index:number)=><div key={index}  style={{backgroundColor:color}} onClick={()=>selectcolor(color)} className={` cursor-pointer w-6 h-6 rounded-full border-solid border-black ${selectedcolor==color?'border-[3px]':''} `}></div>)} 

    </div>
    </div>
    {showcolors ? <IoIosArrowDown onClick={()=>setshowcolors(false)} className='text-[#A37A74] border-[1px] border-[#A37A74] rounded-lg p-1 absolute top-4 text-3xl right-3  cursor-pointer' /> : <IoIosArrowUp onClick={()=>setshowcolors(true)} className=' text-[#A37A74] border-[1px] border-[#A37A74] rounded-lg p-1 top-4 absolute text-3xl right-3  cursor-pointer' />}
    </>

  )
}

export default ProductColors