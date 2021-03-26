import React from 'react';
import { StyledButton } from './style';

export const Button = ({ type="button", onClick, children }) => <StyledButton type={type} onClick={onClick}>{children}</StyledButton>;