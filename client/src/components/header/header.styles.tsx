import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import {Link, LinkProps} from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

type OptionLinkProps = {

} & LinkProps<Link>;
export const OptionLink = styledComponentsTS<OptionLinkProps>(styled(Link))`
    padding: 10px 15px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        padding-left: 8px;
        padding-right: 8px;
    }
`;