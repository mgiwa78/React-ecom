import React from "react";
import CustonButton from "../custon-button/custon-button.component";
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustonButton>GO TO CHECKOUT</CustonButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
