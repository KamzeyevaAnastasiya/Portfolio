import { ContactsMenu } from "./contactsMenu/ContactsMenu"
import { Logo } from "../../../components/logo/Logo"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { S } from "./Contacts_Styles"
import React from "react"

const contactsItems = ["Projects", "About", "Digital Assets"]

export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={"talk"}>
            <Container>
                <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                    <S.LogoWrapper>
                        <Logo/>
                        <ContactsMenu menuItems={contactsItems}/>
                    </S.LogoWrapper>
                    <div>
                        <S.Title>Subscribe to my emailing list</S.Title>
                        <S.StyledForm>
                            <S.Field placeholder={"Enter your email"}/>
                            <S.Button>Subscribe</S.Button>
                        </S.StyledForm>
                        <S.Text>By subscribing you agree to with our <a href="">Privacy Policy</a></S.Text>
                    </div>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};