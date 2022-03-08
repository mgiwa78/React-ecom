import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import CollectionPage from "../collection/collection.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = (props, { match }) => {
  const param = useParams;
  const { collectionId } = param;

  return (
    <div className="shop-page">
      <Routes>
        <Route exact path={`/`} element={<CollectionsOverview />} />
        <Route
          exact
          path={`/:collectionId`}
          element={<CollectionPage param={param} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
