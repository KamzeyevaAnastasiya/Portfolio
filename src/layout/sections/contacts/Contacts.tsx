import {ContactsMenu} from "./contactsMenu/ContactsMenu"
import {Logo} from "../../../components/logo/Logo"
import {FlexWrapper} from "../../../components/FlexWrapper"
import {Container} from "../../../components/Container"
import {S} from "./Contacts_Styles"
import React, {ElementRef, type FormEvent, useRef} from "react"
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_kjyfy1k', 'template_5hz1uu1', form.current, {
                publicKey: 'rcjAvdEfDEUslFIqD',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current?.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <S.Contacts id={"talk"}>
            <Container>
                <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                    <S.LogoWrapper>
                        <Logo/>
                        <ContactsMenu/>
                    </S.LogoWrapper>
                    <div>
                        <S.Title>Subscribe to my emailing list</S.Title>
                        <S.StyledForm ref={form} onSubmit={sendEmail}>
                            <S.Field placeholder={"Enter your email"} name={'message'}/>
                            <S.Button>Subscribe</S.Button>
                        </S.StyledForm>
                        <S.Text>By subscribing you agree to with our <a href="">Privacy Policy</a></S.Text>
                    </div>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};