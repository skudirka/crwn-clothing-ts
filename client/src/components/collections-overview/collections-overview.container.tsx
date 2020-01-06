import {createStructuredSelector} from 'reselect';
import {connect, ConnectedProps} from 'react-redux';
import {compose} from 'redux';

import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';

import CollectionsOverview from './collections-overview.component';
import WithSpinner, {WithSpinnerProps} from '../with-spinner/with-spinner.component';

import {IRootState} from '../../redux/root-types';

interface mapStateToPropsInterface {
    isLoading:boolean;
}
const mapStateToProps = createStructuredSelector<IRootState, mapStateToPropsInterface>({
    isLoading: selectIsCollectionFetching
});

const connector = connect(
    mapStateToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CollectionsOverviewContainerProps = PropsFromRedux & WithSpinnerProps;

const CollectionsOverviewContainer = compose(
    connector,
    WithSpinner
)(CollectionsOverview) as React.FC<CollectionsOverviewContainerProps>;

export default CollectionsOverviewContainer;