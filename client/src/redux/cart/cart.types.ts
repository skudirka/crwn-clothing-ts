
export interface ICartItem {
    name:string;
    imageUrl:string;
    price:number;
    quantity:number;
}

const CartActionTypes = {
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
    GET_CART_FROM_FIREBASE: 'GET_CART_FROM_FIREBASE',
    //UPDATE_CART_IN_FIREBASE: 'UPDATE_CART_IN_FIREBASE'
}

export default CartActionTypes;