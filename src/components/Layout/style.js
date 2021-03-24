import styled from 'styled-components';
import { breakpoints } from 'styles/vars';
import { AppBackground } from 'utils/images';

export const StyledLayout = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BackgroundImage = styled.div`
    z-index: -2;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-attachment: fixed;
    background-image: url("${AppBackground}");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const BackgroundGradient = styled.div`
    z-index: -1;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.7;
    background-attachment: fixed;
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const Content = styled.div`
    width: 100%;
    min-height: 80vh;
    min-height: calc(90vh - 100px);
    margin: 100px auto 10vh auto;

    background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
    background-blend-mode: screen;

    transition: width .5s, height .5s;

    @media only screen and (min-width: ${breakpoints.mobile}) {
        width: 450px;
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        width: 600px;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
        width: 750px;
    }
`;