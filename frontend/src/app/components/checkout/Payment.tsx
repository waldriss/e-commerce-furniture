
import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import paypalLogo from "@/public/PayPal.svg.webp"
import visalogo from "@/public/Visa_Logo.png"
import Link from 'next/link';
import CardPayment from './CardPayment';

const Payment = ({searchParams}:{searchParams:{step:string,payment:string}}) => {
 


  return (
    <section className='pt-3 pl-2 w-2/3 pr-6 lg:w-[95%]'>
        <h1 className='text-[2.2em] smcart:text-[1.75rem] font-semibold font-sans text-[#33333d] mb-4  '>Payment </h1>
        <hr className='mt-3   border-solid border-4 lg:border-[3px] border-[#33333d] w-60 lg:w-[180px] smcart:w-[150px]  mb-12 lg:mb-6' />

        <div className=' flex gap-x-8 w-full justify-center h-32 '>
            <Link href={"/checkout?step=payment&&payment=card"} className={` cursor-pointer transition-all duration-[0.15s] ease-in relative flex flex-col justify-center items-center w-[200px]   rounded-md border-solid border-[3px]  shadow-xl hover:scale-[1.05] ${searchParams?.payment=="card"?" border-[#3d3d48] bg-[#595969]":" border-[#595969]"}`} >
            <img className='w-[55%]  mb-4 '  src={visalogo.src} />
            <p className={`duration-[0.15s] ease-in text-[13px] tracking-wider font-sans  absolute bottom-6 ${searchParams?.payment=="card"?"text-[#f2e8d9]":"text-[#33333d]"} `} >pay with credit card</p>
            

            </Link>
            <Link href={"/checkout?step=payment&&payment=paypal"}  className={` cursor-pointer transition-all duration-[0.15s] ease-in relative flex flex-col justify-center items-center w-[200px]   rounded-md border-solid border-[3px]   shadow-xl hover:scale-[1.05] ${searchParams?.payment!="card"?" border-[#3d3d48] bg-[#595969]":" border-[#595969]"}`}>
                <img className='w-[70%] mb-4 '  src={paypalLogo.src} />
                <p className={`duration-[0.15s] ease-in text-[13px] tracking-wider font-sans absolute bottom-6 ${searchParams?.payment!="card"?"text-[#f2e8d9]":"text-[#33333d]"} `} >pay with paypal</p>
            </Link>
        </div>


        <CardPayment/>

    </section>
  )
}

export default Payment