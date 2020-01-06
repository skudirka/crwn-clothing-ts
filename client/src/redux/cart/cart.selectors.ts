import {Selector, createSelector} from 'reselect';
import {ICartState, ICartItem} from './cart.types';
import {IRootState} from '../root-types';

const selectCart:Selector<IRootState, ICartState> = (state:IRootState) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart:ICartState) => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], (cart:ICartState) => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems:ICartItem[]) => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity!, 0));

export const selectCartTotal = createSelector([selectCartItems], (cartItems:ICartItem[]) => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity! * cartItem.price, 0));