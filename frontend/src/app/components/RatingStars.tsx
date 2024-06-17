"use client";
import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import loader from "@/public/loader_stars.svg";
import Image from "next/image";
import { UseLogInAlertStore } from "../Store/Store";
import { useRateProduct } from "../functions/api/mutations";
import { rating } from "../typing/interfaces";

///control after call
const RatingStars = ({
  productId,
  initialRating,
  userInitialRating,
  userId,
  Homeproducts
}: {
  productId: string;
  initialRating: number;
  userInitialRating?:number;
  userId?:number;
  Homeproducts?:boolean
}) => {
  const { SetShowLogInAlert } = UseLogInAlertStore();

  const [hoveredStars, setHoveredStars] = useState(-1);
 

  const handleHoveredStar = (i: number) => setHoveredStars(i);
  const handleMouseOut = () => {
    setHoveredStars(-1);
  };
  const {mutateAsync:rateProduct}=useRateProduct()

  const setRating = async (rating: number) => {
    
    if(userId){
      await rateProduct({userId,productId,userNewRating:rating,initialRating,userInitialRating});
      
        
    }
    else{
        SetShowLogInAlert(true);
    
    }
    


   


  };

  const StarsClass = (i: number) => {
    if (hoveredStars != -1) {
      return `${i <= hoveredStars ? "!text-[#A37A74]" : "!text-[#4f4f5e]"} `;
    } else {
      return `${i <= initialRating ? "!text-[#A37A74]" : "!text-[#4f4f5e]"} `;
    }
  };
  /*
 
    */

  return (
    <div className=" flex items-center space-x-1 pt-[3px]">
      {!initialRating ? (
        <Image
          className="absolute right-0"
          height={80}
          width={120}
          src={loader.src}
          alt={loader.src}
        />
      ) : (
        <>
          <svg
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHoveredStar(1)}
            onClick={() => setRating(1)}
            className={`duration-150 transition-colors cursor-pointer ${Homeproducts&&"lg:w-4 lg:h-4"} w-5 h-5 ${StarsClass(
              1
            )} `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHoveredStar(2)}
            onClick={() => setRating(2)}
            className={`duration-150 transition-colors cursor-pointer ${Homeproducts&&"lg:w-4 lg:h-4"} w-5 h-5 ${StarsClass(
              2
            )} `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHoveredStar(3)}
            onClick={() => setRating(3)}
            className={`duration-150 transition-colors cursor-pointer ${Homeproducts&&"lg:w-4 lg:h-4"} w-5 h-5 ${StarsClass(
              3
            )} `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHoveredStar(4)}
            onClick={() => setRating(4)}
            className={`duration-150 transition-colors cursor-pointer ${Homeproducts&&"lg:w-4 lg:h-4"} w-5 h-5 ${StarsClass(
              4
            )} `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleHoveredStar(5)}
            onClick={() => setRating(5)}
            className={`duration-150 transition-colors cursor-pointer ${Homeproducts&&"lg:w-4 lg:h-4"} w-5 h-5 ${StarsClass(
              5
            )}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </>
      )}
    </div>
  );
};

export default RatingStars;
