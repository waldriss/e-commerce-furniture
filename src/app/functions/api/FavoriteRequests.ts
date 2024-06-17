import { backendUrl } from "../general_data";



export const AddProductToFavorite=async(userId:number|string|undefined,productId:number|string) => { 
    const res=await fetch(`${backendUrl}AddProductToFavorite`,{
          
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            
            },
            body: JSON.stringify({userId:userId,productId:productId}) 
          }); 
          let data:any={};
          if(!res.ok){
            
             data= await res.json();
           

            throw new Error(data.message)
          }
          else{
             data= await res.json();

          }
          
          
    return data;
  }





  export const RemoveProductFromFavorite=async(userId:number|string|undefined,productId:number|string) => { 
    const res=await fetch(`${backendUrl}removeProductFromFavorite`,{
          
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            
            },
            body: JSON.stringify({userId:userId,productId:productId}) 
          }); 
          let data:any={};
          if(!res.ok){
            
             data= await res.json();
           

            throw new Error(data.message)
          }
          else{
             data= await res.json();

          }
          
          
    return data;
  }