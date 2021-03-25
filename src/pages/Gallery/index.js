import React from 'react';
import data from 'data_gallery.json';

import { Library, Song, StyledGallery } from './style';
import { Title } from 'components/Title';
import { Paragraph } from 'components/Paragraph';

function Gallery() {
    return (
        <StyledGallery>
            <Title align="center">
                Mis canciones
            </Title>

            <Paragraph align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt auctor nunc non pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.
            </Paragraph>

            <Library>
                {data.map(({ id, href, src }) => (
                    <Song 
                        key={id} 
                        href={href} 
                        src={src} 
                        target="_blank" 
                    />
                ))}
            </Library>
        </StyledGallery>
    );
}

export default Gallery;
