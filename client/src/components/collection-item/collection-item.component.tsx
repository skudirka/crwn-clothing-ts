import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';
import {ICartItem} from '../../redux/cart/cart.types';

import {
    CollectionItemContainer, 
    AddButton, 
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    BackgroundImage
} from './collection-item.styles';

const mapDispatchToProps = {
    addItem
};

const connector = connect(
    null,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CollectionItemProps = PropsFromRedux & {
    item:ICartItem;
} & React.HTMLProps<HTMLElement>;

export const CollectionItem:React.FC<CollectionItemProps> = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer className="collection-item">
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer className="collection-footer">
                <NameContainer className="name">{name}</NameContainer>
                <PriceContainer className="price">{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}> Add to cart </AddButton>
        </CollectionItemContainer>
    );
};

export default connector(CollectionItem);