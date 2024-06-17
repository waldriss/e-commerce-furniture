"use client"
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { IoCloseOutline } from 'react-icons/io5';
import { useSession } from 'next-auth/react';
import { cartProductInterface, TCart } from '../../typing/interfaces';
import { useGetCart } from '../../functions/api/queries';

const CartCheckoutProducts = ({initialCart}:{initialCart:TCart}) => {
  const [showCartProducts,setshowCartProducts]=useState(false);

  const {data:session}=useSession();

  const {data:cart}=useGetCart(session?.user?.userId,initialCart) as {data:TCart}

  

    
  return (
    <>
      <div className={`-ml-4 fixed top-0 bg-[rgb(0,0,0,0.4)] w-screen h-screen z-[12] opacity-0 transition-opacity duration-[0.35s] pointer-events-none ${showCartProducts ? 'pointer-events-auto opacity-100' : ''}`} onClick={() => setshowCartProducts(false)} >  </div>

      <button onClick={()=>setshowCartProducts(true)}   className={`mt-4  text-xl font-thin font-sans tracking-wider bg-[#A37A74] text-white no-underline px-5 py-3 smcart:px-4  rounded-full shadowbottom_btn border-[#A37A74] border-solid border-[1px] absolute right-4 smcart:right-2 hidden lg:block md:mt-2 sm:-mt-10 sm:left-2 `}> Show Cart </button>

      <section className={` rounded-lg  w-1/3 xl:w-[45%] pl-4 pt-3  bg-[#595969] pb-4  lg:fixed lg:top-24 lg:w-[370px]  transition-all duration-[0.35s] lg:right-7 lg:z-[13] smcart:w-full smcart:right-0 ${showCartProducts?'lg:opacity-100 translate-x-[0px]':'lg:opacity-0 lg:translate-x-[408px] smcart:translate-x-full' } `}>
          <IoCloseOutline onClick={()=>setshowCartProducts(false)}  className='absolute text-[2.1rem] top-4 text-[#f2e8d9] right-5 cursor-pointer' /> 
          <h1 className='text-[1.5em] -ml-4 pl-4 pb-3 text-[#f2e8d9]  font-light font-sans border-b-[#626274] border-solid border-b-[1px] '> Cart summary </h1>

          <div className='  mt-[15px] mb-[15px] -ml-4 pl-4 mr-2  flex flex-col h-[400px] gap-[15px] overflow-auto pr-1 customScrollBar lg:h-[380px]  '>
          {cart?.cartProducts?.map((cartProductWithQty:cartProductInterface,index:number)=><CheckoutProduct  key={index}  cartProduct={cartProductWithQty.product} quantity={cartProductWithQty.quantity} ProductColor={cartProductWithQty.color} />)}
          </div>

          <div className=' flex-1 border-t-[1px] -ml-4 pl-4 border-solid border-[#585869] pr-4 flex flex-col gap-[10px] pt-4 lg:pt-3'>
          <div className='flex justify-between'>
            <span className='text-[1.1rem] font-serif text-white'> SubTotal</span>
            <span className='text-[1.1rem] font-serif text-white'> €{cart?.totalPrice}</span>

          </div>
          <div className='flex justify-between'>
            <span className='text-[1.1rem] font-serif text-white'> Shipping</span>
            <span className='text-[1.1rem] font-serif text-white'> Free</span>
          </div>

        </div>





      </section>
    </>
  )
}

export default CartCheckoutProducts