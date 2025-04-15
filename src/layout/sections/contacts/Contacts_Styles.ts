import styled from "styled-components"
import { Theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Contacts = styled.section`
    padding: 100px 200px;
`

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 360px;
    width: 100%;

    @media ${Theme.media.desktop} {
        flex-direction: row;
    }

    @media ${Theme.media.mobile} {
        flex-direction: column;
    }
`

const Title = styled.h5`
    font-family: "Epilogue", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.secondaryFn};
    margin-top: 12px;

    @media ${Theme.media.tablet} {
        margin-top: 26px;
    }
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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

    @media ${Theme.media.mobile} {
        max-width: 328px;
        width: 100%;
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
    cursor: pointer;
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

const ContactsMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        margin-top: 20px;

        @media ${Theme.media.desktop} {
        }

        @media ${Theme.media.desktop} {
            gap: 40px;
            margin-left: 40px;
        }

        @media ${Theme.media.mobile} {
            gap: 28px;
            margin-top: 10px;
            margin-left: 0;
        }
    }
`

const Link = styled.a`
    ${font({family: "'Epilogue', sans-serif", weight: 400, lineHeight: 1.5,  Fmax: 16, Fmin: 14})};
    color: ${Theme.colors.secondaryFn};
`

export const S = {
    Contacts,
    LogoWrapper,
    Title,
    StyledForm,
    Field,
    Button,
    Text,
    ContactsMenu,
    Link,
}