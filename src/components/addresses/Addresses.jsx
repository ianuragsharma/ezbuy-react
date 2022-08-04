import React from "react";
import { useOrder } from "../../contexts";

const Addresses = () => {
  const { orderState, orderDispatch } = useOrder();
  console.log(orderState.addresses.defaultAddress);
  return (
    <>
      <input id="default-address" type="radio" />
      <label htmlFor="default-address" className="ml-1 text-base">
        {orderState.addresses.defaultAddress}
      </label>
    </>
  );
};

export { Addresses };
