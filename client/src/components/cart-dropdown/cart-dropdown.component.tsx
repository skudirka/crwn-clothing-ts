import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems, selectCartHidden} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ICartItem, TypeCartAction} from '../../redux/cart/cart.types';
import {IRootState} from '../../redux/root-types';

import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    CheckoutButton
} from './cart-dropdown.styles';

interface ownProps extends RouteComponentProps {}

interface mapStateToPropsInterface {
    cartItems:ICartItem[];
    hidden:boolean;
}
const mapStateToProps = createStructuredSelector<IRootState, mapStateToPropsInterface>({
    cartItems: selectCartItems,
    hidden: selectCartHidden
});

const mapDispatchToProps = {
    dispatch: (obj:TypeCartAction) => obj
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CartDropdownProps = PropsFromRedux & ownProps;

export const CartDropdown:React.FC<CartDropdownProps> = ({cartItems, hidden, history, dispatch}:CartDropdownProps) => {
    const openClass = hidden ? '' : 'open';
    return (
    <CartDropdownContainer className={`cart-dropdown ${openClass}`}>
        <CartItemsContainer className="cart-items">
            {
                cartItems.length ? 
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) : (
                    <EmptyMessageContainer className="empty-message">Your cart is empty</EmptyMessageContainer>
                )
            }
        </CartItemsContainer>
        <CheckoutButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CheckoutButton>
    </CartDropdownContainer>
)};

export default withRouter(connector(CartDropdown));