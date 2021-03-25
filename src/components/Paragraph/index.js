import React from 'react';
import { StyledParagraph } from './style';

export const Paragraph = ({ align, children }) => <StyledParagraph align={align}>{children}</StyledParagraph>;