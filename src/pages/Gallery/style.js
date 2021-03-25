import styled from 'styled-components';
import { breakpoints } from 'styles/vars';

export const StyledGallery = styled.section`
    width: 100%;
    padding: 5rem 2rem;
`;

export const Library = styled.article`
    width: 100%;
    padding: 3rem 1.5rem;

    display: flex;
    gap: 1.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const Song = styled.a`
    width: 90px;
    height: 80px;

    border-radius: 5px;
    background-image: url("${props => props.src || ''}");
    background-size: cover;
    background-position: center center;

    transition: box-shadow .3s, width .3s, height .3s;

    &:hover {
        box-shadow: 0px 10px 15px 10px rgba(0,0,0,0.2);
    }

    @media only screen and (min-width: ${breakpoints.mobile}) {
        width: 110px;
        height: 100px;
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        width: 130px;
        height: 120px;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
        width: 150px;
        height: 140px;
    }
`;
