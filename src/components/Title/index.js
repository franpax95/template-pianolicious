import React from 'react';
import { StyledTitle, StyledSubTitle } from './style';

export const Title = ({ align, children }) => (
    <StyledTitle align={align}>
        {children}
    </StyledTitle>
);

export const SubTitle = ({ align, children }) => (
    <StyledSubTitle align={align}>
        {children}
    </StyledSubTitle>
);