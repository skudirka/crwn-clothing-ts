import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import {IRootState} from '../../redux/root-types';
import {ICartItem} from '../../redux/cart/cart.types';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from './checkout.styles';

interface mapStateToPropsInterface {
    cartItems:ICartItem[];
    total:number;
}
const mapStateToProps = createStructuredSelector<IRootState, mapStateToPropsInterface>({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const connector = connect(
    mapStateToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CheckoutPageProps = PropsFromRedux & {};

export const CheckoutPage:React.FC<CheckoutPageProps> = ({cartItems, total}) => (
    <CheckoutPageContainer className="checkout-page">
        <CheckoutHeaderContainer className="checkout-header">
            <HeaderBlockContainer className="header-block">
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer className="header-block">
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer className="header-block">
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer className="header-block">
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer className="header-block">
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <TotalContainer className="total">TOTAL: ${total}</TotalContainer>
        <WarningContainer className="test-warning">
            *Please use the following test credit card for payments* <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);



export default connector(CheckoutPage);