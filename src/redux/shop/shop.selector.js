import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForOvereview = createSelector(
  [selectCollection],
  (collection) => Object.values(collection)
);

export const selectCollectionId = (collectionUrlParam) =>
  createSelector(
    [selectCollection],
    (collections) => collections[collectionUrlParam]
  );
