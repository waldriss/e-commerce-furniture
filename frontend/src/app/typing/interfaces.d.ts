export interface ProductInterface {
  _id: string;
  productName: string;
  description: string;
  price: number;
  first_category: string;
  second_category: string;
  quantity: number;
  colors: [] | string[];
  main_images: string[];
  image_without_bg: string;
  colors_images: [] | string[];
  dateAdded: number;
  sale: number;
  favoritedBy:string[];
  ratings:rating[];
  averageRating:number;

}


interface ProductInfoInterface{_id:string
    productName:string,
    description:string,
    price:number,
    first_category:string,
    second_category:string,
    quantity:number,
    colors:[]|string[],
    main_images:string[],
    image_without_bg:string,
    colors_images:[]|string[],
    dateAdded:number,
    width:string,
    depth:string,
    length:string,
    favoritedBy:string[];
    ratings:rating[];
    averageRating:number}


export interface TCartProduct{

    _id: string;
    productName: string;
    description: string;
    price: number;
    first_category: string;
    second_category: string;
    quantity: number;
    colors: [] | string[];
    main_images: string[];
    image_without_bg: string;
    colors_images: [] | string[];
    dateAdded: number;
    sale: number;
  
  
}    

export interface cartProductInterface{
  product:TCartProduct, 
  quantity:number,
  color:string


}
    

export interface TCart{
  cartProducts:cartProductInterface[],
  totalPrice:number;
}



export interface rating{
  note:number;
  user:{
    _id:string;
  }
}