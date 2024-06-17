import React from 'react'

import bg_svg from "@/public/bg_svg_categ.svg"
import HomeCategories_Elements from './HomeCategories_Elements';

const HomeCategories = ({collectionListAnimation}:{collectionListAnimation?:any}) => {
  return (
    <section style={{ 'backgroundImage': `url(${bg_svg.src})`}}  className='  relative bg-[#33333d] gap-y-[40px] gap-x-0 flex flex-col items-center mt-52 mb-52  polygon overflow-visible overflow-x-clip ' >
      
    <HomeCategories_Elements/>  
      

      </section>
  )
}

export default HomeCategories