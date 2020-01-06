import React, {useEffect, lazy, Suspense} from 'react';
import {Route, RouteComponentProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() =>  import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

type TParams = { 
    id?: string | undefined;
    collectionId: string;
};

const mapDispatchToProps = {
    fetchCollectionsStart
};

const connector = connect(
    null,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ShopPageProps = PropsFromRedux & RouteComponentProps<TParams>;

export const ShopPage:React.FC<ShopPageProps> = ({match, fetchCollectionsStart}) => {
    
    useEffect(() => {
        console.log('Fetching collections!')
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);


    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
        </div>
    );
};

export default connector(ShopPage);