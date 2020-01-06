import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {IDirectoryItem} from '../../redux/directory/directory.types';
import {IRootState} from '../../redux/root-types';

import {DirectoryContainer} from './directory.styles';
import MenuItem from '../menu-item/menu-item.component';

interface mapStateToPropsInterface {
    sections:IDirectoryItem[];
}
const mapStateToProps = createStructuredSelector<IRootState, mapStateToPropsInterface>({
	sections: selectDirectorySections
});

const connector = connect(
    mapStateToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type DirectoryProps = PropsFromRedux & React.HTMLProps<HTMLElement>;

export const Directory:React.FC<DirectoryProps> = ({sections}) => (
    <DirectoryContainer className="directory-menu">
        {
            sections.map( ({id, ...otherSectionProps}:IDirectoryItem) => (
                <MenuItem key={id} {...otherSectionProps} className="menu-item" />
            ))
        }

    </DirectoryContainer>
)

export default connector(Directory);