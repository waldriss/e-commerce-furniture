"use client"
import React from "react";
import Product from "./products/Product";
import { ProductInterface } from "../typing/interfaces";
import { useGetProducts } from "../functions/api/queries";

const HomeProductsClientProvider = ({initialProducts}:{initialProducts:ProductInterface[]}) => {
    const {data:products} =useGetProducts({limit:"8"},initialProducts,"") as {data:ProductInterface[]};
  return (
    <section className="flex overflow-x-scroll gap-x-10 mx-9 smcart:mx-4   py-8 lg:py-2 customScrollBar_dark ">
      {Array.isArray(products) &&
        products
          ?.map((product, index) => (
            <Product
            favoritedBy={product.favoritedBy}
              rating={product.averageRating}
              Homeproducts={true}
              product_sale={product.sale}
              key={product._id}
              product_colors={product.colors}
              product_image={product.image_without_bg}
              product_name={product.productName}
              product_price={product.price}
              product_id={product._id}
              product_second_category={product.second_category}
              product_ratings={product.ratings}
            />
          ))}
    </section>
  );
};

export default HomeProductsClientProvider;
