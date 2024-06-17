import React from 'react'

import categ1_img from "@/public/t1.webp"
import categ2_img from "@/public/t2.webp"
import categ3_img from "@/public/t3.webp"

import Link from 'next/link';
import Image from 'next/image';
import SvgTriangles from './SvgTriangles';
import SvgCircle from './SvgCircle';
import SvgDots from './SvgDots';
const HomeCategories_Elements = () => {
  return (
   <>
    <div  className=' mr-10 mb-[-70px] -mt-32  w-[65%] z-[3] flex justify-start items-center gap-y-0 gap-x-[40px] smcart:gap-x-7 xxl:w-[70%] lg:mr-20 lg:w-[80%] smcart:w-[95%] md:w-[90%] md:mr-0 xxl:mr-28 md:mb-0 lg:-mt-20  smcart:-mt-14 '>
          <div className='relative h-[500px] lg:h-[400px] w-[410px] md:w-[470px] smcart:h-[350px]'>
            <Image src={categ1_img} width={800} className=" rounded-xl shadowmax h-full w-full object-cover" alt="" /></div>
          <div className='flex flex-col justify-center items-start'>
            <h2 className=" text-[3rem]  xl:text-[2.8rem] md:text-[2.7rem] smcart:text-[2.2rem] text-[#A37A74] font-sans  font-semibold">  Sofas</h2>
            <h3 className=" text-start  text-white font-serif font-extralight text-lg smcart:text-base mb-5"> Contemporary comfort at its best.</h3>
            <Link href="/products?first_category=Sofas%20and%20armchairs&second_category=Straight%20sofa" className='mt-0 bg-[#A37A74] text-white font-sans text-xl shadowbottom_btn tracking-wider no-underline px-5 py-3 smcart:px-4 font-thin rounded-[3px] border-[#A37A74] border-solid border-[1px] '> Explore </Link>

          </div>
         
        </div>
       
        <SvgDots className="absolute left-4 top-72 w-72 h-72 xl:w-56 xl:h-56 lg:hidden"/>
        <div className='ml-10 mb-[-70px] w-[65%] z-[3] flex justify-start items-center gap-y-0 gap-x-[40px] smcart:gap-x-7 xxl:w-[70%] lg:ml-20 lg:w-[80%] smcart:w-[95%] md:w-[90%] md:ml-0 xxl:ml-28 md:mb-5 md:mt-5  flex-row-reverse'>

          <div className=' relative h-[500px] lg:h-[400px] w-[410px] md:w-[470px] smcart:h-[350px]'>
          <SvgCircle  className="  w-80 h-80 xl:h-60 xl:w-60 absolute -right-40 -top-40 lg:hidden"/>
            <Image width={700} src={categ2_img} className=" relative z-[4] rounded-xl shadowmax h-full w-full object-cover" alt="" /></div>
          <div className='flex flex-col justify-center items-end'>
            <h2 className=" text-[3rem]  xl:text-[2.8rem] md:text-[2.7rem] smcart:text-[2.2rem] text-[#A37A74] font-sans  font-semibold"> Mirrors</h2>
            <h3 className=" text-end ] text-white font-serif  font-extralight text-lg smcart:text-base  mb-5"> Elegance through reflection.</h3>
            <Link  href="/products?first_category=Cabinets&second_category=Mirrors" className='mt-0 bg-[#A37A74] text-white font-sans text-xl shadowbottom_btn tracking-wider no-underline px-5 py-3 smcart:px-4 font-thin rounded-[3px] border-[#A37A74] border-solid border-[1px] '> Explore </Link>

          </div>
          

        </div>
        <div className='relative mr-10 -mb-28 w-[65%] z-[3] flex justify-start items-center gap-y-0 gap-x-[40px] smcart:gap-x-7 xxl:w-[70%] lg:mr-20 lg:w-[80%] smcart:w-[95%] md:w-[90%] md:mr-0 lg:-mb-16  xxl:mr-28 smcart:-mb-10 '>
     

          <div className='h-[500px] lg:h-[400px] w-[410px] md:w-[470px] smcart:h-[350px]'>
            <Image src={categ3_img} width={700} className=" rounded-xl shadowmax h-full w-full object-cover" alt="" /></div>
          <div className='flex flex-col justify-center items-start '>
            <h2 className=" text-[3rem]  xl:text-[2.8rem] md:text-[2.7rem] smcart:text-[2.2rem] text-[#A37A74] font-sans  font-semibold">Chairs</h2>
            <h3 className="text-start  text-white font-serif  font-extralight text-lg smcart:text-base  mb-5"> Stylish functionality for gatherings.</h3>
            <Link href="/products?first_category=Tables%20and%20chairs" className='mt-0 bg-[#A37A74] text-white font-sans text-xl shadowbottom_btn tracking-wider no-underline px-5 py-3 smcart:px-4 font-thin rounded-[3px] border-[#A37A74] border-solid border-[1px] '> Explore </Link>

          </div>

        </div>
        <SvgTriangles className="w-80 h-80 xl:w-60 xl:h-60 absolute -left-5 top-[55%] lg:hidden "/>
       
   
   
   
   </>
  )
}

export default HomeCategories_Elements