import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, breakpoints } from 'styles/vars';

export const StyledNavbar = styled.nav`
    margin: 0 auto;
    height: 100px;

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
`;

const LinkStyles = css`
    margin: 0 20px;

    position: relative;

    color: ${colors.active.white};

    font-size: 1.8rem;

    transition: color .4s, font-size .1s;

    &::after {
        content: "";

        height: 60px;
        width: 60px;

        position: absolute;
        top: 200%;
        left: 50%;
        transform: translateX(-50%);

        clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
        background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
        background-blend-mode: screen;

        transition: top .4s;
    }

    & .active::after {
        top: 50%;
    }

    &:hover {
        color: ${colors.hover.white};
    }

    &:active,
    & .active {
        color: ${colors.white};
    }

    @media only screen and (min-width: ${breakpoints.mobile}) {
        font-size: 2.6rem;
    }
`;

export const NavbarLink = styled(NavLink)`
    ${LinkStyles};
`;

export const NavbarAnchor = styled.a`
    ${LinkStyles};
`;