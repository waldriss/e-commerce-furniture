import { useQuery } from "react-query";
import { QUERY_KEYS } from "./QUERY_KEYS";
import {
  getClientSideProductById,
  getClientSideproducts,
} from "./ProductRequests";
import { TFilterattributes } from "../../typing/global";
import {
  cartProductInterface,
  ProductInfoInterface,
  ProductInterface,
  TCart,
} from "../../typing/interfaces";
import { getClientSideCartProducts } from "./CartRequests";

export const useGetProducts = (
  filterAttributes: TFilterattributes|undefined,
  initialProducts: ProductInterface[],
  colorsFilter:string
) => {
  
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PRODUCTS,filterAttributes,colorsFilter],
    queryFn: () => getClientSideproducts(colorsFilter,filterAttributes),
    initialData: initialProducts,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    staleTime: 10,
  });
};

export const useGetProductById = (
  productId: string,
  initialProduct: ProductInfoInterface
) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PRODUCT_BY_ID, productId],
    queryFn: () => getClientSideProductById(productId),
    initialData: initialProduct,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    staleTime: 100,
  });
};

export const useGetCart = (
  userId: number | string | undefined,
  initialCart?: TCart
) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CART, userId],
    queryFn: () => getClientSideCartProducts(userId),
    initialData: initialCart,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    staleTime: 100,
    enabled:!!userId
  });
};
