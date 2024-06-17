"use client";
import React, { useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { Slide } from "react-slideshow-image";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosClose,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import LoadingSvg from "../../LoadingSvg";
const ProductImagesSlideshow = ({
  setfullscreenimage,
  product_images,
}: {
  setfullscreenimage?: any;
  product_images: string[];
}) => {
  const images = product_images;
  const imagesurls = images.map((image) => "https://get.ru/" + image);
 const [fullScreenSrc,setfullScreenSrc]=useState("");
  const properties = {
    prevArrow: (
      <button className="hover:bg-[rgba(0,0,0,0.2)] flex cursor-pointer p-[10px] !z-[6] text-black bg-white font-bold text-[18px] duration-[0.3s] rounded-full border-none select-none ">
        <IoIosArrowBack />
      </button>
    ),
    nextArrow: (
      <button className="hover:bg-[rgba(0,0,0,0.2)] flex cursor-pointer p-[10px] !z-[6] text-black bg-white font-bold text-[18px] duration-[0.3s] rounded-full border-none select-none ">
        {" "}
        <IoIosArrowForward />
      </button>
    ),
  };
  const indicators = (index: any) => (
    <div
      className="indicator"
      style={{ backgroundImage: `url(${imagesurls[index]})` }}
    >
      {" "}
    </div>
  );
  const [loading,setloading]=useState(true);
  return (
    <>
      <div  onClick={()=>{setfullScreenSrc(""); setloading(true);}} className={`${fullScreenSrc===""?'opacity-0 pointer-events-none':'opacity-100 pointer-events-auto'} transition-opacity duration-200 bg-[rgba(14,14,17,0.9)] fixed w-screen flex items-center justify-center h-screen z-20 top-0 left-0`}>
       {fullScreenSrc!==""&&<Image onLoad={()=>setloading(false)} className={`${loading?'opacity-0':'opacity-100'} transition-opacity duration-200 max-w-screen max-h-screen absolute`} height={800} width={800} alt="" src={fullScreenSrc} />}
        <button className={`absolute ${loading?'opacity-0':'opacity-100'} cursor-pointer opacity-0 transition-opacity  text-5xl text-white right-20 top-10 bg-[#4f4f5e] rounded-full px-2 `}>
          <IoIosClose  onClick={()=>{setfullScreenSrc(""); setloading(true);}} />
        </button>
        
          <LoadingSvg className={`${!loading?'opacity-0':'opacity-100'} h-28 w-28`}/>  
        
      </div>
      <div className="relative w-[720px] xxl:w-[610px] ml-[20px] mb-36 xl:w-[95%] xl:mx-auto">
        <Slide
          transitionDuration={350}
          indicators={indicators}
          arrows={true}
          {...properties}
        >
          {imagesurls.map((image, index) => {
            return (
              <div className="eachslide " key={index}>
                <div
                onClick={()=>setfullScreenSrc(image)}
                  className="cursor-pointer rounded-2xl relative flex items-center justify-center bg-contain bg-no-repeat bg-center h-[560px] md:h-[450px] smcart:h-[360px]"
                  style={{ backgroundImage: `url(${image})` }}
                >
                 
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </>
  );
};

export default ProductImagesSlideshow;
