import { backendUrl } from "../general_data";

export const RateProduct = async (
  userId: number | string | undefined,
  productId: string,
  rating: number
) => {
  const res = await fetch(`${backendUrl}rateProduct`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      productId: productId,
      rating: rating,
    }),
  });
  let data: any = {};
  if (!res.ok) {
    data = await res.json();

    throw new Error(data?.message);
  } else {
    data = await res.json();
  }

  return data;
};
