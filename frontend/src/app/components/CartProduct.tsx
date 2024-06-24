import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import fauteuil from "@/public/fauteuil.png";
import svgbackground from "@/public/bg-product.svg";
import { truncate } from "../functions/truncate";
import { ProductInterface, TCartProduct } from "../typing/interfaces";
import {
  useAddProductToCart,
  useChangeNumberOfProductInCart,
  useRemoveProductFromCart,
} from "../functions/api/mutations";
import Image from "next/image";

const CartProduct = ({
  setshowcart,
  cartProduct,
  quantity,
  userId,
  ProductColor,
}: {
  setshowcart: (value: boolean) => void;
  cartProduct: TCartProduct;
  quantity: number;
  userId: number | undefined;
  ProductColor: string;
}) => {
 
  const {
    mutateAsync: updateProductQuantity,
    isLoading: isUpdatingProductQuantity,
  } = useChangeNumberOfProductInCart();
  const { mutateAsync: removeProductFromCart } = useRemoveProductFromCart();

  const handleUpdateProductQuantity = async (addOrRemove: Number) => {
    if (!isUpdatingProductQuantity) {
      if (addOrRemove == 1) {
        await updateProductQuantity({
          userId,
          productId: cartProduct._id,
          color: ProductColor,
          qty: quantity + 1,
        });
      } else {
        await updateProductQuantity({
          userId,
          productId: cartProduct._id,
          color: ProductColor,
          qty: quantity - 1,
        });
      }
    }
  };

  const handleRemoveProduct = async () => {

    await removeProductFromCart({
      userId,
      productId: cartProduct._id,
      color: ProductColor,
      productPrice:cartProduct.sale===-1?cartProduct.price:cartProduct.sale,
      productQuantity:quantity

    });
  };
  const product_image = cartProduct.image_without_bg;
  const imgsrc =
    "https://raw.githubusercontent.com/waldriss/ecom_images/main" +
    product_image.split(".jpg")[0] +
    product_image.split(".jpg")[1] +
    ".png";

  return (
    <div className="pb-[15px]  flex gap-[15px] [&:not(:last-child)]:border-b-[1px] [&:not(:last-child)]:border-solid [&:not(:last-child)]:border-b-[#c9c9d2]">
      <Link
        style={{ backgroundImage: `url(${svgbackground.src})` }}
        onClick={() => setshowcart(false)}
        href={`/products/${cartProduct._id}`}
        className="bg-[#4f4f5e] shadow-md rounded-xl relative flex justify-center items-center w-[160px] h-48 bg-cover"
      >
        <Image
        sizes="400"
        fill
          className="relative z-[2] w-[98%] h-[78%] object-cover object-center shadowpng"
          src={imgsrc}
          alt=""
        />
      </Link>
      <div className="relative flex-1 flex flex-col justify-start items-start">
        <Link
          href={`/products/${cartProduct._id}`}
          onClick={() => setshowcart(false)}
          className="no-underline break-words font-serif text-[1.1rem] smcart:text-[0.95rem] pb-[5px] text-black"
        >
          {" "}
          {truncate(cartProduct.productName, 34)}{" "}
        </Link>

        <div>
          <span className="relative text-[#A37A74] font-serif smcart:text-sm ">
            {" "}
            {cartProduct.first_category}
          </span>
          {ProductColor && (
            <div
              style={{ backgroundColor: ProductColor }}
              className={` inline-block cursor-pointer w-6 h-6 rounded-full border-solid border-black ml-3 absolute  `}
            ></div>
          )}
        </div>
        <button
          onClick={() => handleRemoveProduct()}
          className=" bg-[#A37A74] text-white no-underline py-[6px] px-[10px] text-xl font-thin font-sans tracking-wider border-[1px] border-solid border-[#A37A74] mt-[10px] cursort-pointer rounded-[3px]"
        >
          {" "}
          Remove{" "}
        </button>
        <div className="w-full mt-[15px] pb-[10px] flex justify-between items-center">
          <div className="flex">
            <button
              onClick={() => handleUpdateProductQuantity(-1)}
              className={`flex items-center justify-center  bg-[#f7f1e8] py-2 px-[10px] smcart:px-[8px] border-[1px] border-solid border-[#f7f1e8] duration-[0.2s] ease-in ${
                quantity == 1
                  ? "pointer-events-none"
                  : "cursor-pointer hover:bg-[#33333d] hover:text-white "
              } border-r-0`}
            >
              <AiOutlineMinus />{" "}
            </button>
            <span className="border-t-[1px] border-solid border-[#f7f1e8] border-b-[1px] flex items-center justify-center bg-[#f7f1e8] py-2 px-[15px] smcart:px-[12px]">
              {quantity}{" "}
            </span>
            <button
              onClick={() => handleUpdateProductQuantity(1)}
              className={`flex items-center justify-center bg-[#f7f1e8] py-2 px-[10px] smcart:px-[8px] border-[1px] border-solid border-[#f7f1e8] duration-[0.2s] ease-in cursor-pointer hover:bg-[#33333d] hover:text-white border-l-0`}
            >
              <AiOutlinePlus />{" "}
            </button>
          </div>
          <span className="text-[1.05em] font-serif">
            {" "}
            €{cartProduct.sale !== -1 ? cartProduct.sale : cartProduct.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
