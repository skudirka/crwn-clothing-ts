import {
    IUser,
    TypeEmailSignInStartPayload,
    TypeSignUpStartPayload,
    TypeSignUpSuccessPayload,
    GOOGLE_SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_START,
    CHECK_USER_SESSION,
    SIGN_OUT_START,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from './user.types';

export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user:IUser) => ({
    type: SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error:string) => ({
    type: SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = (emailAndPassword:TypeEmailSignInStartPayload) => ({
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS
});

export const signOutFailure = (error:string) => ({
    type: SIGN_OUT_FAILURE,
    payload: error
});


export const signUpStart = (newUserCredentials:TypeSignUpStartPayload) => ({
    type: SIGN_UP_START,
    payload: newUserCredentials
});

export const signUpSuccess = ({user, additionalData}:TypeSignUpSuccessPayload) => ({
    type: SIGN_UP_SUCCESS,
    payload: {user, additionalData}
});

export const signUpFailure = (error:string) => ({
    type: SIGN_UP_FAILURE,
    payload: error
});