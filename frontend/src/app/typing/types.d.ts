import { COUNTRIES } from "../functions/countries";


export type SelectMenuOption = typeof COUNTRIES[number] 
export type FormEvent = React.FormEvent<HTMLFormElement>
export type MouseEvent = React.MouseEvent<HTMLButtonElement>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>

 
export type RatingResponse={message:string}|{productRating:number}|{}
export type checkProductInFavorite={}|{message:string}|{productInFavorite:boolean}
export type RemoveOrAddToFavoriteResponse={}|{message:string}|{success:string}
export type Updateqty_Remove_AddToCartResponse={message:string}|{success:string}



