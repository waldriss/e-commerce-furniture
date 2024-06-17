"use client"
import React, { useState } from 'react'
import ProductInfoColors from './ProductInfoColors'
import ProductInfoAddbtn from './ProductInfoAddbtn'

const ProductInfosAddBtn_Colors_Container = ({productId,product_colors_images,product_colors}:{productId:string,product_colors_images:[]|string[],product_colors:[]|string[]}) => {
    const [selectedcolor,setselectedcolor]=useState('')
  return (
    <>
    
    <ProductInfoColors selectedcolor={selectedcolor} setselectedcolor={setselectedcolor}  productId={productId} product_colors_images={product_colors_images} product_colors={product_colors}/>

    <ProductInfoAddbtn selectedcolor={selectedcolor} product_colors={product_colors} productId={productId}/>
    </>
  )
}

export default ProductInfosAddBtn_Colors_Container