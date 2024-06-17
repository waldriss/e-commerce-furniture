
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { signIn } from 'next-auth/react'
import { useQueryClient } from 'react-query';

const SigninMenu = ({setsignup,message,setmessage}:{setmessage:(value:string)=>void,message:string,setsignup:(value:boolean)=>void}) => {
   const queryClient=useQueryClient()
    const router=useRouter();
    const { register,clearErrors, handleSubmit, watch,setError, formState: { errors } } = useForm();
    const [errormessage,seterrormessage]=useState("");

    const onSubmit=async(data:{email?:string,password?:string})=>
    {
      
      seterrormessage("");
      setmessage("");


     
      if(Object.keys(errors).length===0){

        
      
                    try{
                      const result = await signIn('credentials', {
                        redirect: false,
                        email:data.email,
                        password:data.password,
                      });
                    
                      if(result?.error){
                        
                        seterrormessage(result.error);
                        
                       
                      
                      }
                      else{

                        router.push('/');
                      
                      }
                    }     
                    catch(err){
                        console.log(err);
                    }  
                  }
                  
      }



   
    const signinwithgoogle = async(e:any) => {
      e.preventDefault();
      await signIn('google', { callbackUrl: '/auth', redirect: false });

    }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-center pr-8 md:pr-0 "action="" autoComplete='off'>
        
                        <h1 className='text-[#33333d] mb-[25px] font-bold font-sans text-[2.2em]'> Log In</h1>
                        {message &&<h2 className='font-serif text-lg -mt-3 mb-5 text-[#A37A74] '> {message}</h2>}

                        <button  className='mt-[10px] py-4 px-5  text-white rounded-[5px]  cursor-pointer border-none w-full relative flex bg-[#A37A74] ' type='button'  onClick={(e)=>{signinwithgoogle(e)}} > <FcGoogle className='box-content border-r-[#aa847e] border-r-[1px] border-solid absolute left-0 bg-[#A37A74] rounded-tl-[5px] rounded-bl-[5px] top-0 h-full py-0 px-[10px] text-[25px]' /> 
                          <span className=' text-[#f2e8d9]  ml-[35px] font-thin font-sans tracking-wider text-xl'>Sign in with google</span>
                        </button>

                        <span className='text-[#33333d] flex flex-row w-full mt-5 mx-0 mb-[30px] after:content-[""] after:flex-1 after:border-b-2 after:border-solid after:border-b-[#1E1E24] after:m-auto after:ml-[10px] before:content-[""] before:flex-1 before:border-b-2 before:border-solid before:border-b-[#1E1E24] before:m-auto before:mr-[10px]'> Or</span>
                        <div className="input-data h-[50px] w-full relative mb-[40px]">
                            <input {...register("email",{required:"email required",pattern: /^\S+@\S+\.\S+$/i})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="text" id="email" name="email" required />
                            <div className="underline absolute h-[2px] w-full bottom-0 "></div>
                            <MdOutlineEmail className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>

                            <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>Email</label>
                           
                        </div>
                        {errors?.email?.type=="required" && <span className='inline-block -mt-8 mb-9 text-[#A37A74] font-serif'> {errors.email.message?.toString()}</span>} 
                        {errors?.email?.type=="pattern" && <span className='inline-block -mt-8 mb-9 text-[#A37A74] font-serif'> please enter a valid email </span>} 

                        <div className="input-data h-[50px] w-full relative mb-[40px]">
                            <input {...register("password",{required:"password required",minLength:5})} className='bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]' type="password" id="password" required />
                            <div className="underline absolute h-[2px] w-full bottom-0 "></div>
                            <RiLockPasswordFill className='absolute bottom-[10px] right-3 text-[30px] text-[#33333d] '/>
                            <label className='absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]'>Password</label>
                            {errors?.password?.type=="required" && <span className=' inline-block -mt-8 mb-9 text-[#A37A74] font-serif'> {errors.password.message?.toString()} </span>} 
                            {errors?.password?.type=="minLength" && <span className=' inline-block -mt-8 mb-9 text-[#A37A74] font-serif'> password must have to at least 5 characters </span>} 
                        </div>

                        {errormessage && <span className=' inline-block -mt-2 mb-1 text-[#A37A74] font-serif'> {errormessage}</span>} 



                        <button className='mt-[10px] py-4 px-5 text-xl text-white rounded-[5px] bg-[#33333d] font-thin font-sans tracking-wider  cursor-pointer border-none w-full relative' type='submit' onClick={()=>{}} > Sign In </button>
                        <div className='mt-5 w-full'>
                            <h4 className='text-left'>
                                <span className='font-serif text-[#33333d] font-normal'> No account? </span>

                                <span className='font-serif text-[#A37A74] font-bold hover:cursor-pointer hover:no-underline' onClick={() => setsignup(true)}>Sign Up now. </span>
                            </h4>
                        </div>
    </form>
  )
} 

export default SigninMenu