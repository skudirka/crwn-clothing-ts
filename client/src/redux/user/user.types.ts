import firebase from '../../firebase/firebase.utils';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const CHECK_USER_SESSION = 'CHECK_USER_SESSION';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// Data types
export interface IUser extends firebase.User {
    id:string;
    displayName:string;
    email:string;
    createdAt:Date;
}


// State type
export interface IUserState {
    currentUser?: (IUser | null);
    error?:(string | null);
}


// Action types
interface IGoogleSignInStart {
    type: typeof GOOGLE_SIGN_IN_START;
};

export interface ISignInSuccess {
    type: typeof SIGN_IN_SUCCESS;
    payload: IUser;
};

interface ISignInFailure {
    type: typeof SIGN_IN_FAILURE;
    payload: string;
};

interface IEmailSignInStartPayload {
    email:string;
    password:string;
}
interface IEmailSignInStart {
    type: typeof EMAIL_SIGN_IN_START;
    payload: IEmailSignInStartPayload;
};
export type TypeEmailSignInStartPayload = IEmailSignInStartPayload;
export type TypeEmailSignInStartAction = IEmailSignInStart;

interface ICheckUserSession {
    type: typeof CHECK_USER_SESSION;
};

interface ISignOutStart {
    type: typeof SIGN_OUT_START;
};

interface ISignOutSuccess {
    type: typeof SIGN_OUT_SUCCESS;
};

interface ISignOutFailure {
    type: typeof SIGN_OUT_FAILURE;
    payload: string;
};

interface ISignUpStartPayload {
    email:string;
    displayName:string;
    password:string;
}
interface ISignUpStart {
    type: typeof SIGN_UP_START;
    payload: ISignUpStartPayload;
};
export type TypeSignUpStartPayload = ISignUpStartPayload;
export type TypeSignUpStartAction = ISignUpStart;

interface ISignUpSuccessPayload {
    user:IUser;
    additionalData?:{};
}
interface ISignUpSuccess {
    type: typeof SIGN_UP_SUCCESS;
    payload: ISignUpSuccessPayload;
};
export type TypeSignUpSuccessPayload = ISignUpSuccessPayload;
export type TypeSignUpSuccessAction = ISignUpSuccess;

interface ISignUpFailure {
    type: typeof SIGN_UP_FAILURE;
    payload: string;
};

export type TypeUserAction = IGoogleSignInStart | ISignInSuccess  | ISignInFailure  | IEmailSignInStart | ICheckUserSession | 
ISignOutStart | ISignOutSuccess | ISignOutFailure | ISignUpStart | ISignUpSuccess | ISignUpFailure;

const UserActionTypes = {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_START,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    CHECK_USER_SESSION,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
};
export default UserActionTypes;