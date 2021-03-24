import React from 'react';
import { BackgroundGradient, BackgroundImage, Content, StyledLayout } from './style';

import Navbar from 'components/Navbar';

function Layout({ children }) {
    return (
        <StyledLayout>
            <BackgroundImage />

            <BackgroundGradient />

            <Navbar />
            
            <Content>
                {children}
            </Content>
        </StyledLayout>
    );
}

export default Layout;