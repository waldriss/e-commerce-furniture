"use client"
import React from 'react'
import { UseLogInAlertStore } from '../Store/Store';
import Link from 'next/link';


const AlertToLogIn = () => {
    const {ShowLogInAlert,SetShowLogInAlert} = UseLogInAlertStore();


  return (
    <div className={`w-full fixed bottom-0 z-[7] duration-[0.3s] transition-all  ${ShowLogInAlert?'translate-y-0 opacity-100 ':'translate-y-full opacity-0 pointer-events-none'}`}>
    <div id="alert-border-1" className=" mx-auto w-[60%] flex items-center p-5 mb-6 text-[white] border-t-4 border-[#A37A74] bg-[#585869] rounded-md " role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
      you cant do this operation with out being signed in, <Link href="/auth" className="font-semibold no-underline text-[#A37A74] ">sign in here. </Link>
    </div>
    <button type="button" onClick={()=>SetShowLogInAlert(false)} className="ms-auto -mx-1.5 -my-1.5 bg-[#585869] text-white rounded-lg focus:ring-2 focus:ring-[#464653] p-1.5 hover:bg-[#626274] inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
      <span className="sr-only">Dismiss</span>
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor"  strokeLinecap="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
</div>
</div>

  )
}

export default AlertToLogIn