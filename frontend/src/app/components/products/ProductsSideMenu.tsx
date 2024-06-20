"use client"
import React, { useEffect } from 'react'
import bg_body from "@/public/bgbody3.svg"

import SortMenu from './SortMenu';
import { IoCloseOutline } from 'react-icons/io5';
import FilterPriceMenu from './FilterPriceMenu';
import FilterColorsMenu from './FilterColorsMenu';
import { UseSideMenuStore } from '../../Store/Store';
import FilterSizeMenu from './FilterSizeMenu';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { TFilterattributes } from '../../typing/global';

const ProductsSideMenu = ({searchParams,setcolorsFilter,colorsFilter}:{searchParams:TFilterattributes,colorsFilter:string,setcolorsFilter:any}) => {
  const {data:session}=useSession();
  const router=useRouter();


  useEffect(()=>{
    setcolorsFilter("");
    /*if("favorite"in searchParams){
      if(!session?.user)
      {router.push('/');

      }
    }*/
  },[searchParams.first_category,searchParams.second_category])
  
  
    const {ShowSidemenu,SetShowSidemenu} = UseSideMenuStore();
  return (
    <div style={{ 'backgroundImage': `url(${bg_body.src})`}} className={` bg-transparent lg:bg-[#f2e8d9] w-[22%] h-[300px]  pl-[40px] relative xl:pl-[30px] xl:w-[30%] lg:fixed lg:h-screen lg:top-0 lg:z-[12] lg:w-[500px] lg:pt-0 lg:pr-9 lg:overflow-y-scroll lg:duration-[0.35s] lg:left-[-500px] lg:shadowsidemenu md:w-screen md:left-[-100vw] ${ShowSidemenu?'lg:translate-x-full':'lg:translate-x-0 '} lg:customScrollBar_dark  `}>
    <IoCloseOutline className='text-[2.2rem] absolute top-[29px] right-[26px] cursor-pointer hidden lg:block' onClick={() =>SetShowSidemenu(false)} />
    <h1 className='text-[2em] font-medium font-sans pt-5 '> Filters </h1>
      <hr className='border-solid border-[3px] lg:border-[3px] mb-6 border-[#33333d] w-24   ' />

    <SortMenu  searchParams={searchParams} />

    
    <FilterPriceMenu searchParams={searchParams} />
    <FilterSizeMenu searchParams={searchParams}/>
    <FilterColorsMenu colorsFilter={colorsFilter} setcolorsFilter={setcolorsFilter} searchParams={searchParams} />
    

</div>
  )
}

export default ProductsSideMenu