import React, { useEffect } from 'react'

import { IoCloseOutline, } from "react-icons/io5";
import bg_body from "@/public/bgbody3.svg"

import Link from 'next/link';
import CartProduct from './CartProduct';

import { useSession } from 'next-auth/react';
import { cartProductInterface, TCart } from '../typing/interfaces';
import { useGetCart } from '../functions/api/queries';

///here control if error

const Cart = ({showcart,setshowcart,initialCart }:{showcart:boolean,setshowcart:(value:boolean)=>void,initialCart?:TCart}) => {
  const {data:session}=useSession();
  



  const {data:cart}=useGetCart(session?.user?.userId,initialCart) as {data:TCart}
  

  


        
    


  return (
    session?.user&&
    <div style={{ 'backgroundImage': `url(${bg_body.src})`}} className={` fixed bg-[#f2e8d9] z-[13] h-screen w-[480px]  right-0 pt-[30px] pl-[30px] flex flex-col pr-[10px] duration-[0.25s] smcart:w-screen
     ${showcart?'translate-x-0':'translate-x-full'}`}>
      <h1 className='text-[2em] font-medium font-sans'> Cart </h1>
      <hr className='border-solid border-[3px] lg:border-[3px] border-[#33333d] w-24   ' />
      <IoCloseOutline className='absolute top-[37px] text-[2.1rem] right-5 cursor-pointer' onClick={()=>setshowcart(false)}/> 
      <div className=' mt-[30px] flex flex-col h-[400px] gap-[15px] overflow-auto pr-[10px] customScrollBar_dark'>
        {cart?.cartProducts?.map((cartProductWithQty,index:number)=><CartProduct setshowcart={setshowcart} key={index} userId={session.user?.userId}   cartProduct={cartProductWithQty.product} quantity={cartProductWithQty.quantity} ProductColor={cartProductWithQty.color} />)}
        

        
        

          

        
        

      </div>
      <div className=' flex-1  pt-5 flex flex-col gap-[10px]'>
        <div className='flex justify-between'>
          <span className='text-[1.1rem] font-serif'> SubTotal</span>
          <span className='text-[1.1rem] font-serif'> €{parseFloat(cart?.totalPrice.toFixed(2))}</span>

        </div>
        <div className='flex justify-between'>
          <span className='text-[1.1rem] font-serif'> Shipping</span>
          <span className='text-[1.1rem] font-serif'> Free</span>
        </div>
        <Link onClick={()=>setshowcart(false)} href='/checkout' className='bg-[#A37A74] text-white no-underline py-3 px-5 w-full border-[1px] border-solid cursor-pointer mt-[30px] mb-5 rounded-[5px] text-xl font-thin font-sans tracking-wider text-center border-[#A37A74]'>Proceed to checkout</Link>

      </div>


    </div>
  )
}

export default Cart