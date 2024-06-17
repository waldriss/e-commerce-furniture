import React, { useState } from 'react'
import Authcontainer from '../components/auth/Authcontainer'
import bg_body from "@/public/bgbody3.svg"
import AnimatedIllustration from '../components/auth/AnimatedIllustration'


const AuthPage = () => {
    

   
    
    return (
        <div className='pt-[160px] min-h-screen pb-7  bg-[#f2e8d9] ' style={{ 'backgroundImage': `url(${bg_body.src})`}}>
            <div className=' flex items-center justify-between px-24 xxl:px-16 xl:px-6 lg:pl-4 lg:pr-2  w-full md:justify-center md:px-2  '>
                <Authcontainer/>
                

            </div>
            
        </div>
    )
}

export default AuthPage