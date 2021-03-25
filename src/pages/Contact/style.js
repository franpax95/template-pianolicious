import styled from 'styled-components';
import { breakpoints } from 'styles/vars';

export const StyledContact = styled.section`
    padding: 5rem 2rem;
`;

export const Form = styled.form`
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    /* justify-content: center;
    align-items: center; */

    @media only screen and (min-width: ${breakpoints.mobile}) {

    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        display: grid;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {

    }
`;
