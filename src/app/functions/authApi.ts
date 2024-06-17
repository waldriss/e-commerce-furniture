import { backendUrl } from "./general_data";

export const refreshToken=async(token: any)=>{
  console.log(token);
 
    const res = await fetch( backendUrl+"refreshToken", {
      method: "POST",
      headers: {
        authorization: `Refresh ${token.refresh_token}`,
      },
    });
    
    if(res.ok){
    const response = await res.json();
  
    return {
      ...token,
      access_token:response.access_token,
      expiresIn:response.expiresIn
    };}
    else{
      return null
    }
  
  
}



export const logout=async(token:string)=>{
  try{
    const res = await fetch(backendUrl+"logout", {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`
      },
    });
   
    if(res.ok){
      
      return true; 
    }
    else{
      
      const error= await res.json();
      return error;
    }
  }     
  catch(err){
      console.log(err);
  }  
}


