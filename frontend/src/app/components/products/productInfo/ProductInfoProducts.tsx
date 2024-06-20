"use client";
import React from "react";
import Product from "../Product";
import { ProductInterface } from "@/src/app/typing/interfaces";
import { useGetProducts } from "@/src/app/functions/api/queries";

const ProductInfoProducts =({
  initialProducts,
}: {
  initialProducts: ProductInterface[];
}) => {
  const { data: products } = useGetProducts({limit:"6"}, initialProducts,"") as {
    data: ProductInterface[];
  };

  return (
    <div>
      <h2 className='font-light text-5xl font-sans text-center pt-14 after:content-[""] after:block after:m-auto after:pt-[20px] after:border-b-[#33333d] after:border-solid after:border-b-[4px] after:w-[500px] md:after:w-[80%]'>
        {" "}
        Some Other Products
      </h2>
      <div className="flex gap-y-[30px] gap-x-10 overflow-x-auto pt-[50px] mx-9 md:mx-3 pb-5 my-0 customScrollBar_dark">
        {Array.isArray(products) &&
          products
            ?.map((product, index) => (
              <Product
              favoritedBy={product.favoritedBy}
              rating={product.averageRating}
                key={product._id}
                Homeproducts={true}
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

export default ProductInfoProducts;
