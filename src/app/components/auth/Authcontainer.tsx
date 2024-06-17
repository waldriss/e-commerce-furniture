
"use client"
import React, { useEffect, useState } from 'react'
import SigninMenu from './SigninMenu';
import SignupMenu from './SignupMenu';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import AnimatedIllustration from './AnimatedIllustration';
import Loading from '../../loading';



const Authcontainer = () => {
  const router=useRouter();
  const {data:session,status}=useSession();
  const [message,setmessage] = useState("");


  

  
  

   
  if(session?.user){router.push('/')}
    const [signup, setsignup] = useState(false);
    
  return (
    status!=='loading'?
    <>
    {
  !session?.user&&<div className='w-[50%] md:w-[80%] smcart:w-[92%] '>
    {!signup ?
    <SigninMenu message={message} setmessage={setmessage} setsignup={setsignup}/>:<SignupMenu setmessage={setmessage} setsignup={setsignup}/>
    }
    </div>
    }

    <AnimatedIllustration/>

    </>
    :

    <Loading subclass='-mt-[160px]'/>
  )
}

export default Authcontainer