import React, {useState, FormEvent} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {SignInContainer, SignInTitleContainer, SignInButtonsContainer} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

const mapDispatchToProps = {
    googleSignInStart,
    emailSignInStart: (email:string, password:string) => emailSignInStart({email, password})
};

const connector = connect(
    null,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type SignInProps = PropsFromRedux & {};

export const SignIn:React.FC<SignInProps> = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const {email, password} = userCredentials;

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        emailSignInStart(email, password);
    };

    const handleChange = (e:FormEvent<HTMLInputElement>) => {
        const { value, name } = e.target as HTMLInputElement;

        setCredentials({
            ...userCredentials,
            [name]: value
        });
    };
        
    return (
        <SignInContainer className="sign-in">
            <SignInTitleContainer>I already have an account</SignInTitleContainer>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" label="email" type="email" value={email} handleChange={handleChange} required />
                <FormInput name="password" label="password" type="password" value={password} handleChange={handleChange} required />

                <SignInButtonsContainer className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default connector(SignIn);