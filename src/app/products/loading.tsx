import Image from 'next/image'
import React from 'react'
import loader from "@/public/Infinity-1s-249px.svg"
import bg_body from "@/public/bgbody3.svg"

const Loading = () => {
  return (
    <div  className="pt-[150px] flex justify-center items-center w-screen h-screen bg-[#f2e8d9]"  style={{ 'backgroundImage': `url(${bg_body.src})`}}>
        <Image height={250} width={250} src={loader.src} alt={loader.src}/>
    </div>
  )
}

export default Loading