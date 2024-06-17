"use client"
import React, { useEffect, useState } from 'react'

import ProductAddBtns from './ProductAddBtns'
import ProductColors from './ProductColors'

const ContainerProductButtonAndColors = ({searchParams,product_colors,product_id,favoritedBy}:{searchParams:any,product_colors:[]|string[],product_id:string,favoritedBy:string[]}) => {
    const [showcolors,setshowcolors]=useState(false);
    const [selectedcolor,setselectedcolor] = useState('');
    useEffect(() => {setselectedcolor(""); },[product_colors,product_id])
  return (
  <div className=''>
    <ProductAddBtns favoritedBy={favoritedBy} searchParams={searchParams} productId={product_id} product_colors={product_colors} selectedcolor={selectedcolor}  setshowcolors={setshowcolors} />
    {product_colors&&product_colors?.length>0 &&<ProductColors  selectedcolor={selectedcolor} setselectedcolor={setselectedcolor} showcolors={showcolors} setshowcolors={setshowcolors} product_colors={product_colors}/>}
  </div>
  )
}

export default ContainerProductButtonAndColors