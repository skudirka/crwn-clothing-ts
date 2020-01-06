import {createSelector, Selector} from 'reselect';
import {IRootState} from '../root-types';
import {IShopState, IShopCollection} from './shop.types';

const selectShop:Selector<IRootState, IShopState> = (state:IRootState) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview:Selector<IRootState, IShopCollection[]> = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = (collectionUrlParam:string) => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);