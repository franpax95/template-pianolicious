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
                <Input name="name" placeholder="Nombre" autoComplete={false} />
                <Input name="email" type="Email" placeholder="Email" autoComplete={false} />
                <Input name="subject" placeholder="Asunto" autoComplete={false} />
                <TextArea name="message" placeholder="Mensaje" />
                <Button type="submit">Enviar mensaje</Button>
            </Form>
        </StyledContact>
    );
}

export default Contact;
