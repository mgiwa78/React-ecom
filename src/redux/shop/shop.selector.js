import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  woomen: 4,
  mens: 5,
};

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionId = (collectionUrlParam) =>
  createSelector([selectCollection], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
