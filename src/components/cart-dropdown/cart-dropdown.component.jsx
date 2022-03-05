import React from "react";
import CustonButton from "../custon-button/custon-button.component";
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { useLocation, useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <CustonButton
        onClick={() => {
          history("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustonButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
