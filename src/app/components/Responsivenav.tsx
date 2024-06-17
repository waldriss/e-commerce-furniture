import React, { useState } from 'react'
import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Responsivenav = ({side_nav,setside_nav,showannounce}:{side_nav:boolean,setside_nav:(value:boolean)=>void,showannounce:boolean | string}) => {
    const links=["Beds and mattresses","Tables and chairs","Textile","Cabinets","Lighting","Sofas and armchairs"];
    const secondary_link0=["bed"];
    const secondary_link1=["Coffee tables","Dining tables","Desks"];
    const secondary_link3=["Showcases and buffets","Hinged cabinets","Mirrors","Hallways","TV stands","Dressers"];
    const secondary_link4=["Sconce","Chandelier"];
    const secondary_link5=["Straight sofa","Corner sofa","Poufs","Armchairs"];
    const secondary_links=[secondary_link0,secondary_link1,null,secondary_link3,secondary_link4,secondary_link5]
    const [show_secondary_links,setShow_secondary_links]=useState([false,false,false,false,false,false]);
    
  return (
  
    <ul
            className={`xl:flex hidden pt-[10px] mt-[70px] pb-3 overflow-y-scroll customScrollBar_dark  -translate-x-full z-[9] xl:bg-[#f2e8d9] xl:fixed  xl:h-screen xl:pl-0 xl:flex-col xl:justify-start xl:items-start xl:mr-0 xl:w-[70vw] xl:transition xl:duration-[0.25s] sm:w-screen ${side_nav?'translate-x-0':'-translate-x-full'} ${showannounce?'translate-y-[35px]':'translate-y-0'} `}
      
            
          >
            {links.map((link,firstindex) =>
            <li key={firstindex} className="font-sans relative leading-[82px] flex flex-col justify-center items-center  xl:m-0 xl:w-full">
              <Link
              onClick={()=>setside_nav(false)}
              
                className='font-light text-[20px] relative text-center no-underline tracking-[0.5px] text-black after:content-[""] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-[20px] after:bg-black after:rounded-full after:transition-all after:duration-[400] hover:after:w-full    '
                href={`/products/?first_category=${link}`}
                >
                {link}
              </Link>
              {
              secondary_links[firstindex]&&
              (show_secondary_links[firstindex]
              ?
              <IoIosArrowDown onClick={() =>setShow_secondary_links((prev)=>prev.map((item,second_index) =>firstindex==second_index?false:item))} className='absolute right-8 cursor-pointer top-8 text-[20px]' />
              :
              <IoIosArrowForward onClick={() =>setShow_secondary_links((prev)=>prev.map((item,second_index) =>firstindex==second_index?true:item))} className='absolute right-8 cursor-pointer top-8 text-[20px]' />

              )}
              {secondary_links[firstindex]&&
              <ul  className={`w-[75%] -mt-2 relative leading-none flex justify-center items-center flex-col gap-y-6 border-t border-b pb-4 pt-4   border-[#c9c9d2] border-solid transition-all duration-[0.3s] ${show_secondary_links[firstindex]?' visible':'hidden'} `}>
                {secondary_links[firstindex]?.map((linkName,second_index)=>
                                
                                <Link key={second_index} onClick={()=>setside_nav(false)} href={`/products/?first_category=${link}&second_category=${linkName}`} className='font-light text-[17px] relative text-center no-underline tracking-[0.5px] after:content-[""] text-black after:absolute after:h-[2px] after:w-0 after:left-0 after:-bottom-[12px] after:bg-black after:rounded-full after:transition-all after:duration-[400] hover:after:w-full '>{linkName}</Link>
                                )}
              
                

              </ul>}

            </li>  
              
                )}
          </ul>

          


          
  

  )
}

export default Responsivenav;
