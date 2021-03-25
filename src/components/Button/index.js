import React from 'react';
import { StyledButton } from './style';

export const Button = ({ onClick, children }) => <StyledButton onClick={onClick}>{children}</StyledButton>;
