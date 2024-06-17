"use client"
import { UseLogInAlertStore, UseShowCartStore } from '@/src/app/Store/Store';
import { useAddProductToCart } from '@/src/app/functions/api/mutations';
import { useSession } from 'next-auth/react';
import React from 'react'

const ProductInfoAddbtn = ({selectedcolor,productId,product_colors}:{selectedcolor:any,productId:string,product_colors:[]|string[]}) => {
    const {data:session}=useSession();
    const {SetShowLogInAlert} = UseLogInAlertStore();



    const {setshowcart} = UseShowCartStore();
    const {mutateAsync:addProductToCart}=useAddProductToCart()

    const  addtoCart=async()=>{
        if(session?.user?.userId){

        
        if(Array.isArray(product_colors)&&product_colors?.length!=0){
            if(selectedcolor!=''){
                await addProductToCart({userId:session.user.userId,color:selectedcolor,productId})

                setshowcart(true);
                
            
    
            }
            else{

            }

    
        }
        else{
            await addProductToCart({userId:session.user.userId,color:"",productId})

            setshowcart(true);
        }
    }
      }

  return (
    <button onClick={session?.user?addtoCart:()=>{SetShowLogInAlert(true);}} className='bg-[#A37A74] text-white no-underline py-3 px-5 w-full text-xl font-thin font-sans tracking-wider border-[1px] border-solid border-[#A37A74] cursor-pointer mt-[30px] mb-5 rounded-[3px]'> ADD TO CART</button>

  )
}

export default ProductInfoAddbtn