import { TFilterattributes } from "../../typing/global";
import { backendUrl } from "../general_data";
import { convertToUrlSearchParams } from "../utils";

//---------------------------PRODUCTS
export const getServerSideproductbyid = async (productId: String) => {
  const ProductResponse = await fetch(
    `${backendUrl}product/?productId=${productId}`,
    { cache: "no-store" }
  );
  const product = await ProductResponse.json();

  return product;
};

export const getServerSideproducts = async (
  filterattributes?: TFilterattributes
) => {
  let searchparams = "";

  if (filterattributes) {
    const convertedFilter =convertToUrlSearchParams(filterattributes);

    searchparams = "?" + new URLSearchParams(convertedFilter).toString();
  }
  const ProductsResponse = await fetch(`${backendUrl}${searchparams}`, {
    cache: "no-store",
  });
  const products = await ProductsResponse.json();

  return products;
};

//---------------------------Cart

export const getServerSideCartProducts = async (
  userId: number | string | undefined
) => {
  const res = await fetch(`${backendUrl}getCart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId }),
    cache: "no-store",
  });
  let data: any = {};

  if (!res.ok) {
    data = {};
  } else {
    data = await res.json();
  }

  return data;
};
