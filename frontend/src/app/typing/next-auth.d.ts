import NextAuth from "next-auth";


declare module "next-auth"{
    interface Session{
        user?:{
            userId:number;
            email:string;
            firstName:string;
            lastName:string;

        },
        access_token?:string;
        expiresIn?:number;
        refresh_token?:string;
        refresh_expiresIn?:number;
        provider:string




    }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user:{
        userId:number;
        email:string;
        firstName:string;
        lastName:string;

    },
    access_token:string;
    expiresIn:number;
    refresh_token:string;
    refresh_expiresIn:number;
    provider:string
  }
}