import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {addItem, removeItem, clearItemFromCart} from '../../redux/cart/cart.actions';
import {ICartItem} from '../../redux/cart/cart.types';

import {
    CheckoutItemContainer,
    ImageContainer,
    LabelContainer,
    QuantityContainer,
    ValueContainer,
    ButtonContainer,
    RemoveButtonContainer
} from './checkout-item.styles';


const mapDispatchToProps = {
    addItem: (item:ICartItem) => (addItem(item)),
    removeItem: (item:ICartItem) => (removeItem(item)),
    clearItem: (item:ICartItem) => (clearItemFromCart(item))
};

const connector = connect(
    null,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CheckoutItemProps = PropsFromRedux & {
    cartItem:ICartItem;
    clearItem(item:ICartItem):void;
    addItem(item:ICartItem):void;
    removeItem(item:ICartItem):void;
}

export const CheckoutItem:React.FC<CheckoutItemProps> = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity} = cartItem; 
    return (
        <CheckoutItemContainer className="checkout-item">
            <ImageContainer className="image-container">
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <LabelContainer className="name">{name}</LabelContainer>
            <QuantityContainer className="quantity">
                <ButtonContainer className="arrow remove" onClick={() => removeItem(cartItem)}>&#10094;</ButtonContainer>
                <ValueContainer className="value">{quantity}</ValueContainer>
                <ButtonContainer className="arrow add" onClick={() => addItem(cartItem)}>&#10095;</ButtonContainer>
            </QuantityContainer>
            <LabelContainer className="price">${price}</LabelContainer>
            <RemoveButtonContainer className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
};

export default connector(CheckoutItem);