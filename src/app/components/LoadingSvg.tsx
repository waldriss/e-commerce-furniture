import Image from 'next/image'
import React from 'react'
import loader from "@/public/Infinity-1s-249px.svg"
const LoadingSvg = ({className}:{className?:string}) => {
  return (
    
        <Image height={250} width={250} className={className} src={loader.src} alt={""}/>
   
  )
}

export default LoadingSvg