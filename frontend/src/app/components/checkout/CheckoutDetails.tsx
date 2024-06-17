import React from "react";
import CheckoutShippingDetails from "./CheckoutShippingDetails";
import Payment from "./Payment";

const CheckoutDetails = ({searchParams}:{searchParams:{step:string,payment:string}}) => {
  return (
    <>
      {searchParams?.step == "payment" ? (
        <Payment searchParams={searchParams} />
      ) : (
        <CheckoutShippingDetails />
        
      )}
    </>
  );
};

export default CheckoutDetails;
