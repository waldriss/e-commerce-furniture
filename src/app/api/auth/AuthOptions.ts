import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { backendUrl } from "../../functions/general_data";
import { refreshToken } from "../../functions/authApi";
import GoogleProvider from "next-auth/providers/google";




export const authOptions: NextAuthOptions = {

    providers: [GoogleProvider({
      clientId: '40239457379-coe1e4rplmemksdhu0hddtt8vip6fmdq.apps.googleusercontent.com',
      clientSecret: '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'
    }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: {
            label: "email",
            type: "text",
            placeholder: "",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials?.password) return null;
          const { email, password } = credentials;
          const res = await fetch(backendUrl+"login", {
            credentials:"include",
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status == 401) {
            const errorData = await res.json();
            throw new Error(errorData.message);
  
            
          }
          const user = await res.json();
         
          return user;
        },
      }),
    ],
    secret: "your-secure-jwt-secret-value-here",
  
  
    callbacks: {async signIn({account,profile}){
      if(account?.provider==="google"){
  
      
      const userData={
        firstName:profile?.name,
        lastName:'',
        email:profile?.email,
        phone:0,
        address:""
  
      }
      try{
        const res=await fetch(`${backendUrl}googleLogin`,{
        
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', 
            
            },
            body: JSON.stringify(userData) 
        });
        
            if(res.ok)
            { 
            return true
  
            }
            else{
              return false;
            }
        
        
        }     
        catch(err){
            console.log(err );
        }  
      }
      return true
  
    }
      ,
      async jwt({ token, user,account,session }:any) {
         if(account?.provider!=='google'&&session?.provider!=='google'&&token?.provider!=="google"){
          
          
        
        if (user) return { ...token, ...user };
  
        if (new Date().getTime() < token.expiresIn)
          return token;
      
        
        if (new Date().getTime() < token.refresh_expiresIn)
        return await refreshToken(token);
        
        
        return token
      }else{
        
        token.provider="google";
        if(account){
         
  
        
        token.id_token=account?.id_token;}
        
  
        return token;
        
      }
      },
  
      async session({ token, session,user }:any) { 
        
        if(token.provider!=='google'){
  
        
        session.user = token?.user;
        session.access_token = token?.access_token;
        session.refresh_token=token?.refresh_token;
        session.expiresIn=token?.expiresIn
        session.refresh_expiresIn=token?.expiresIn;
  
        return session;
      }
      else{
        
        if(token?.googleProvider_firstfetch){
          return token.firstsession;
  
        }
        else{
          try{
            const res=await fetch(`${backendUrl}getGoogleUser`,{
            
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token.id_token}`,
                'provider':token.provider
                
                },
                body: JSON.stringify({email:session?.user?.email}) 
            });
            
                if(res.ok)
                {
                const responseData= await res.json();
                let newsession=session;
                user=responseData.user;
                newsession.user=responseData.user;
                newsession.id_token=token.id_token;
                newsession.provider=token.provider;
                token.googleProvider_firstfetch=true;
                token.firstsession=newsession;
    
                return newsession
    
                }
                else{
                  
                  return null
                }
               
            
            
            }     
            catch(err){
                console.log(err );
            } 
  
        }
        
       
  
      
  
      }
      },
    },
  };