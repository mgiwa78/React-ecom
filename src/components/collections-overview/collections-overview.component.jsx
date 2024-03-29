import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/preview-collection.component";

import { selectCollectionForOvereview } from "../../redux/shop/shop.selector";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {console.log(collections)}
    {collections.map(({ id, ...otherColectionPops }) => (
      <CollectionPreview key={id} {...otherColectionPops} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForOvereview,
});

export default connect(mapStateToProps)(CollectionsOverview);
