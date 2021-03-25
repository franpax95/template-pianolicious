import React from 'react';
import { StyledInput, StyledTextArea } from './style';

export const Input = ({ type = "text", onChange, value, placeholder }) => (
    <StyledInput type={type} onChange={onChange} value={value} placeholder={placeholder} />
);

export const TextArea = ({ onChange, value, placeholder }) => (
    <StyledTextArea onChange={onChange} value={value} placeholder={placeholder}></StyledTextArea>
);
