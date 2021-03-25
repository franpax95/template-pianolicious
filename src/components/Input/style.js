import styled, { css } from 'styled-components';
import { breakpoints, fonts, colors } from 'styles/vars';


const commonCSS = css`
    padding: 2px;

    border: none;
    border-radius: 5px;
    color: ${colors.fonts.secondary};

    font-size: ${fonts.mobile.md};

    transition: padding .1s, font-size .1s;

    @media only screen and (min-width: ${breakpoints.mobile}) {
        padding: 4px;
        font-size: ${fonts.tablet.md};
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        padding: 5px;
        font-size: ${fonts.desktop.md};
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
        padding: 6px;
    }
`;

export const StyledInput = styled.input`
    ${commonCSS};
`;

export const StyledTextArea = styled.textarea`
    ${commonCSS};
    height: 100px;
    resize: none;
`;
