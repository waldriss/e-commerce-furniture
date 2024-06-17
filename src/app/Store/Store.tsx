import { create } from "zustand"


interface SmallDeviceContext {
    isSmallDevice:boolean
    setisSmallDevice:(isSmallDevice:boolean)=>void

}




export const UseSmallDeviceStore=create<SmallDeviceContext>()((set)=>({
isSmallDevice:false,
setisSmallDevice:(isSmallDevice:boolean)=>set({isSmallDevice}),
}))


interface SideMenuContext{
    ShowSidemenu:boolean,
    SetShowSidemenu:(ShowSidemenu:boolean)=>void
}


export const UseSideMenuStore=create<SideMenuContext>()((set)=>({
    ShowSidemenu:false,
    SetShowSidemenu:(ShowSidemenu:boolean)=>set({ShowSidemenu}),
    }))


    interface CartContext{
        showcart:boolean,
        setshowcart:(showcart:boolean)=>void
    }


export const UseShowCartStore=create<CartContext>()((set)=>({
    showcart:false,
    setshowcart:(showcart:boolean)=>set({showcart}),
    }))


    interface TokenContext {
        accessToken:string|null
        setaccessToken:(accessToken:string|null)=>void
    
    }
    export const UseTokenStore=create<TokenContext>()((set)=>({
        accessToken:null,
        setaccessToken:(accessToken:string|null)=>set({accessToken}),
        }))

        interface AuthenticatedUser{
            userId:string,
            email:string,
            firstName:string,
            lastName:string
        }
        
        
        interface AuthenticatedUserContext {
            authenticatedUser:AuthenticatedUser|null
            setauthenticatedUser:(user:AuthenticatedUser|null)=>void
        
        }
        export const UseAuthenticatedUserStore=create<AuthenticatedUserContext>()((set)=>({
            authenticatedUser:null
            ,
            setauthenticatedUser:(authenticatedUser:AuthenticatedUser|null)=>set({authenticatedUser}),
            }))



interface LogInAlertContext{
            ShowLogInAlert:boolean,
            SetShowLogInAlert:(ShowLogInAlert:boolean)=>void
            }
            
            
export const UseLogInAlertStore=create<LogInAlertContext>()((set)=>({
            ShowLogInAlert:false,
            SetShowLogInAlert:(ShowLogInAlert:boolean)=>set({ShowLogInAlert}),
            }))



/*
interface ProductContext{
        id:string,
        name:string,
        price:number,
        stock:string,
        colors:[string],
        solde:number,
        main_image:string,
        images:[string],
        primary_category:string,
        secondary_category:string,
        place:string,
        style:string,
        width:number,
        length:number,
        depth:number

}

*/