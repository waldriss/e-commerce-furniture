import React, { useState } from 'react'

import Link from 'next/link';
import NavSecondLinks from './NavSecondLinks';

const NavLinks = () => {
    const links=["Beds and mattresses","Tables and chairs","Textile","Cabinets","Lighting","Sofas and armchairs"];
    const secondary_link0=["bed"];
    const secondary_link1=["Coffee tables","Dining tables","Desks"];
    const secondary_link3=["Showcases and buffets","Hinged cabinets","Mirrors","Hallways","TV stands","Dressers"];
    const secondary_link4=["Sconce","Chandelier"];
    const secondary_link5=["Straight sofa","Corner sofa","Poufs","Armchairs"];
    const [show_secondary_links,setShow_secondary_links]=useState([false,false,false,false,false,false]);
    
  return (
  <>
    <ul
            className={`flex items-center justify-end w-full mr-36 xl:hidden `}
      
            
          >
            {links.map((link,firstindex) =>
            <li key={firstindex} className="font-sans relative ml-[30px] mr-[10px] leading-[82px] flex justify-center items-center z-[1] xl:m-0 xl:w-full">
              <Link
              
              onMouseOver={() =>setShow_secondary_links((prev)=>prev.map((item,second_index) =>firstindex==second_index?true:item))}
              onMouseOut={() =>setShow_secondary_links((prev)=>prev.map((item,second_index) =>firstindex==second_index?false:item))}
                className='font-light text-[20px] relative text-center no-underline tracking-[0.5px] text-black after:content-[""] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-[20px] after:bg-black after:rounded-full after:transition-all after:duration-[400] hover:after:w-full    '
                href={`/products/?first_category=${link}`}
                >
                {link}
              </Link>
            </li>  
              
                )}
          </ul>

          <NavSecondLinks  key={1}id={0} first_category="Beds and mattresses" links={secondary_link0} setShow_secondary_links={setShow_secondary_links} show_secondary_links={show_secondary_links} />
          <NavSecondLinks  key={2}id={1} first_category="Tables and chairs" links={secondary_link1} setShow_secondary_links={setShow_secondary_links} show_secondary_links={show_secondary_links} />
          <NavSecondLinks  key={3}id={3} first_category="Cabinets" links={secondary_link3} setShow_secondary_links={setShow_secondary_links} show_secondary_links={show_secondary_links} />
          <NavSecondLinks  key={4}id={4} first_category="Lighting" links={secondary_link4} setShow_secondary_links={setShow_secondary_links} show_secondary_links={show_secondary_links} />
          <NavSecondLinks  key={5}id={5} first_category="Sofas and armchairs" links={secondary_link5} setShow_secondary_links={setShow_secondary_links} show_secondary_links={show_secondary_links} />


          
  </>

  )
}

export default NavLinks