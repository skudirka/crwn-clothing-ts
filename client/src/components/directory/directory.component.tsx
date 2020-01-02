import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import {DirectoryContainer} from './directory.styles';
import MenuItem from '../menu-item/menu-item.component';

export const Directory = ({sections}) => (
    <DirectoryContainer className="directory-menu">
        {
            sections.map( ({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} className="menu-item" />
            ))
        }

    </DirectoryContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);