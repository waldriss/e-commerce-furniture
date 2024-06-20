import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { backendUrl } from "../../functions/general_data";
const SignupMenu = ({
  setsignup,
  setmessage,
}: {
  setmessage: (value: string) => void;
  setsignup: (value: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    watch,
    formState: { errors },
  } = useForm();
  const [errormessage, seterrormessage] = useState("");
  const onSubmit = async (data: any) => {
   
    setmessage("");
    seterrormessage("");

    if (Object.keys(errors).length === 0) {
      if (data.password !== data.passwordConfirmation) {
        seterrormessage("password doesn't match password confirmation");
      } else {
        try {
          const res = await fetch(`${backendUrl}signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (res.ok) {
            const responseData = await res.json();
            setmessage(responseData.message);
            setsignup(false);
          } else {
            const responseData = await res.json();

            seterrormessage(responseData.message);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center pr-8 md:pr-0"
      action=""
      autoComplete="off"
    >
      <h1 className="text-[#33333d] mb-[25px] font-bold font-sans text-[2.2em]">
        {" "}
        Register
      </h1>
      <div className="input-data h-[50px] w-full relative mb-[40px]">
        <input
          {...register("firstName", { required: "first name required" })}
          className="bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]"
          type="text"
          id="firstName"
          name="firstName"
          required
        />
        <div className="underline absolute h-[2px] w-full bottom-0 "></div>
        <IoPersonSharp className="absolute bottom-[10px] right-3 text-[30px] text-[#33333d] " />
        <label className="absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]">
          First Name
        </label>
      </div>
      {errors?.firstName?.type == "required" && (
        <span className=" w-full inline-block -mt-8 mb-9 text-[#A37A74] font-serif">
          {" "}
          {errors.firstName.message?.toString()}{" "}
        </span>
      )}

      <div className="input-data h-[50px] w-full relative mb-[40px]">
        <input
          {...register("lastName", { required: "lastName name required" })}
          className="bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]"
          type="text"
          id="lastName"
          name="lastName"
          required
        />
        <div className="underline absolute h-[2px] w-full bottom-0 "></div>
        <IoPersonAddSharp className="absolute bottom-[10px] right-3 text-[30px] text-[#33333d] " />
        <label className="absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]">
          Last Name
        </label>
      </div>
      {errors?.lastName?.type == "required" && (
        <span className=" w-full inline-block -mt-8 mb-9 text-[#A37A74] font-serif">
          {" "}
          {errors.lastName.message?.toString()}{" "}
        </span>
      )}

      <div className="input-data h-[50px] w-full relative mb-[40px]">
        <input
          {...register("email", {
            required: "email required",
            pattern: /^\S+@\S+\.\S+$/i,
          })}
          className="bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]"
          type="text"
          id="email"
          name="email"
          required
        />
        <div className="underline absolute h-[2px] w-full bottom-0 "></div>
        <MdOutlineEmail className="absolute bottom-[10px] right-3 text-[30px] text-[#33333d] " />
        <label className="absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]">
          Email
        </label>
      </div>
      {errors?.email?.type == "required" && (
        <span className=" w-full inline-block -mt-8 mb-9 text-[#A37A74] font-serif">
          {" "}
          {errors.email.message?.toString()}{" "}
        </span>
      )}
      {errors?.email?.type == "pattern" && (
        <span className=" w-full inline-block -mt-8 mb-9 text-[#A37A74] font-serif">
          {" "}
          please enter a valid email{" "}
        </span>
      )}

      <div className="input-data h-[50px] w-full relative mb-[40px]">
        <input
          {...register("phone", {
            required: "phone number required",
            pattern: /^[0-9]*$/,
          })}
          className="bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]"
          type="text"
          id="phone"
          name="phone"
          required
        />
        <div className="underline absolute h-[2px] w-full bottom-0 "></div>
        <FaPhone className="absolute bottom-[10px] right-3 text-[30px] text-[#33333d] " />
        <label className="absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]">
          Phone number
        </label>
      </div>
      {errors?.phone?.type == "required" && (
        <span className=" w-full inline-block -mt-8 mb-9 text-[#A37A74] font-serif">
          {" "}
          {errors.phone.message?.toString()}{" "}
        </span>
      )}
      {errors?.phone?.type == "pattern" && (
        <span className=" w-full inline-block -mt-8 mb-9 text-[#A37A74] font-serif">
          {" "}
          only numbers are accepted{" "}
        </span>
      )}

      <div className="input-data h-[50px] w-full relative mb-[40px]">
        <input
          {...register("password", {
            required: "password required",
            minLength: 5,
          })}
          className="bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]"
          type="password"
          id="password"
          required
        />
        <div className="underline absolute h-[2px] w-full bottom-0 "></div>
        <RiLockPasswordFill className="absolute bottom-[10px] right-3 text-[30px] text-[#33333d] " />
        <label className="absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]">
          Password
        </label>
      </div>
      {errors?.password?.type == "required" && (
        <span className=" w-full inline-block -mt-8 mb-9 text-[#A37A74] font-serif">
          {" "}
          {errors.password.message?.toString()}{" "}
        </span>
      )}
      {errors?.password?.type == "minLength" && (
        <span className=" w-full inline-block -mt-8 mb-9 text-[#A37A74] font-serif">
          {" "}
          password must have to at least 5 characters{" "}
        </span>
      )}

      <div className="input-data h-[50px] w-full relative mb-[40px]">
        <input
          {...register("passwordConfirmation", {
            required: "password confirmation required",
            minLength: 5,
          })}
          className="bg-transparent outline-none  text-black h-full pr-12 w-full border-[2px] text-[17px] pl-[5px] border-solid border-[#1E1E24] appearance-none rounded-md focus:border-[3px] focus:border-solid focus:border-[#1E1E24] valid:border-[2px] valid:border-solid valid:border-[#1E1E24]"
          type="password"
          id="password_confirmation"
          required
        />
        <div className="underline absolute h-[2px] w-full bottom-0 "></div>
        <RiLockPasswordFill className="absolute bottom-[10px] right-3 text-[30px] text-[#33333d] " />
        <label className="absolute bottom-[12px] left-[10px] font-serif text-[#1E1E24] font-thin text-lg pointer-events-none duration-[0.3s]">
          Password confirmation
        </label>
      </div>
      {errormessage && (
        <span className=" w-full inline-block -mt-2 mb-1 text-[#A37A74] font-serif">
          {" "}
          {errormessage}{" "}
        </span>
      )}

      <button
        className="mt-[10px] py-4 px-5 text-xl font-sans  text-white rounded-[5px] bg-[#33333d] font-thin tracking-wider cursor-pointer border-none w-full relative"
        type="submit"
      >
        {" "}
        Sign Up{" "}
      </button>
      <div className="mt-5 w-full">
        <h4 className="text-left">
          <span className="font-serif text-[#33333d] font-normal">
            {" "}
            Already a member?{" "}
          </span>

          <span
            className="font-serif text-[#A37A74] font-bold hover:cursor-pointer hover:no-underline"
            onClick={() => setsignup(false)}
          >
            Sign In.{" "}
          </span>
        </h4>
      </div>
    </form>
  );
};

export default SignupMenu;
