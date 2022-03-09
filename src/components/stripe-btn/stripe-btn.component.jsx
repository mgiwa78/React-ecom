import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutBtn = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "";

  const onToken = (token) => {
    console.log(token);
    alert("Pay Success");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="E-com App"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutBtn;
