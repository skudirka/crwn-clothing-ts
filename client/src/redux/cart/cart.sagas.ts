import {all, call, takeLatest, put, select} from 'redux-saga/effects';

import {SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS, ISignInSuccess} from '../user/user.types';
import {selectCurrentUser} from '../user/user.selector'

import {
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_CART
} from './cart.types';
import {clearCart, setCartFromDB} from './cart.actions';
import {selectCartItems} from './cart.selectors';

import {getUserCartRef} from '../../firebase/firebase.utils';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}


export function* getUserCartFromDB({ payload: user }:ISignInSuccess) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromDB(cartSnapshot.data().cartItems));
}

export function* onUserSignIn() {
    yield takeLatest(SIGN_IN_SUCCESS, getUserCartFromDB);
}


export function* updateCartInDB() {
    
    // first check if user is authenticated
    const user = yield select(selectCurrentUser);
    if( user ){
        try {
            const cartRef = yield getUserCartRef(user.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({cartItems});
        } catch(error){
            console.log(error);
        }
    }
}

export function* onCartUpdate() {
    yield takeLatest([
        ADD_ITEM,
        REMOVE_ITEM,
        CLEAR_CART
    ], updateCartInDB);
}


export function* cartSagas() {
    yield(all([
        call(onSignOutSuccess),
        call(onUserSignIn),
        call(onCartUpdate)
    ]));
}