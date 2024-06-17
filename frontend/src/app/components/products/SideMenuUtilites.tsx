"use client"
import React from 'react'

import { IoOptionsOutline } from 'react-icons/io5';
import { UseSideMenuStore } from '../../Store/Store';

const SideMenuUtilites = () => {
    const {ShowSidemenu,SetShowSidemenu} = UseSideMenuStore();
  return (
    <>
     <div className={`background_darker background_darker_cart ${ShowSidemenu?'background_darker_open':''}`} onClick={()=>SetShowSidemenu(false)} >  </div>

<div className='hidden justify-end pt-0 pr-[40px] pb-5 pl-0 lg:flex'>
<button onClick={()=>SetShowSidemenu(true)} className='flex justify-center items-center no-underline py-3 px-5  cursor-pointer text-xl font-thin font-sans tracking-wider bg-[#A37A74] text-white shadowbottom_btn border-[#A37A74] border-solid border-[1px] rounded-full'> 
<span className=''>Filters</span>  
<IoOptionsOutline className=' text-[20px] ml-[15px] mt-[6.5px]' />
</button>

</div>
    </>
  )
}

export default SideMenuUtilites