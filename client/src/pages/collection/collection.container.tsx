import {createStructuredSelector} from 'reselect';
import {connect, ConnectedProps} from 'react-redux';
import {compose} from 'redux';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {IRootState} from '../../redux/root-types';

interface mapStateToPropsInterface {
    isLoading:boolean;
}
const mapStateToProps = createStructuredSelector<IRootState, mapStateToPropsInterface>({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const connector = connect(
    mapStateToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CollectionPageProps = PropsFromRedux & {};

const CollectionPageContainer = compose(
    connector,
    WithSpinner
)(CollectionPage) as React.FC<CollectionPageProps>;

export default CollectionPageContainer;