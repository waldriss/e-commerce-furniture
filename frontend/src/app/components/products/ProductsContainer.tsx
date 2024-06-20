"use client";
import React, { useEffect, useState } from "react";
import ProductsSideMenu from "./ProductsSideMenu";
import { TFilterattributes } from "../../typing/global";
import { ProductInterface } from "../../typing/interfaces";
import Product from "./Product";
import { useGetProducts } from "../../functions/api/queries";
import { useSearchParams } from "next/navigation";
function paramsToObject(searchParams:any) {
  let obj:any = {};
  for (const [key, value] of searchParams.entries()) {
      obj[key] = value;
  }
  return obj as TFilterattributes;
}

const ProductsContainer = ({
  
  initialProducts,
}: {

  initialProducts: ProductInterface[];
}) => {
 
  const [colorsFilter,setcolorsFilter]=useState("");
  const params =useSearchParams();
  const searchParams=paramsToObject(params);

 
  const { data: products} = useGetProducts(searchParams, initialProducts,colorsFilter) as {
    data: ProductInterface[];
  };

  
 

  return (
    <div className="flex">
      <ProductsSideMenu colorsFilter={colorsFilter} setcolorsFilter={setcolorsFilter} searchParams={searchParams} />
      <div className="pt-0 pl-[60px] pr-5 pb-5 grid w-[75%] grid-cols-3 gap-y-[40px] gap-x-[50px] xl:grid-cols-2 lg:grid-cols-3 lg:w-full lg:pt-0 lg:pb-5 lg:px-[30px] lg:gap-y-10 lg:gap-x-[30px] md:grid-cols-2 justify-items-center smcart:grid-cols-1">
        {Array.isArray(products) &&
          products?.map((product, index) => (
            <Product
              favoritedBy={product.favoritedBy}
              rating={product.averageRating}
              searchParams={searchParams}
              key={product._id}
              product_sale={product.sale}
              product_colors={product.colors}
              product_image={product.image_without_bg}
              product_name={product.productName}
              product_price={product.price}
              product_id={product._id}
              product_second_category={product.second_category}
              product_ratings={product.ratings}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
