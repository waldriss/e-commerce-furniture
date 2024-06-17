"use client";
import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";

import { IoPersonOutline,IoLogOutOutline, IoHeartOutline } from "react-icons/io5";

import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import Hamburger from "hamburger-react";
import { useRouter } from "next/navigation";
import NavLinks from "./NavLinks";
import Announce from "./Announce";
import {navanimation} from "@/src/app/functions/navanimation"
import { signOut, useSession } from "next-auth/react";
import { logout } from "../functions/authApi";

const Navbar = ({
  showannounce,
  setshowannounce,
  side_nav,
  setside_nav,
  setshowcart,
  authenticatedUser,
  SetShowLogInAlert
}: {
  showannounce:boolean|string,
  setshowannounce:(value:boolean|string)=>void,
  side_nav: boolean,
  setside_nav: (value:boolean)=>void,
  setshowcart: (value:boolean)=>void,
  authenticatedUser:any,
  SetShowLogInAlert:(value:boolean)=>void,
}) => {
  const router=useRouter();
  const {data:session}=useSession();

  const handleSignOut=async()=>{
    // await signout
    if(session?.access_token){
      logout(session.access_token);
      
    }
    await signOut({ callbackUrl: '/', redirect:true });
    


  }
  
  




  const handleshow = () => {
    if (window.scrollY > 100) {
      setshowannounce(false);
    } else {
      setshowannounce(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleshow);

    return () => window.removeEventListener("scroll", handleshow);
  }, []);

  

  const toggle_side_nav = () => {
    //console.log(session);
    
    setside_nav(!side_nav);
  };

  
  const gohome=()=>{
    router.push('/');
  }

  return (
    <>
      <motion.header
        className="fixed z-10 w-full"
        animate={`${
          showannounce === "init" ? "to" : !showannounce ? "totop" : "tobottom"
        }`}
        initial="from"
        variants={navanimation}
      >
       <Announce/>
        <h2 onClick={()=>gohome()} className="  text-[1.6em] top-[18px] h-full min-h-[80px] cursor-pointer inline-flex flex-col justify-center items-start absolute z-[11] left-[20px] xl:left-[74px]">
          <span className="font-sans font-normal text-[#33333d]">Furni<span className="text-[#A37A74]">World</span></span>
        
        </h2>

        <motion.nav className="shadownav relative flex h-[80px] top-0 z-10 w-full justify-between items-center bg-[#f2e8d9] mt-0">
          <NavLinks/>

          <div
            className="hidden absolute mt-[2px] left-[2px] xl:block"
            onClick={() => toggle_side_nav()}
          >
            <Hamburger
              toggled={side_nav}
              color="black"
              size={26}
              duration={0.5}
            />
          </div>
          {authenticatedUser?
          <Link className={`absolute text-[30px] right-[50px] mt-[3px] cursor-pointer `} href={`/products?favorite=${Date.now().toString()+Math.random().toString(5).replace('.', 'x')}&userId=${authenticatedUser?.userId}`}>
          <IoHeartOutline />
          </Link>
          :
          <span onClick={()=>SetShowLogInAlert(true)} className={`absolute text-[30px] right-[50px] mt-[3px] cursor-pointer '}`} >
          <IoHeartOutline />
          </span>
          }

          {authenticatedUser
            ?
            <IoLogOutOutline onClick={()=>handleSignOut()} className={`absolute mt-[3px] text-[30px] cursor-pointer right-[88px] flex items-center justify-center no-underline text-black`} />
            :
            <Link
            href="/auth"
            className={`absolute text-[27px] cursor-pointer right-[88px] flex items-center justify-center no-underline text-black`}>
              <IoPersonOutline />
            </Link>
          } 

          <BsHandbag
            className="absolute text-[27px] cursor-pointer right-[15px]"
            onClick={authenticatedUser?() => setshowcart(true):()=>{SetShowLogInAlert(true);}}
          />
        </motion.nav>
      </motion.header>
    </>
  );
};

export default Navbar;
