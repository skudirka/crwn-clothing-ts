import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import {CollectionsOverviewContainer} from './collections-overview.styles';

export const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
);

const mapToStateProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapToStateProps)(React.memo(CollectionsOverview));