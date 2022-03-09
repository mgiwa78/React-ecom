import React from "react";
import { connect } from "react-redux";

import { selectCollectionId } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ loc, collection }) => {
  console.log(collection);
  return (
    <div className="category">
      <h1>Collection</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionId(ownProps.param["*"])(state),
});

export default connect(mapStateToProps)(CollectionPage);
