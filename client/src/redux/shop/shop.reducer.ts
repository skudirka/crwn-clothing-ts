import {IShopState, TypeShopAction, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE} from './shop.types';

const INITAL_STATE:IShopState = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITAL_STATE, action:TypeShopAction):IShopState => {
    switch(action.type){
        
        case FETCH_COLLECTIONS_START :
            return {
                ...state,
                isFetching: true
            }

        case FETCH_COLLECTIONS_SUCCESS :
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case FETCH_COLLECTIONS_FAILURE :
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        
        default :
            return state;
    }
};

export default shopReducer;