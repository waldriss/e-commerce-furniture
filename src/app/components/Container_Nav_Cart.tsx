"use client"

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Cart from './Cart';
import {  UseLogInAlertStore, UseShowCartStore, UseSmallDeviceStore } from '../Store/Store';
import { useMediaQuery } from '../functions/mediaqueryhook';
import Responsivenav from './Responsivenav';
import { useSession } from 'next-auth/react';
import { cartProductInterface, TCart } from '../typing/interfaces';

const Container_Nav_Cart =({initialCart}:{initialCart?:TCart}) => {
  

 
  const {SetShowLogInAlert} = UseLogInAlertStore();

    const {showcart, setshowcart} = UseShowCartStore();
    const [side_nav, setside_nav] = useState<boolean>(false);
    const {setisSmallDevice}=UseSmallDeviceStore();
    const matches=useMediaQuery('(max-width: 1060px)');
    const [showannounce, setshowannounce] = useState<boolean | string>("init");
    const {data:session}=useSession();

   
  const testwidth = () => {
    if (matches) {
      setisSmallDevice(true);
    } else {
      setside_nav(false);
      setisSmallDevice(false);
    }
  };
  useEffect(() => {
    testwidth();
  }, [matches]);
  
  

    return (
        <>
            <Navbar   SetShowLogInAlert={SetShowLogInAlert} showannounce={showannounce} setshowannounce={setshowannounce} authenticatedUser={session?.user} side_nav={side_nav} setside_nav={setside_nav} setshowcart={setshowcart} />
            <Responsivenav showannounce={showannounce} side_nav={side_nav} setside_nav={setside_nav}  />
            {session?.user?.userId&&<Cart showcart={showcart} initialCart={initialCart} setshowcart={setshowcart}/>}
            <div className={`fixed top-0 backdrop-blur-md bg-[rgb(0,0,0,0.3)] w-screen h-screen z-[8] opacity-0 transition-opacity duration-[0.25s] pointer-events-none ${side_nav ? 'pointer-events-auto opacity-100' : ''}`} onClick={() => setside_nav(false)} >  </div>
            <div className={`fixed top-0 backdrop-blur-md bg-[rgb(0,0,0,0.3)] w-screen h-screen z-[12] opacity-0 transition-opacity duration-[0.25s] pointer-events-none ${showcart ? 'pointer-events-auto opacity-100' : ''}`} onClick={() => setshowcart(false)} >  </div>
        </>
    )
}

export default Container_Nav_Cart