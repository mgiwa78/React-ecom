import React from "react";
import { connect } from "react-redux";

import { selectCollectionId } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ loc, collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionId(ownProps.param["*"])(state),
});

export default connect(mapStateToProps)(CollectionPage);
