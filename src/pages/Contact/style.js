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

    & > *[name="name"] { grid-area: name; }
    & > *[name="email"] { grid-area: email; }
    & > *[name="subject"] { grid-area: subject; }
    & > *[name="message"] { grid-area: message; }
    & > button[type="submit"] { grid-area: submit; }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            'name email'
            'subject subject'
            'message message'
            'submit .';
    }
`;
