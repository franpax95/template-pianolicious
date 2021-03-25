import styled from 'styled-components';
import { breakpoints, colors, fonts } from 'styles/vars';

export const StyledParagraph = styled.p`
    color: ${colors.fonts.tertiary};
    
    font-size: ${fonts.mobile.sm};
    font-weight: 400;
    text-align: ${props => props.align || "left"};

    transition: font-size 1s;

    @media only screen and (min-width: ${breakpoints.mobile}) {
        font-size: ${fonts.tablet.sm};
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        font-size: ${fonts.desktop.sm};
    }
`;
