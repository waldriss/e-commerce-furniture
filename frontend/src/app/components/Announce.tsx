import React from 'react'
import { AiOutlineTwitter  } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Announce = () => {
  return (
    <div className="bg-[#33333d]  h-[35px] w-full text-white  flex items-center justify-center relative ">
          <p className='font-serif text-sm font-light smcart:text-xs'>Discounts on sofas and armchairs!</p>
          <div className="absolute right-[40px] smcart:right-3 text-2xl flex  gap-x-[10px] smcart:gap-2 ">
            <AiOutlineTwitter  />
            <AiOutlineInstagram />
          </div>
        </div>
  )
}

export default Announce