import {IFirestoreData} from '../../firebase/firebase.utils';
import {IShopItem} from '../shop/shop.types';

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_CART_FROM_FIREBASE = 'GET_CART_FROM_FIREBASE';

// Data types
/*export interface ICartItem extends IShopItem {
    quantity:number;
}*/
export interface ICartItem extends IShopItem {};

export interface ICart extends IFirestoreData {
    userId:string;
    cartItems:ICartItem[];
}


// State type
export interface ICartState {
    hidden: boolean,
    cartItems: ICartItem[]
}


// Action types
interface IToggleCartHidden {
    type: typeof TOGGLE_CART_HIDDEN;
};

interface IAddItem {
    type: typeof ADD_ITEM;
    payload: ICartItem;
};

interface IRemoveItem {
    type: typeof REMOVE_ITEM;
    payload: ICartItem;
};

interface IClearItemFromCart{
    type: typeof CLEAR_ITEM_FROM_CART;
    payload: ICartItem;
};

interface IClearCart {
    type: typeof CLEAR_CART;
};

interface ISetCartFromDB {
    type: typeof GET_CART_FROM_FIREBASE;
    payload: ICartItem[]
};

export type TypeCartAction = IToggleCartHidden | IAddItem | IRemoveItem | IClearItemFromCart | IClearCart | ISetCartFromDB;


const CartActionTypes = {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_ITEM_FROM_CART,
    CLEAR_CART,
    GET_CART_FROM_FIREBASE,
    //UPDATE_CART_IN_FIREBASE
}
export default CartActionTypes;