import styled from "styled-components"
import { ContactsMenu } from "./contactsMenu/ContactsMenu"
import { Logo } from "../../../components/logo/Logo"
import { FlexWrapper } from "../../../components/FlexWrapper"

const contactsItems = ["Projects", "About", "Digital Assets"]

export const Contacts = () => {
    return (
        <StyledContacts>
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
                    <Text>By subscribing you agree to with our Privacy Policy</Text>
                </div>
            </FlexWrapper>

        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #c3f0e6;
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
`

const Field = styled.input`
    
`

const Title = styled.h3`
    
`

const Text = styled.p`
    
`

const Button = styled.button`
    
`