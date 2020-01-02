import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

//import './header.styles.scss';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selector';

import {signOutStart} from '../../redux/user/user.actions';

export const Header = ({currentUser, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            {
                currentUser ? 
                    <OptionLink as="div" className="sign-out" onClick={signOutStart}>SIGN OUT</OptionLink>
                : 
                <OptionLink to="/signin" className="sign-in">SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        <CartDropdown />
    </HeaderContainer>
);

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);