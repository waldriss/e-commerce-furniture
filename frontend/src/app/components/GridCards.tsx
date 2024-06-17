import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import card1 from "@/public/grid_Cards/card1.webp"
import card2 from "@/public/grid_Cards/card2.webp"
import card3 from "@/public/grid_Cards/card3.webp"
import card4 from "@/public/grid_Cards/card4.webp"



const GridCards = () => {
  return (
    <section className='mt-28 grid grid-cols-3 grid-rows-3 gap-3 px-28 xl:px-20 lg:px-10 h-[850px] md:px-6 smcart:h-[700px] smcart:px-3 '>
    <div className='flex flex-col rounded-lg items-center row-span-2 smcart:hidden'>
      <Link  href="" className='block h-full relative rounded-lg overflow-hidden w-full group '>
        <Image quality={100} className="cursor-pointer object-cover w-full h-full duration-[0.3s] group-hover:scale-[1.2] group-hover:brightness-75" src={card1} alt="" />
        <div className='absolute left-8 bottom-12 duration-[0.3s] opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 '>
        <h2  className='  font-medium text-white text-2xl font-serif  '> Niels Dumchato-ser velure with</h2>
        <h3  className='  mt-1 font-medium text-white text-xl font-serif  '> €884.92</h3>

        </div>
        

      </Link>

      

    </div>
    <div className='flex flex-col rounded-lg items-center col-span-2 smcart:col-span-3  '>
      <Link href=""  className='group block h-full relative rounded-lg overflow-hidden w-full '>
        <Image width={800} quality={100} className="cursor-pointer object-cover  w-full h-full duration-[0.3s] group-hover:scale-[1.2] group-hover:brightness-75" src={card4} alt="" />
        <div className='absolute left-8 bottom-12 duration-[0.3s] opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 '>
        <h2  className='  font-medium text-white text-2xl font-serif  '> Niels Dumchato-ser velure with</h2>
        <h3  className='  mt-1 font-medium text-white text-xl font-serif  '> €884.92</h3>

        </div>      
      </Link>

      
    </div>
    <div className='flex flex-col rounded-lg items-center col-span-2 smcart:col-span-3 '>
      <Link href="/products/658452fc98f78eba9eacbfc8" className='group block h-full relative rounded-lg overflow-hidden w-full '>
        <Image width={800} quality={100} className="cursor-pointer object-cover w-full h-full duration-[0.3s] group-hover:scale-[1.2] group-hover:brightness-75" src={card3} alt="" />
        <div className='absolute left-8 bottom-12 duration-[0.3s] opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 '>
        <h2  className='  font-medium text-white text-2xl font-serif  '> Como Mini Schenel Moon</h2>
        <h3  className='  mt-1 font-medium text-white text-xl font-serif  '> €502.73</h3>

        </div>      
      </Link>

     
    </div>
    <div className='flex flex-col rounded-lg items-center col-span-3'>
      <Link href="" className='group block h-full relative rounded-lg overflow-hidden w-full '>
        <Image width={1000} quality={100} className="cursor-pointer object-cover w-full h-full duration-[0.3s] group-hover:scale-[1.2] group-hover:brightness-75" src={card2} alt="" />
        <div className='absolute left-8 bottom-12 duration-[0.3s] opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 '>
        <h2  className='  font-medium text-white text-2xl font-serif  '> Niels Dumchato-ser velure with</h2>
        <h3  className='  mt-1 font-medium text-white text-xl font-serif  '> €884.92</h3>

        </div>      
      </Link>

     
    </div>

  </section>
  )
}

export default GridCards