import React from 'react'

const Stepper = ({searchParams}:{searchParams:{step:string,payment:string}}) => {
  return (
    <ol className="flex items-center w-1/2 md:w-3/4 mx-auto">
    <li className={`flex w-full items-center text-[#33333d] after:border-[#595969] after:content-[''] after:w-full after:h-1 after:border-b  after:border-[7px] after:inline-block `}>
        <span className={`flex shadow_cart  items-center justify-center w-16 h-16 bg-[#595969]  rounded-full lg:h-12 lg:w-12  shrink-0`}>
            <svg className={`w-7 h-7 text-[#f2e8d9] g:w-4 lg:h-4 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </span>
    </li>
    <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b ${searchParams.step=="payment"?"text-[#33333d] after:border-[#595969]":"after:border-[#f7f1e8]"}  after:border-[7px] after:inline-block`}>
        <span className={`flex shadow_cart  items-center justify-center w-16 h-16 ${searchParams.step=="payment"?"bg-[#595969]":"bg-[#f7f1e8]"}  rounded-full lg:h-12 lg:w-12  shrink-0`}>
            <svg className={`w-7 h-7 ${searchParams?.step=="payment"?"text-[#f2e8d9]":"text-[#33333d]"} lg:w-5 lg:h-5 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
            </svg>
        </span>
    </li>
    <li className="flex items-center ">
        <span className={`flex shadow_cart  items-center justify-center w-16 h-16 ${searchParams?.step=="review"?"bg-[#595969]":"bg-[#f7f1e8]"}  rounded-full lg:h-12 lg:w-12  shrink-0`}>
            <svg className={`w-7 h-7 ${searchParams?.step=="review"?"text-[#f2e8d9]":"text-[#33333d]"} lg:w-5 lg:h-5 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
        </span>
    </li>
</ol>
  )
}

export default Stepper