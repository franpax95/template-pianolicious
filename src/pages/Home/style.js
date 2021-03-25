import styled, { css } from 'styled-components';
import { breakpoints } from 'styles/vars';
import { HomeImage, HomeImageMobile } from 'utils/images';

/** css trick to set same height in everyone */
const heightTrick = css`
    min-height: 80vh;
    min-height: calc(90vh - 150px);
    height: 100%;
`;

export const StyledHome = styled.section`
    ${heightTrick};
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    @media only screen and (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const Article = styled.article`
    min-height: 40vh;
    width: 100%;
    padding: 2rem;

    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    @media only screen and (min-width: ${breakpoints.tablet}) {
        ${heightTrick};
        width: 60%;
    }
`;

export const Image = styled.div`
    min-height: 30vh;
    width: 100%;

    background-image: url("${HomeImageMobile}");
    background-size: cover;
    background-position: center center;

    @media only screen and (min-width: ${breakpoints.tablet}) {
        ${heightTrick};
        width: 40%;
        background-image: url("${HomeImage}");
    }
`;
