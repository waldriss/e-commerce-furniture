import React from 'react'
import bg_body from "@/public/bgbody3.svg"
import Stepper from '../components/checkout/Stepper'
import CartCheckoutProducts from '../components/checkout/CartCheckoutProducts'
import CheckoutDetails from '../components/checkout/CheckoutDetails'
import InformationLine from '../components/InformationLine'
import { getServerSession } from 'next-auth'
import { getServerSideCartProducts } from '../functions/api/serverSideRequests'
import { TCart } from '../typing/interfaces'
import { authOptions } from '../api/auth/AuthOptions'


const CheckoutPage = async({searchParams}:{searchParams:{step:string,payment:string}}) => {
  const session = await getServerSession(authOptions);
  let initialCart: TCart | undefined = undefined;
  if (session?.user?.userId)
  {  initialCart = await getServerSideCartProducts(session.user.userId);}
  return (
    <main className="pt-[150px] pb-6 min-h-screen lg:pt-[150px] bg-[#f2e8d9]" style={{ 'backgroundImage': `url(${bg_body.src})`}}>
      <Stepper searchParams={searchParams}/> 
      <section className=' flex justify-between items-start mt-14 pb-2 pl-4 pr-4 smcart:pl-1 smcart:pr-1 '>
      
      <CheckoutDetails searchParams={searchParams}/>
      {initialCart&&<CartCheckoutProducts initialCart={initialCart}/>}
      </section> 
      <InformationLine/>

    </main>
  )
}

export default CheckoutPage