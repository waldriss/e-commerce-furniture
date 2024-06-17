"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import CountrySelector from './selector';
import { COUNTRIES } from '../../functions/countries';

import { useRouter } from 'next/navigation';
import { IoPersonSharp } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";

import { MdLocalShipping } from "react-icons/md";
import { GiPostOffice } from "react-icons/gi";
import { TbBuildingEstate } from "react-icons/tb";
import { FaCity } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { SelectMenuOption } from '../../typing/types';

const CheckoutShippingDetails = () => {
  const router =useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isOpen, setIsOpen] = useState(false);
 
  const [country, setCountry] = useState('AF');
  const Onsubmit=()=>{
  
    if(Object.keys(errors).length===0){
       router.push('/checkout?step=payment&&payment=card')

    }

   
  }
  return (
    <form onSubmit={handleSubmit(Onsubmit)} className='pt-3 pl-6 w-2/3  pr-20 xl:pr-8 xl:pl-4 lg:w-[95%] lg:pl-6 md:pl-2 md:pr-0 smcart:px-2 smcart:w-full'>
      <h1 className='text-[2.2em] smcart:text-[1.65rem]  font-semibold font-sans text-[#33333d] mb-4 '> Shipping Informations </h1>
      <hr className='mt-3   border-solid border-4 lg:border-[3px] border-[#33333d] w-60 lg:w-[180px] smcart:w-[150px]  mb-12 lg:mb-6' />

      <CountrySelector
      id={'countries'}
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onChange={val => setCountry(val)}
      // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
      selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption} 
    />
    <div className="input-data h-[50px] w-full relative mb-[40px]">
      <input {...register("firstName",{required:"first name required"})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="firstName" name="firstName" required />
      <div className="underline absolute h-[2px] w-full bottom-0 "></div>
      <IoPersonSharp className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
      <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>First Name</label>
    </div>
    {errors.firstName && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.firstName.message?.toString()} *</span>}

    <div className="input-data h-[50px] w-full relative mb-[40px]">
      <input {...register("lastName",{required:"last name required"})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="lastName" name="lastName" required />
      <div className="underline absolute h-[2px] w-full bottom-0 "></div>
      <IoPersonAddSharp className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
      <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>Last Name</label>
    </div>
    {errors.lastName && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.lastName.message?.toString()} *</span>}   

    <div className="input-data h-[50px] w-full relative mb-[40px]">
      <input {...register("address1",{required:"address  required"})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="address1" name="address1" required />
      <div className="underline absolute h-[2px] w-full bottom-0 "></div>
      <MdLocalShipping className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
      <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>Address</label>
    </div>
    {errors.address1 && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.address1.message?.toString()} *</span>} 

   
    <div className="input-data h-[50px] w-[40%] relative mb-[40px]">
      <input {...register("zip",{required:"zip  required"})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="zip" name="zip" required />
      <div className="underline absolute h-[2px] w-full bottom-0 "></div>
      <GiPostOffice className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
      <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>Zip</label>

    </div>
    {errors.zip && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.zip.message?.toString()} *</span>} 

    <div className='flex justify-between'>
    <div className="input-data h-[50px] w-[65%] relative mb-[40px]">
      <input {...register("city",{required:"City  required"})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="city" name="city" required />
      <div className="underline absolute h-[2px] w-full bottom-0 "></div>
      <FaCity className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
      <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>City</label>

    </div>


    <div className="input-data  h-[50px] w-[30%] relative mb-[40px]">
      <input {...register("state",{required:"state  required"})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="state" name="state" required />
      <div className="underline absolute h-[2px] w-full bottom-0 "></div>
      <TbBuildingEstate className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
      <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>State</label>

    </div>

    </div>
    {errors.city && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.city.message?.toString()} *</span>} 
    {errors.state && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.state.message?.toString()} *</span>} 


    <div className="input-data  h-[50px] w-[65%] relative mb-[40px]">
      <input {...register("phone",{required:"phone  required",pattern: /^[0-9]*$/})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="phone" name="phone" required />
      <div className="underline absolute h-[2px] w-full bottom-0 "></div>
      <FaPhone className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
      <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>Phone</label>

    </div>
    {errors?.phone?.type=="required" && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.phone.message?.toString()} *</span>} 
    {errors?.phone?.type=="pattern" && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> only numbers are accepted *</span>} 

    <div className="input-data  h-[50px] w-[100%] relative mb-[40px]">
      <input {...register("email",{required:"email  required",pattern: /^\S+@\S+\.\S+$/i})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="email" id="email" name="email" required />
      <div className="underline absolute h-[2px] w-full bottom-0 "></div>
      <MdOutlineEmail className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
      <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>Email</label>
     
    </div>
    {errors?.email?.type=="required" && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.email.message?.toString()} *</span>} 
    {errors?.email?.type=="pattern" && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> please enter a valid email *</span>} 
    
    <div className='text-center'>
    <button  type='submit'  className='mt-0  text-xl font-thin font-sans tracking-wider bg-[#A37A74] text-white no-underline px-5 py-3 smcart:px-4  rounded-[3px] border-[#A37A74] border-solid border-[1px] '> Go to payement section </button>
    </div>
    


    
      
      

    </form>
  )
}

export default CheckoutShippingDetails