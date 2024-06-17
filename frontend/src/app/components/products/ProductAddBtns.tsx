"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { UseLogInAlertStore, UseShowCartStore } from "../../Store/Store";

import Animatedbtn from "../Animatedbtn";
import {  useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import AnimatedHeart from "../AnimatedHeart";
import { TFilterattributes } from "../../typing/global";
import { convertToUrlSearchParams } from "../../functions/utils";
import {
  useAddProductToCart,
  useAddProductToFavorite,
  useRemoveProductFromFavorite,
} from "../../functions/api/mutations";

const ProductAddBtns = ({
  searchParams,
  selectedcolor,
  productId,
  setshowcolors,
  product_colors,
  favoritedBy,
}: {
  searchParams: TFilterattributes;
  selectedcolor: string;
  productId: string;
  setshowcolors: (value: boolean) => void;
  product_colors: [] | string[];
  favoritedBy: string[];
}) => {
  const router = useRouter();
  const { SetShowLogInAlert } = UseLogInAlertStore();

  const { setshowcart } = UseShowCartStore();

  const { data: session } = useSession();

  const productInFavorite = session?.user?.userId
    ? favoritedBy.includes(session.user.userId.toString())
    : false;

  const { mutateAsync: addProductToFavorite,isLoading:isAdding} = useAddProductToFavorite();
  const { mutateAsync: removeProductFromFavorite,isLoading:isRemoving } =
    useRemoveProductFromFavorite();


  const {mutateAsync:addProductToCart}=useAddProductToCart()

  const addtoCart = async () => {
    if(session?.user?.userId){

    
    if (Array.isArray(product_colors) && product_colors?.length != 0) {
      if (selectedcolor == "") {
        setshowcolors(true);
      } else {
        await addProductToCart({userId:session.user.userId,color:selectedcolor,productId})
        setshowcart(true);
      }
    } else {
      await addProductToCart({userId:session.user.userId,color:selectedcolor,productId})

      setshowcart(true);
    }
  }
  };

  const handleAddToFavorite = async (e: any) => {

    if (session?.user?.userId&&!isAdding&&!isRemoving) {
      e.target.style.pointerEvents = "none";
      await addProductToFavorite({ userId: session.user.userId, productId });

      e.target.style.pointerEvents = "auto";
    }
  };

  const handleRemoveFromFavorite = async (e: any) => {
    if (session?.user?.userId&&!isAdding&&!isRemoving) {
      e.target.style.pointerEvents = "none";
      await removeProductFromFavorite({ userId: session.user.userId, productId });

      e.target.style.pointerEvents = "auto";
    }
  };

  return (
    <div className="flex items-center justify-between gap-y-0 gap-x-[10px] mt-[10px] ">
      {/*<button onClick={()=>addtoCart()} className='mt-0 bg-black text-white no-underline px-5 py-3 font-medium border-black border-solid border-[1px]'> ADD TO CART
                       
  </button>*/}

      <Animatedbtn
        addtoCart={
          session?.user
            ? addtoCart
            : () => {
                SetShowLogInAlert(true);
              }
        }
      />
      {
        //dataIsInFavorite?.productInFavorite?<IoHeart onClick={session?.user?removeFromFavorite:()=>{}}  className='text-[25px] cursor-pointer'/>:<IoHeartOutline onClick={session?.user?addToFavorite:()=>{}} className='text-[32px] text-[#4f4f5e] cursor-pointer' />
      }
      <AnimatedHeart
        productId={productId}
        productInFavorite={productInFavorite}
        session={session}
        removeFromFavorite={handleRemoveFromFavorite}
        addToFavorite={handleAddToFavorite}
      />
    </div>
  );
};

export default ProductAddBtns;
