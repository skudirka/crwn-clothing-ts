import React, {ReactElement} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { MenuItemContainer } from './menu-item.styles';

type TParams = { id?: string | undefined; };

type MenuProps = {
    title: string;
    imageUrl: string;
    linkUrl: string;
    size?: string;
} & Omit<React.HTMLProps<ReactElement>, 'size'> & RouteComponentProps<TParams>;

export const MenuItem:React.FC<MenuProps> = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer size={(size ? `${size}` : ``)} className={(size ? `${size} menu-item` : `menu-item`)} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </MenuItemContainer>
);

export default withRouter(MenuItem);