import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selectors';

import {CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from './collection.styles';

export const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <CollectionPageContainer className="collection-page">
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} className="collection-item" />
                    ))
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(React.memo(CollectionPage));