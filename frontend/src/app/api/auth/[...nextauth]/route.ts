import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { refreshToken } from "@/src/app/functions/authApi";
import { setCookie } from 'cookies-next';
import { backendUrl } from "@/src/app/functions/general_data";
import GoogleProvider from "next-auth/providers/google";
import { authOptions } from "../AuthOptions";

 








const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };