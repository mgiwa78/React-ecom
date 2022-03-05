import React from "react";
import "./check-out.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selector";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOutPage = ({ cartItems, total }) => (
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
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
