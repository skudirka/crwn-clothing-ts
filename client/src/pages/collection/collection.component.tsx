import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selectors';
import {IShopCollection} from '../../redux/shop/shop.types';
import {IRootState} from '../../redux/root-types';
import { RouteComponentProps } from 'react-router-dom';

import {CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from './collection.styles';

type TParams = { 
    id?: string | undefined;
    collectionId: string;
};
type mapStateToPropsType = RouteComponentProps<TParams> & {
    collection: IShopCollection;
}
const mapStateToProps = (state:IRootState, ownProps:mapStateToPropsType) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

const connector = connect(
    mapStateToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CollectionPageProps = PropsFromRedux & {};

export const CollectionPage:React.FC<CollectionPageProps> = ({collection}) => {
    if(!collection){
        return null;
    }
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

export default connector(React.memo(CollectionPage));