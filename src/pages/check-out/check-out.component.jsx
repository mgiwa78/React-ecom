import React from "react";
import "./check-out.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
import { PaymentElement } from "@stripe/react-stripe-js";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selector";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KbN3DINzJTFlb3eGysFryxkTZDQXbbPpHgH9LNkWF7Dnmjc47Hy7tjwWzvfOELR6nJst3R5VytdE6TSF4WxmNqk00a4J5OrLw"
);

const options = {
  clientSecret:
    "sk_test_51KbN3DINzJTFlb3ei1E8C6Pi9FWo6g2KazKHinGIFYJWdK1EFtqXobpbaGy2UAGcYvcRQEWtjyMmSrwwivQbswsP00EXBw5mSy",
};
const CheckOutPage = ({ cartItems, total }) => (
  <Elements stripe={stripePromise}>
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-blocks">
          <span className="">Product</span>
        </div>
        <div className="header-blocks">
          <span className="">Description</span>
        </div>
        <div className="header-blocks">
          <span className="">Quantity</span>
        </div>
        <div className="header-blocks">
          <span className="">Price</span>
        </div>
        <div className="header-blocks">
          <span className="">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span className="total"> TOTAL: ${total}</span>
      </div>
    </div>
  </Elements>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
