import Link from 'next/link'
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

const Animatedbtn = ({addtoCart}:{addtoCart:()=>void}) => {
  return (
    <button onClick={addtoCart} className="relative inline-flex bg-[#A37A74] items-center justify-center p-4 px-9 py-4 overflow-hidden font-thin  transition duration-200 ease-out border-2 border-[#A37A74] rounded-[3px] shadowbtn shadow-[#A37A74] group hover:border-[#4f4f5e]">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-200 -translate-x-full bg-[#4f4f5e]  group-hover:translate-x-0 ease">
      <CiShoppingCart className='text-4xl' />
      </span>
      <span className="absolute tracking-wider text-xl font-thin font-sans  flex items-center justify-center w-full h-full text-white bg-[#A37A74] transition-all duration-200 transform group-hover:translate-x-full ease">Add To Cart</span>
      <span className="relative  invisible">Add To Cart</span>
    </button>
  )
}

export default Animatedbtn