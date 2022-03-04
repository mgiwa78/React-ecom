import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

import "./collection-item.styles.scss";
import CustonButton from "../custon-button/custon-button.component";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustonButton inverted onClick={() => addItem(item)}>
        {" "}
        ADD TO CART
      </CustonButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
