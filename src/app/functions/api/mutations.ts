import { useMutation, useQueryClient } from "react-query";
import {
  AddProductToFavorite,
  RemoveProductFromFavorite,
} from "./FavoriteRequests";
import {
  AddToCart,
  ChangeNumberOfProductInCart,
  RemoveFromCart,
} from "./CartRequests";
import { RateProduct } from "./RatingRequests";
import { QUERY_KEYS } from "./QUERY_KEYS";
import { ProductInterface } from "../../typing/interfaces";
import {
  addFavoritedByToOneProduct,
  addFavoritedByToProductFromList,
  removeFavoritedByFromOneProduct,
  removeFavoritedByFromProductFromList,
  updateNumberOfProductInCart,
  updateRatingofOneProduct,
  updateRatingProducts,
  updateRemoveProductFromCart,
} from "../utils";

//-------------------------------Favorite
export const useAddProductToFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      userId,
      productId,
    }: {
      userId: number | string | undefined;
      productId: number | string;
    }) => AddProductToFavorite(userId, productId),
    onMutate: async ({ productId, userId }) => {
      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.GET_PRODUCTS] },
        (data: any) => {
          if (userId) {
            const newdata = addFavoritedByToProductFromList(
              data,
              productId.toString(),
              userId.toString()
            );
            return newdata;
          }
          return data;
        }
      );

      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.GET_PRODUCT_BY_ID, productId] },
        (data: any) => {
          if (userId) {
            const newdata = addFavoritedByToOneProduct(data, userId.toString());
            return newdata;
          }
          return data;
        }
      );
    },
    onSuccess: (data, { productId }) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PRODUCTS],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PRODUCT_BY_ID, productId],
      });
    },
  });
};

export const useRemoveProductFromFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      userId,
      productId,
    }: {
      userId: number | string | undefined;
      productId: number | string;
    }) => RemoveProductFromFavorite(userId, productId),
    onMutate: async ({ productId, userId }) => {
      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.GET_PRODUCTS] },
        (data: any) => {
          if (userId) {
            const newdata = removeFavoritedByFromProductFromList(
              data,
              productId.toString(),
              userId.toString()
            );
            return newdata;
          }
          return data;
        }
      );

      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.GET_PRODUCT_BY_ID, productId] },
        (data: any) => {
          if (userId) {
            const newdata = removeFavoritedByFromOneProduct(
              data,
              userId.toString()
            );
            return newdata;
          }
          return data;
        }
      );
    },
    onSuccess: (data, { productId }) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PRODUCTS],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PRODUCT_BY_ID, productId],
      });
    },
  });
};

//-------------------------------Cart

export const useAddProductToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      userId,
      color,
      productId,
    }: {
      userId: number | string | undefined;
      productId: number | string;
      color: string;
    }) => AddToCart(userId, productId, color),
    onSuccess: (data, { userId }) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_CART, userId],
      });
    },
  });
};

export const useRemoveProductFromCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      userId,
      color,
      productId,
      productQuantity,
      productPrice,
    }: {
      userId: number | string | undefined;
      productId: number | string;
      color: string;
      productQuantity: number;
      productPrice: number;
    }) => RemoveFromCart(userId, productId, color),
    onMutate: ({ userId, productId, color, productPrice, productQuantity }) => {
      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.GET_CART, userId] },
        (data: any) => {
          if (userId) {
            const newCart = updateRemoveProductFromCart(
              data,
              productId.toString(),
              color,
              productPrice,
              productQuantity
            );
            return newCart;
          }
          return data;
        }
      );
    },
    onSuccess: (data, { userId }) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_CART, userId],
      });
    },
  });
};

export const useChangeNumberOfProductInCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      userId,
      color,
      productId,
      qty,
    }: {
      userId: number | string | undefined;
      productId: number | string;
      color: string;
      qty: number;
    }) => ChangeNumberOfProductInCart(userId, productId, qty, color),
    onMutate: ({ userId, productId, color, qty }) => {
      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.GET_CART, userId] },
        (data: any) => {
          if (userId) {
            const newCart = updateNumberOfProductInCart(
              data,
              productId.toString(),
              color,
              qty
            );
            return newCart;
          }
          return data;
        }
      );
    },
    onSuccess: (data, { userId }) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_CART, userId],
      });
    },
  });
};

//--------------- Rating

export const useRateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      userId,
      productId,
      userNewRating,
      initialRating,
      userInitialRating,
    }: {
      userId: number | string | undefined;
      productId: string;
      userNewRating: number;
      initialRating: number;
      userInitialRating?: number;
    }) => RateProduct(userId, productId, userNewRating),
    onMutate: ({
      productId,
      userInitialRating,
      initialRating,
      userNewRating,
    }) => {
      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.GET_PRODUCTS] },
        (data: any) => {
          let newproducts = updateRatingProducts(
            data,
            productId,
            initialRating,
            userNewRating,
            userInitialRating
          );

          return newproducts;
        }
      );

      queryClient.setQueriesData(
        { queryKey: [QUERY_KEYS.GET_PRODUCT_BY_ID, productId] },
        (data: any) => {
          let newproducts = updateRatingofOneProduct(
            data,
            initialRating,
            userNewRating,
            userInitialRating
          );

          return newproducts;
        }
      );
    },
    onSuccess: (data, { productId }) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PRODUCTS],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PRODUCT_BY_ID, productId],
      });
    },
  });
};
