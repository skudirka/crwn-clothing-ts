import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {CartIconContainer, ShoppingIcon, ItemCountContainer} from './cart-icon.styles';

const mapStateToProps = createStructuredSelector<{itemCount:number}, {}>({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = {
    toggleCartHidden
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CartIconProps = PropsFromRedux & {
    itemCount?:number;
}

export const CartIcon:React.FC<CartIconProps> = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCountContainer className="item-count">{itemCount}</ItemCountContainer>
    </CartIconContainer>
);

export default connector(CartIcon);