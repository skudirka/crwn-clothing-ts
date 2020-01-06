import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

//import './header.styles.scss';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selector';

import {signOutStart} from '../../redux/user/user.actions';
import {IRootState} from '../../redux/root-types';
import {IUser} from '../../redux/user/user.types';

interface mapStateToPropsInterface {
    currentUser:IUser | null | undefined;
}

const mapStateToProps = createStructuredSelector<IRootState, mapStateToPropsInterface>({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = {
    signOutStart
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type HeaderProps = PropsFromRedux & {}

export const Header:React.FC<HeaderProps> = ({currentUser, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            {
                currentUser ? 
                    <OptionLink to="#" as="div" className="sign-out" onClick={signOutStart}>SIGN OUT</OptionLink>
                : 
                <OptionLink to="/signin" className="sign-in">SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        <CartDropdown />
    </HeaderContainer>
);

export default connector(Header);