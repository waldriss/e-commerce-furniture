import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { A } from 'million/dist/shared/million.485bbee4';

const NavSecondLinks = ({id,first_category,links,show_secondary_links,setShow_secondary_links}:{id:number,first_category:string,links:string[],show_secondary_links:boolean[],setShow_secondary_links:any}) => {
  return (
    <div onMouseOver={() =>setShow_secondary_links((prev:boolean[])=>prev.map((item:boolean,index:number) =>index==id?true:item))} 
    onMouseOut={() =>setShow_secondary_links((prev:boolean[])=>prev.map((item:boolean,index:number) =>index==id?false:item))} 
    className={`xl:hidden shadowbottom absolute w-full bg-[#f2e8d9] h-36 top-[99%] z-10 transition-opacity duration-[0.3s] ${show_secondary_links[id]?'opacity-100':'opacity-0 pointer-events-none'}`} >
        {show_secondary_links[id]&&
        <>
           <motion.hr initial={{x:"450px"}} animate={{x:"0"}} transition={{type: "spring",stiffness:400,damping:30}} className=' m-auto relative top-0   border-[#c9c9d2] w-11/12 ' />
           <motion.ul initial={{x:"450px"}} animate={{x:"0"}} transition={{type: "spring",stiffness:400,damping:30}} className='grid grid-cols-4 px-8 py-6 gap-y-6 '>
           {links.map((link:string,index:number) => 
           <motion.li key={index} className="relative font-sans  flex justify-center items-center z-[1] ">
           

           
           <Link href={`/products/?first_category=${first_category}&second_category=${link}`} className='font-light text-[20px] relative text-center no-underline tracking-[0.5px] text-black after:content-[""] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-[-3px] after:bg-black after:rounded-full after:transition-all after:duration-[400] hover:after:w-full '>
            {link}
           </Link>
           </motion.li>)}
           
           
           </motion.ul>
        </>
           }
            


          </div>
  )
}

export default NavSecondLinks