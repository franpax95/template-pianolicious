import React from 'react';
import { Article, StyledHome, Image } from './style';
import { Title, SubTitle } from 'components/Title';
import { Paragraph } from 'components/Paragraph';

function Home() {
    return (
        <StyledHome>
            <Article>
                <Title>Francisco Javier Navarro García</Title>
                <SubTitle>Tu pianista de confianza</SubTitle>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique.
                </Paragraph>
            </Article>

            <Image />
        </StyledHome>
    );
}

export default Home;
