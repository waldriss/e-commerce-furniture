"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import mainimg from "@/public/main_banner.webp"
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import LoadingSvg from './LoadingSvg';

const Banner = ({imageAnimation,textAnimation}:{textAnimation:any,imageAnimation:any}) => {
  const {data:session}=useSession();
  const [startAnimation,setStartAnimation]=useState(false);
  

  return (
    <>
    <div  className={`${startAnimation?"hidden":"flex"} fixed z-[100] bg-[#f2e8d9]  top-0 left-0 h-screen w-screen justify-center items-center `}>
          <LoadingSvg/>
    </div>
    
    <section className="w-full flex justify-center overflow-hidden relative  pb-[115px]">
        <motion.div
          initial={{}}
          variants={imageAnimation}
          animate={startAnimation?"to":undefined}
          className="relative smcart:h-32 smcart:w-16 md:h-60 md:w-44 h-96 w-96 "
        >
          
          <Image onLoad={()=>{setStartAnimation(true);}} src={mainimg.src} width={1400} height={700}  className={`${startAnimation?"visible":"invisible"} h-full w-full object-cover object-center`}  alt="" />
          
        </motion.div>
        <motion.div
        variants={textAnimation}
        initial="from"
        animate={startAnimation?"to":undefined}
        className=' absolute overflow-hidden  h-[500px] mt-[115px] w-full'>
        <h1
          
          className=" pl-14 smcart:pl-6 text-[3.2rem] lg:text-[2.5rem]  md:text-4xl smcart:text-3xl   leading-tight font-extrabold font-serif relative text-white pt-16 z-[2] pr-10"
        >
          <span className='text-[#A37A74]'>Transform Your Home</span> <br /> Where Style Meets Functionality
        </h1>
        <p
        
        className='relative font-sans text-white text-lg lg:text-base smcart:hidden font-light  pt-3 pl-14 smcart:pl-6  max-w-2xl lg:max-w-lg smcart:max-w-sm '
        >
          Discover a world of style and comfort at Brand Name. Our carefully curated furniture collection embodies the perfect fusion of aesthetics and functionality. Elevate your living spaces with our handpicked pieces, each crafted to add a touch of elegance to your home. 

        </p>
        <Link
          
          className=" tracking-wider shadowbottom_btn relative inline-block ml-14 smcart:ml-6 mt-11 bg-[#A37A74] font-sans text-xl md:text-lg md:px-6 md:py-3  text-white no-underline px-8 py-4  shadow-[#A37A74]   rounded-[3px] border-2 border-[#A37A74] font-thin  border-solid   "
          href={session?.user?"/products?first_category=Beds%20and%20mattresses":"/auth"}
        > {session?.user?"Click Here to Discover":"Sign up for free"}</Link>
        </motion.div>
      </section>
      </>
  )
}

export default Banner