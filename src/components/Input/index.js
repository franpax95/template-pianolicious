import React from 'react';
import { StyledInput, StyledTextArea } from './style';

export const Input = ({ type = "text", name, onChange, value, placeholder, autoComplete = true }) => (
    <StyledInput 
        type={type} 
        onChange={onChange} 
        value={value} 
        name={name} 
        placeholder={placeholder} 
        autoComplete={autoComplete === true ? "on" : "off"}
    />
);

export const TextArea = ({ onChange, name, value, placeholder }) => (
    <StyledTextArea onChange={onChange} value={value} name={name} placeholder={placeholder}></StyledTextArea>
);
