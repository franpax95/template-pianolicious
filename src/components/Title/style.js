import styled, { css } from 'styled-components';
import { breakpoints, colors, fonts } from 'styles/vars';

const commonCSS = css`
    text-align: ${props => props.align || "left"};
    transition: font-size 1s;
`;

export const StyledTitle = styled.h1`
    ${commonCSS};
    color: ${colors.fonts.primary};
    font-size: ${fonts.mobile.lg};
    font-weight: 700;

    @media only screen and (min-width: ${breakpoints.mobile}) {
        font-size: ${fonts.tablet.lg};
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        font-size: ${fonts.desktop.lg};
    }
`;

export const StyledSubTitle = styled.h2`
    ${commonCSS};
    color: ${colors.fonts.secondary};
    font-size: ${fonts.mobile.md};
    font-weight: 500;

    @media only screen and (min-width: ${breakpoints.mobile}) {
        font-size: ${fonts.tablet.md};
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        font-size: ${fonts.desktop.md};
    }
`;