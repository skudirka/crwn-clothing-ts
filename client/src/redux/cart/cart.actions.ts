import {ICartItem, TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART, CLEAR_CART, GET_CART_FROM_FIREBASE, TypeCartAction]} from './cart.types';

export const toggleCartHidden = ():TypeCartAction => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = (item:ICartItem):TypeCartAction => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (item:ICartItem):TypeCartAction => ({
    type: REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = (item:ICartItem):TypeCartAction => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = ():TypeCartAction => ({
    type: CLEAR_CART
});

/*export const updateCartInDB = ():TypeCartAction => ({
    type: UPDATE_CART_IN_FIREBASE
});*/

export const setCartFromDB = (cartItems:ICartItem[]):TypeCartAction => ({
    type: GET_CART_FROM_FIREBASE,
    payload: cartItems
});