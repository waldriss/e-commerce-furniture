"use client";
import React from "react";
import ProductImagesSlideshow from "./ProductImagesSlideshow";
import ProductInfos from "./ProductInfos";
import InformationLine from "../../InformationLine";
import ProductInfoProducts from "./ProductInfoProducts";
import {
  ProductInfoInterface,
  ProductInterface,
} from "@/src/app/typing/interfaces";
import { useGetProductById } from "@/src/app/functions/api/queries";
const ProductInfoContainer = ({
  initialProduct,
  searchParams,
  productId,

}: {
  initialProduct: ProductInfoInterface;
  searchParams: any;
  productId: string;
  
}) => {
  const { data: product } = useGetProductById(productId, initialProduct) as {
    data: ProductInfoInterface;
  };
  return (
    <>
      <div className="flex justify-start items-start pb-[10px] xl:flex-col">
        <ProductImagesSlideshow product_images={product.main_images} />
        <ProductInfos
          searchParams={searchParams}
          productId={productId}
          productWidth={product.width}
          productLength={product.length}
          productDepth={product.depth}
          productName={product.productName}
          productDescription={product.description}
          productPrice={product.price}
          product_colors_images={product.colors_images}
          product_colors={product.colors}
        />
      </div>
      <InformationLine />
      
    </>
  );
};

export default ProductInfoContainer;
