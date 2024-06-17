"use client"
import React from 'react'
import { BsBoxSeam, BsCreditCard2Back, BsTruck } from 'react-icons/bs'
import { motion } from "framer-motion";

const InformationLine = ({collectionListAnimation,homePage}:{collectionListAnimation?:any,homePage?:boolean}) => {
    const motion_animation={variants:collectionListAnimation, initial:"from", animate:"to"};

  return (
    <motion.section {...collectionListAnimation&&homePage?motion_animation:{}}  className='w-full text-white bg-[#33333d] flex h-20 items-center justify-center mt-10 shadow1 gap-x-4 gap-y-[30px] py-0 px-[30px] xl:px-1 xl:gap-x-3 lg:flex-col lg:h-auto lg:py-4 lg:px-3 lg:gap-y-9 md:px-2'>
    <div className='flex gap-y-0 gap-x-[20px] justify-center items-center text-[13px] xl:text-xs xl:gap-x-2 lg:gap-x-6 lg:text-[13px] md:gap-x-4'>
      <BsBoxSeam className='text-[35px]'/>
      <p className='text-left font-serif '> Free Shipping. All orders of $49 or more of eligible items across any product category qualify</p>
    </div>
    <div className='flex gap-y-0 gap-x-[20px] justify-center items-center text-[13px] xl:text-xs xl:gap-x-2 lg:gap-x-6 lg:text-[13px] md:gap-x-4'>
      <BsCreditCard2Back className='text-[35px]'/>
      <p className='text-left font-serif '> Free Shipping. All orders of $49 or more of eligible items across any product category qualify</p>
    </div>
    <div className='flex gap-y-0 gap-x-[20px] justify-center items-center text-[13px] xl:text-xs xl:gap-x-2 lg:gap-x-6 lg:text-[13px] md:gap-x-4'>
      <BsTruck className='text-[35px]'/>
      <p className='text-left font-serif '> Free Shipping. All orders of $49 or more of eligible items across any product category qualify</p>
    </div>
    

  </motion.section>
  )
}

export default InformationLine