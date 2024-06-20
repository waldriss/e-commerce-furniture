import React from "react";
import SideMenuUtilites from "../components/products/SideMenuUtilites";
import ProductsSideMenu from "../components/products/ProductsSideMenu";
import Product from "../components/products/Product";
import bg_body from "@/public/bgbody3.svg"
import { ProductInterface } from "../typing/interfaces";
import { TFilterattributes } from "../typing/global";
import ProductsContainer from "../components/products/ProductsContainer";
import { getServerSideproducts } from "../functions/api/serverSideRequests";





const Products = async({searchParams}:{searchParams:TFilterattributes}) => {
  
  const products:ProductInterface[]=await getServerSideproducts(searchParams);
  
  
  return <main className="pt-[200px] min-h-[1500px] lg:pt-[150px] bg-[#f2e8d9]" style={{ 'backgroundImage': `url(${bg_body.src})`}}>
    
    <SideMenuUtilites />
     <ProductsContainer  initialProducts={products}/>

      

    </main>;
};

export default Products;
