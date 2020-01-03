import {TypeShopAction, IShopCollectionMap, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE} from './shop.types';

/*import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';*/

export const fetchCollectionsStart = ():TypeShopAction => ({
    type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap:IShopCollectionMap):TypeShopAction => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage:string):TypeShopAction => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

/*export const fetchCollectionsStartAsync = () => {
    return dispatch => {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());
  
      collectionRef
        .get()
        .then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
  };*/
  