"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaCcVisa } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";

const CardPayment = () => {
    const { register, handleSubmit, watch,setValue, formState: { errors } } = useForm();

 

    const formatCard = (value:any) => {
        
      };


    const handleInputChange = (e:any) => {
      const originalValue = e.target.value;
      const numericValue = originalValue.replace(/\D/g, '');
      const formattedValue = numericValue.replace(/(\d{4})/g, '$1-').slice(0, 19);
    
      if (originalValue.slice(-1) === '-' && originalValue.length > 4) {
        setValue('card', formattedValue.slice(0, -1));
      } else {
        // Set the formatted value in the form
        setValue('card', formattedValue);
      }
       
      };
      const onSubmit=()=>{

      }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col W-full items-center pt-7 '>
        <div className="input-data h-[50px] w-[80%] relative mb-[40px]">
                    <input maxLength={19} 
                    {...register("card", {
                        required: " card number is required",
                        pattern: {
                        value: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
                        message: 'Invalid credit card number format',
                        },})}
                    onChange={handleInputChange}
                    value={watch('card', '')}
                    className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="card" name="card" required />
                    <div className="underline absolute h-[2px] w-full bottom-0 "></div>
                    <FaCcVisa className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
                    <label className='absolute bottom-[12px] text-lg left-[10px] font-serif text-[#1E1E24] pointer-events-none duration-[0.3s]'>Card Number</label>
        </div>

        <div className="input-data h-[50px] w-[80%] relative mb-[40px]">
          <input {...register("cardholdername",{required:"Card Holder Name required"})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="cardholdername" name="cardholdername" required />
          <div className="underline absolute h-[2px] w-full bottom-0 "></div>
          <IoPersonSharp className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
          <label className='absolute bottom-[12px] text-lg left-[10px] font-serif text-[#1E1E24] pointer-events-none duration-[0.3s]'>Card Holder Name</label>
        
        </div>
        {errors.cardholdername && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.cardholdername.message?.toString()} *</span>}

        <div className='flex gap-6 smcart:flex-col smcart:gap-0 smcart:items-center smcart:w-full'>
        <div className="input-data h-[50px] w-[80%] relative mb-[40px]">
          <input {...register("expirydate",{required:"Expiry date Name required"})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="date" id="expirydate" name="expirydate" placeholder={""} required />
          <div className="underline absolute h-[2px] w-full bottom-0 "></div>
          <label className='absolute bottom-[12px] text-lg left-[10px] font-serif text-[#1E1E24] pointer-events-none duration-[0.3s]'>Expiry Date</label>
        </div>

        <div className="input-data h-[50px] w-[80%] relative mb-[40px]">
          <input {...register("cvvcode",{required:"Cvv Code required",maxLength:3,minLength:3})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="cvvcode" name="cvvcode" required />
          <div className="underline absolute h-[2px] w-full bottom-0 "></div>
          <label className='absolute bottom-[12px] text-lg left-[10px] font-serif text-[#1E1E24] pointer-events-none duration-[0.3s] '>Cvv Code</label>
          <FaCircleInfo className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
        </div>
       

        </div>
        {errors?.cvvcode?.type=="required" && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> {errors.cvvcode.message?.toString()} *</span>} 
        {(errors?.cvvcode?.type=="maxLength"||errors?.cvvcode?.type=="minLength") && <span className=' inline-block relative -translate-y-8 mb-2  text-[#A37A74] font-serif'> cvv must be 3 numbers *</span>} 
        
        <button  type='submit'  className='mt-0  text-xl font-thin font-sans tracking-wider bg-[#A37A74] text-white no-underline px-5 py-3 smcart:px-4  rounded-[3px] border-[#A37A74] border-solid border-[1px] '> Go to payement section </button>

       
    </form>        
  )
}

export default CardPayment