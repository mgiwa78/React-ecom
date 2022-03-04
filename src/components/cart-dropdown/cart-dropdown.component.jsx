import React from "react";
import CustonButton from "../custon-button/custon-button.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustonButton>GO TO CHECKOUT</CustonButton>
    </div>
  );
};

export default CartDropdown;
