import React from 'react';
import {CollectionPreviewContainer, TitleContainer, PreviewContainer} from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';
import {IShopItem} from '../../redux/shop/shop.types';

type CollectionPreviewProps = {
    title:string;
    items:IShopItem[];
}

const CollectionPreview:React.FC<CollectionPreviewProps> = ({title, items}) => (
    <CollectionPreviewContainer className="collection-preview">
        <TitleContainer className="title">{title.toUpperCase()}</TitleContainer>
        <PreviewContainer className="preview">
            {
                items
                    .filter((item, idx) => idx < 4) // show only 4
                    .map(item => (
                        <CollectionItem key={item.id} item={item} className="collection-item" />
                    ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;