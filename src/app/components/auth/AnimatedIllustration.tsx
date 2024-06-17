"use client"
import Lottie from "lottie-react";
import illustration from "@/public/animatedlogin.json"
import React from 'react'
import { useSession } from "next-auth/react";

const AnimatedIllustration = () => {
  const {data:session}=useSession();
  return (
    !session?.user&&<Lottie animationData={illustration} loop={true} className="w-[580px] xl:w-[450px] lg:w-[420px] md:hidden" />
  )
}

export default AnimatedIllustration