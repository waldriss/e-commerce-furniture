import { backendUrl } from "../general_data";

export const getClientSideCartProducts = async (
    userId: number | string | undefined
  ) => {
    const res = await fetch(`${backendUrl}getCart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
      cache: "no-store",
    });
    let data: any = {};
  
    if (!res.ok) {
      data = {};
    } else {
      data = await res.json();
    }
  
    return data;
  };
  


  export const AddToCart=async(userId:number|string|undefined,productId:number|string,color:string) => { 
    const res=await fetch(`${backendUrl}AddProductToCart`,{
          
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            
            },
            body: JSON.stringify({userId:userId,productId:productId,color:color}) 
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



  export const ChangeNumberOfProductInCart= async(userId:number|string|undefined,productId:number|string,qty:number,color:string) => { 
    const res=await fetch(`${backendUrl}ChangeNumberOfProductFromCart`,{
          
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            
            },
            body: JSON.stringify({userId:userId,productId:productId,qty:qty,color:color}) 
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







    export const RemoveFromCart=async(userId:number|string|undefined,productId:number|string,color:string) => { 
        const res=await fetch(`${backendUrl}removeProductFromCart`,{
              
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', 
                
                },
                body: JSON.stringify({userId:userId,productId:productId,color:color}) 
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