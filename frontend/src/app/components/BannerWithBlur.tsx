import Link from 'next/link'
import React from 'react'
import sales_img from "@/public/sales.webp"

const BannerWithBlur = () => {
  return (
    <section className='relative w-full h-[500px] bg-cover bg-center bg-fixed  smcart:bg-local  flex justify-center items-center flex-col mt-16 mb-24 ' style={{ backgroundImage: `url(${sales_img.src})`}} >
        

        
        <h2 className="z-[3] text-white text-center py-3 px-5 text-[2rem] lg:text-[1.5rem] smcart:text-[1.2rem] tracking-[5px] backdrop-blur-[10px] font-thin font-serif bg-[rgb(51,51,61,0.5)] w-full"> explore our special offers on stylish sofas today! </h2>
        <Link className='z-[3] mt-5 bg-[#A37A74] text-white font-sans tracking-wider no-underline px-5 py-3 smcart:px-4 font-thin text-xl rounded-[3px] border-[#A37A74] border-solid border-[1px] ' href="/products?first_category=Sofas+and+armchairs&onsale=1&min_price=0&max_price=1000"> Explore </Link>
        <div className='w-full h-full absolute bg-[rgb(51,51,61,0.2)]'>
        </div>
      </section>
  )
}

export default BannerWithBlur