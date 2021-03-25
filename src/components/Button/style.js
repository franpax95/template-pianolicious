import styled from 'styled-components';
import { breakpoints, colors, fonts } from 'styles/vars';

export const StyledButton = styled.button`
    padding: 1rem 2rem;

    border-radius: 6px;
    background-color: ${colors.primary};
    color: ${colors.white};

    font-size: ${fonts.mobile.md};

    transition: background-color .4s, font-size .4s;

    &:hover {
        background-color: ${colors.hover.primary};
    }

    &:active {
        background-color: ${colors.active.primary};
    }

    @media only screen and (min-width: ${breakpoints.mobile}) {
        font-size: ${fonts.tablet.md};
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        font-size: ${fonts.desktop.md};
    }
`;
