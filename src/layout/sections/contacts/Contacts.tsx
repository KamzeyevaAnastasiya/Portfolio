import styled from "styled-components"
import { ContactsMenu } from "./contactsMenu/ContactsMenu"
import { Logo } from "../../../components/logo/Logo"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { Theme } from "../../../styles/Theme"

const contactsItems = ["Projects", "About", "Digital Assets"]

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper justify="space-between">
                    <div>
                        <Logo/>
                        <ContactsMenu menuItems={contactsItems}/>
                    </div>
                    <div>
                        <Title>Subscribe to my emailing list</Title>
                        <StyledForm>
                            <Field placeholder={"Enter your email"}/>
                            <Button>Subscribe</Button>
                        </StyledForm>
                        <Text>By subscribing you agree to with our <a href="">Privacy Policy</a></Text>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    padding: 80px 108px 64px;
`

const Title = styled.h5`
    font-family: "Epilogue", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.secondaryFn};
    margin-top: 12px;
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin: 16px 0;
`

const Field = styled.input`
    width: 257px;
    border: 1px solid ${Theme.colors.secondaryFn};
    padding: 12px;
    height: 48px;
    background-color: ${Theme.colors.mainFn};
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.secondaryFn};

    &::placeholder {
        color: ${Theme.colors.secondaryFn};
    }

    &:focus-visible {
        outline: 1px solid ${Theme.colors.secondaryFn};
    }
`

const Button = styled.button`
    border: 1px solid ${Theme.colors.secondaryFn};
    padding: 12px 24px;
    width: 127px;
    height: 48px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.secondaryFn};
`

const Text = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: ${Theme.colors.secondaryFn};
    margin-bottom: 12px;

    a {
        text-decoration: underline;
        text-decoration-skip-ink: none;
        color: ${Theme.colors.secondaryFn};
    }
`