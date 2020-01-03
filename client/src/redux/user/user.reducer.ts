import {
    IUserState,
    TypeUserAction,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_UP_FAILURE
} from './user.types';

export const INITIAL_STATE:IUserState = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action:TypeUserAction):IUserState => {
    switch( action.type ){
        
        case SIGN_IN_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };

        case SIGN_OUT_SUCCESS :
            return {
                ...state,
                currentUser: null,
                error: null
            };

        case SIGN_IN_FAILURE :
        case SIGN_OUT_FAILURE :
        case SIGN_UP_FAILURE :
            return {
                ...state,
                error: action.payload
            };

        default :
            return state;
    }
};

export default userReducer;