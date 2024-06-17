import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import svgbackground from "@/public/bg-product.svg"
import ContainerProductButtonAndColors from './ContainerProductButtonAndColors';
import { truncate } from '../../functions/truncate';
import RatingStars from '../RatingStars';
import { rating } from '../../typing/interfaces';
import { useSession } from 'next-auth/react';


const Product = ({searchParams,product_sale,product_image,product_colors,product_name,product_id,product_price,Homeproducts,product_second_category,rating,favoritedBy,product_ratings}:{searchParams?:any,product_sale:number,product_image:string,product_colors:string[]|[],product_name:string,product_id:string,product_price:number,Homeproducts?:boolean,product_second_category:string,rating:number,favoritedBy:string[],product_ratings:rating[]}) => {
     
    const imgsrc="https://raw.githubusercontent.com/waldriss/ecom_images/main"+product_image.split(".jpg")[0]+product_image.split(".jpg")[1]+".png";
    
        const [displayImage,setDisplayImage]=useState(false);
        const { data: session } = useSession();

  const userInitialRating=product_ratings.find((rating)=>rating.user._id===session?.user?.userId.toString())?.note

    
    return (
        <div className={` flex flex-col relative  rounded-xl   ${Homeproducts==true?'w-[250px] xxl:w-[235px] smcart:w-52':'w-[250px] xxl:w-[235px] smcart:w-80   h-[516px]'} lg:w-52 md:w-[235px] `}>
           
            <Link style={{ 'backgroundImage': `url(${svgbackground.src})`}} href={`/products/${product_id}`} className={`h-72 lg:h-60  xxl:h-[270px] shadow-xl rounded-xl bg-cover bg-[#4f4f5e] z-[1]  ${Homeproducts==true?'w-[250px] xxl:w-[235px] smcart:w-52 ':'w-[250px] xxl:w-[235px] smcart:w-80 smcart:!h-80'}   block lg:w-52 md:w-[232px]  relative ${!displayImage&&'animate-pulse'} `} >
            <Image onLoad={()=>setDisplayImage(true)} width={0} height={0} sizes="100%" style={{ width: '100%', height: '288px' }} loading='lazy' placeholder='blur' blurDataURL={imgsrc} className={`${displayImage?'opacity-100':'opacity-0'} lg:!h-60  relative z-[2] object-contain object-center w-full transition-[0.3s] hover:scale-[1.1] ease-out shadowpng  ${Homeproducts==true?'smcart:!h-56':'smcart:!h-80'}`}src={imgsrc} alt="" />
            </Link>
            <div className=' relative flex flex-col justify-between flex-1 pt-4  mb-5'>
         
                
                
                <div>
                    <p className='font-extralight text-lg text-[#A37A74] pb-2 font-sans'>{product_second_category}</p>
                    <Link href={`/products/${product_id}`} className='no-underline text-black' >
                        <h4 className='font-serif font-medium text-lg pb-2'> {truncate(product_name,39)}</h4>
                    </Link>
                </div>
                <div>
                    <div className="flex justify-between ">
                        <div className='flex gap-x-2'>
                        <p className={`${product_sale!=-1?'line-through':''} li font-serif ${Homeproducts&&"lg:text-sm"} text-xl  font-thin pt-[3px]`}> €{product_price}</p>
                       {product_sale!=-1&&<p className={` text-[#A37A74] font-serif ${Homeproducts&&"lg:text-sm"} text-xl font-thin pt-[3px]`}> €{product_sale}</p>} 

                        </div>
                    
                   <RatingStars Homeproducts={Homeproducts}  userInitialRating={userInitialRating} userId={session?.user?.userId} initialRating={rating} key={product_id}  productId={product_id}/>

                    </div>
                  
                    <ContainerProductButtonAndColors favoritedBy={favoritedBy} searchParams={searchParams}  product_id={product_id} product_colors={product_colors}/>
                </div>


            </div>

        </div>
    )
}

export default Product