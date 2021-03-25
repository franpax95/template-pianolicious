import React from 'react';
import { StyledContact, Form } from './style';
import { Title } from 'components/Title';
import { Input, TextArea } from 'components/Input';
import { Button } from 'components/Button';

function Contact() {
    return (
        <StyledContact>
            <Title align="center">¡Contáctame!</Title>

            <Form>
                <Input placeholder="Nombre" />
                <TextArea placeholder="Mensaje" />
                <Button>Enviar mensaje</Button>
            </Form>
        </StyledContact>
    );
}

export default Contact;