import { TFilterattributes } from "../../typing/global";
import { backendUrl } from "../general_data";
import { convertToUrlSearchParams } from "../utils";

export const getClientSideproducts = async (
  colorsFilter:string,
  filterattributes?: TFilterattributes,
  
) => {
 
 
  let searchparams = "";

  if (filterattributes) {
    if(colorsFilter!=="") filterattributes.colors=colorsFilter; else  filterattributes.colors=undefined;
    const convertedFilter =convertToUrlSearchParams(filterattributes);

    searchparams = "?" + new URLSearchParams(convertedFilter).toString();
  }
  const ProductsResponse = await fetch(`${backendUrl}${searchparams}`, {
    cache: "no-store",
  });
  const products = await ProductsResponse.json();

  return products;
};
export const getClientSideProductById = async (productId: String) => {
  const ProductResponse = await fetch(
    `${backendUrl}product/?productId=${productId}`,
    { cache: "no-store" }
  );
  const product = await ProductResponse.json();

  return product;
};

