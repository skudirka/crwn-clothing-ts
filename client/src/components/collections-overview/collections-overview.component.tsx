import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import {IShopCollection} from '../../redux/shop/shop.types';

import CollectionPreview from '../collection-preview/collection-preview.component';

import {CollectionsOverviewContainer} from './collections-overview.styles';
import {IRootState} from '../../redux/root-types';

interface mapStateToPropsInterface {
    collections:IShopCollection[];
}
const mapStateToProps = createStructuredSelector<IRootState, mapStateToPropsInterface>({
    collections: selectCollectionsForPreview
});

const connector = connect(
    mapStateToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CollectionsOverviewProps = PropsFromRedux & React.HTMLProps<HTMLElement>;

export const CollectionsOverview:React.FC<CollectionsOverviewProps> = ({collections}) => (
    <CollectionsOverviewContainer className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
);

export default connector(React.memo(CollectionsOverview));