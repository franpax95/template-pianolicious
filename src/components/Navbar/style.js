import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, breakpoints, fonts } from 'styles/vars';

export const StyledNavbar = styled.nav`
    margin: 0 auto;
    padding: 35px 5rem 0 5rem;
    height: 150px;
    width: fit-content;

    position: absolute;
    left: 0;
    right: 0;

    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    @media only screen and (min-width: ${breakpoints.mobile}) {
        gap: 30px;
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        gap: 40px;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
        gap: 50px;
    }
`;

const LinkStyles = css`
    position: relative;

    color: ${colors.active.white};

    font-size: 2rem;

    transition: color .4s, font-size .1s;

    &::before {
        content: ${props => props.description ? `"${props.description}"` : ""};
        user-select: none;
        pointer-events: none;

        padding: 0 8px;
        height: 38px;

        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        justify-content: center;

        opacity: 0;
        clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 60% 75%, 50% 100%, 40% 75%, 0% 75%);
        background-color: ${colors.black};
        color: ${colors.white};

        font-size: ${fonts.tablet.md};
        text-align: center;
        white-space: nowrap;

        transition: font-size .1s, opacity .4s;
    }

    &:hover::before {
        opacity: 1;
    }

    &::after {
        content: "";
        user-select: none;
        pointer-events: none;

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

    &.active::after {
        top: 50%;
    }

    &:hover {
        color: ${colors.hover.white};
    }

    &:active,
    &.active {
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
