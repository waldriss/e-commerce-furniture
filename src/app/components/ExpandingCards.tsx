"use client"
import React, { useEffect, useState } from 'react'
import imgcard1 from "@/public/expanding_cards/exp1_1.webp"
import imgcard2 from "@/public/expanding_cards/exp2_1.webp"
import imgcard3 from "@/public/expanding_cards/exp3_1.webp"
import imgcard4 from "@/public/expanding_cards/exp4_1.webp"
import imgcard5 from "@/public/expanding_cards/exp5_1.webp"

import { motion } from "framer-motion";
import Link from 'next/link';
import { useMediaQuery } from '../functions/mediaqueryhook'
import Image from 'next/image'

const MotionLink = motion(Link);
const MotionImage=motion(Image);
const ExpandingCards = () => { /*w-[45%] top-10*/
    const islg=useMediaQuery('(max-width: 800px)');
    const ismd=useMediaQuery('(max-width: 720px)');
    const issmcart=useMediaQuery('(max-width: 540px)');
    
   
    const [IsExpanding,setIsExpanding] =useState(3);
    const layoutDuration={layout:{type:"spring",stiffness:400,damping:30}}
    const boxanimation_link={
        transition:{type:"spring",stiffness:400,damping:30,delay:0.2},
        initial:{opacity:0,y:"40%"},
        animate:{opacity:1,y:'0'}
    };
    const boxanimation_link1={
        transition:{type:"spring",stiffness:400,damping:30,delay:0.3},
        initial:{opacity:0,y:"40%"},
        animate:{opacity:1,y:'0'}
    };
    const boxanimation_link2={
        transition:{type:"spring",stiffness:400,damping:30,delay:0.2},
        initial:{opacity:0,y:"60%",rotate:-90,x:"50%"},
        animate:{opacity:1,y:'0'}
    };
    useEffect(()=>{
        if(issmcart){
            if(IsExpanding==3) setIsExpanding(2)
            
        }
        if(ismd){
            if(IsExpanding==4) setIsExpanding(3)
            
        }
        if(islg){
            if(IsExpanding==5) setIsExpanding(4)
            
        }

    },[islg,ismd,issmcart])

  return (
    <motion.section layout className='h-[650px] px-2 bg-transparent  w-full flex items-center justify-between   ' >
<motion.div layout transition={layoutDuration}  className={`bg-transparent h-4/5 mx-2  w-[12%] cursor-pointer overflow-hidden relative xl:mx-1 smcart:w-[16%] ${IsExpanding==1?'!w-[600px] md:!w-[480px] smcart:!w-[380px]  ':''}`}onClick={()=>setIsExpanding(1)} style={{"borderRadius":"16px"}}>
    <MotionImage layout={'preserve-aspect'} width={700} height={600} quality={100}  transition={{duration:0}}className=' w-[600px] max-w-none h-full ' src={imgcard1.src} alt="" />
{IsExpanding==1?<>
<motion.h2 {...boxanimation_link} className='absolute left-8 bottom-[92px]  font-semibold text-white text-3xl font-serif  '> Beds</motion.h2>
<MotionLink {...boxanimation_link1} href='/products?first_category=Beds%20and%20mattresses&second_category=bed' className='absolute left-8 bottom-8 text-white text-2xl rounded-full no-underline px-6 py-[8px] shadowbottom_btn font-thin font-sans tracking-wider border-[#A37A74] border-solid bg-[#A37A74] border-[1px]  '> Shop Collection</MotionLink>
</>:<motion.h2 {...boxanimation_link2} className='absolute right-8 whitespace-nowrap top-28 font-semibold text-white text-[1.7rem] font-serif xl:-right-7 xl:text-2xl md:text-[1.3rem]  '> Beds</motion.h2>
}
</motion.div>

<motion.div layout transition={layoutDuration}  className={`bg-transparent h-4/5 mx-2  w-[12%] cursor-pointer overflow-hidden relative xl:mx-1 smcart:w-[16%] ${IsExpanding==2?'!w-[600px] md:!w-[480px] smcart:!w-[380px] ':''}`}onClick={()=>setIsExpanding(2)} style={{"borderRadius":"16px"}}>
    <MotionImage layout={'preserve-aspect'} width={700} height={600} quality={100}  transition={{duration:0}}className='w-[600px] max-w-none h-full ' src={imgcard2.src} alt="" />
{IsExpanding==2?<>
<motion.h2 {...boxanimation_link} className='absolute left-8 bottom-[92px]  font-semibold text-white text-3xl font-serif  '> Dressers</motion.h2>
<MotionLink {...boxanimation_link1} href='/products?first_category=Cabinets&second_category=Dressers' className='absolute left-8 bottom-8 text-white text-2xl rounded-full no-underline px-6 py-[8px] shadowbottom_btn font-thin font-sans tracking-wider border-[#A37A74] border-solid bg-[#A37A74] border-[1px]  '> Shop Collection</MotionLink>
</>:<motion.h2 {...boxanimation_link2} className='absolute right-8 whitespace-nowrap top-28 font-semibold text-white text-[1.7rem] font-serif xl:-right-7 xl:text-2xl md:text-[1.3rem]  '> Dressers</motion.h2>
}
</motion.div>

<motion.div layout transition={layoutDuration}  className={`bg-transparent h-4/5 mx-2  w-[12%] cursor-pointer overflow-hidden relative xl:mx-1 smcart:hidden smcart:w-[16%] ${IsExpanding==3?'!w-[600px] md:!w-[480px] smcart:!w-[380px]  ':''}`}onClick={()=>setIsExpanding(3)} style={{"borderRadius":"16px"}}>
    <MotionImage layout={'preserve-aspect'} width={700} height={600} quality={100}  transition={{duration:0}}className=' w-[600px] max-w-none h-full ' src={imgcard3.src} alt="" />
{IsExpanding==3?<>
<motion.h2 {...boxanimation_link} className='absolute left-8 bottom-[92px]  font-semibold text-white text-3xl font-serif  '> Dining tables</motion.h2>
<MotionLink {...boxanimation_link1} href='/products?first_category=Tables%20and%20chairs&second_category=Dining%20tables' className='absolute left-8 bottom-8 text-white text-2xl rounded-full no-underline px-6 py-[8px] shadowbottom_btn font-thin font-sans tracking-wider border-[#A37A74] border-solid bg-[#A37A74] border-[1px]  '> Shop Collection</MotionLink>
</>:<motion.h2 {...boxanimation_link2} className='absolute right-8 whitespace-nowrap top-28 font-semibold text-white text-[1.7rem] font-serif xl:-right-7 xl:text-2xl md:text-[1.3rem]  '>Dining tables</motion.h2>
}
</motion.div>


<motion.div layout transition={layoutDuration}  className={`bg-transparent h-4/5 mx-2  w-[12%] cursor-pointer overflow-hidden relative xl:mx-1 md:hidden smcart:w-[16%] ${IsExpanding==4?'!w-[600px] md:!w-[480px] smcart:!w-[380px]  ':''}`}onClick={()=>setIsExpanding(4)} style={{"borderRadius":"16px"}}>
    <MotionImage layout={'preserve-aspect'} width={700} height={600} quality={100}  transition={{duration:0}}className=' w-[600px] max-w-none h-full ' src={imgcard4.src} alt="" />
{IsExpanding==4?<>
<motion.h2 {...boxanimation_link} className='absolute left-8 bottom-[92px]  font-semibold text-white text-3xl font-serif  '>Hinged cabinets</motion.h2>
<MotionLink {...boxanimation_link1} href='/products?first_category=Cabinets&second_category=Hinged%20cabinets' className='absolute left-8 bottom-8 text-white text-2xl rounded-full no-underline px-6 py-[8px] shadowbottom_btn font-thin font-sans tracking-wider border-[#A37A74] border-solid bg-[#A37A74] border-[1px]  '> Shop Collection</MotionLink>
</>:<motion.h2 {...boxanimation_link2} className='absolute right-8 whitespace-nowrap top-28 font-semibold text-white text-[1.7rem] font-serif xl:-right-7 xl:text-2xl md:text-[1.3rem]  '>Hinged cabinets</motion.h2>
}
</motion.div>


<motion.div layout transition={layoutDuration}  className={`bg-transparent h-4/5 mx-2  w-[12%] cursor-pointer overflow-hidden relative xl:mx-1 lg:hidden smcart:w-[16%] ${IsExpanding==5?'!w-[600px] md:!w-[480px] smcart:!w-[380px]  ':''}`}onClick={()=>setIsExpanding(5)} style={{"borderRadius":"16px"}}>
    <MotionImage layout={'preserve-aspect'} width={700} height={600} quality={100}  transition={{duration:0}}className='absolute right-0 w-[600px] max-w-none h-full ' src={imgcard5.src} alt="" />
{IsExpanding==5?<>
<motion.h2 {...boxanimation_link} className='absolute left-8 bottom-[92px]  font-semibold text-white text-3xl font-serif  '> TV stands</motion.h2>
<MotionLink {...boxanimation_link1} href='/products?first_category=Cabinets&second_category=TV%20stands' className='absolute left-8 bottom-8 text-white text-2xl rounded-full no-underline px-6 py-[8px] shadowbottom_btn font-thin font-sans tracking-wider border-[#A37A74] border-solid bg-[#A37A74] border-[1px]  '> Shop Collection</MotionLink>
</>:<motion.h2 {...boxanimation_link2} className='absolute right-8 whitespace-nowrap top-28 font-semibold text-white text-[1.7rem] font-serif xl:-right-7 xl:text-2xl md:text-[1.3rem]  '> TV stands</motion.h2>
}
</motion.div>
  
    </motion.section>
  )
}

export default ExpandingCards