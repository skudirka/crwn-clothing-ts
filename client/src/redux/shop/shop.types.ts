import {IFirestoreData} from '../../firebase/firebase.utils';

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

// Data types
export interface IShopItem extends IFirestoreData {
    id:string;
    name:string;
    imageUrl:string;
    price:number;
}

export interface IShopCollection extends IFirestoreData {
    id:string;
    title:string;
    items:IShopItem[];
    routeName:string;
}

export interface IShopCollectionMap {
    [prop:string]:IShopCollection;
}

// State type
export interface IShopState {
    collections?:(IShopCollectionMap | null);
    isFetching:boolean;
    errorMessage?:string;
}

// Action types
interface IFetchCollectionsStartAction {
	type: typeof FETCH_COLLECTIONS_START;
}
interface IFetchCollectionsSuccessAction {
	type: typeof FETCH_COLLECTIONS_SUCCESS;
	payload: IShopCollectionMap;
};
interface IFetchCollectionsFailureAction {
	type: typeof FETCH_COLLECTIONS_FAILURE;
	payload: string;
};

export type TypeShopAction = IFetchCollectionsSuccessAction | IFetchCollectionsFailureAction | IFetchCollectionsStartAction;

const ShopActionTypes = {
    FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_FAILURE
}
export default ShopActionTypes;