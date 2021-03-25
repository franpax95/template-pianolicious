import React from 'react';

import { BackgroundGradient, BackgroundImage, Content, StyledLayout } from './style';
import Navbar from 'components/Navbar';

function Layout({ height, children }) {
    return (
        <StyledLayout>
            <BackgroundImage />

            <BackgroundGradient />

            <Navbar />
            
            <Content style={{ height }}>
                {children}
            </Content>
        </StyledLayout>
    );
}

export default Layout;
