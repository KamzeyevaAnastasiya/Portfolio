import styled, { css } from "styled-components"
import { Theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

const Header = styled.header`
    background-color: ${Theme.colors.primaryBg};
    padding: 20px 200px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99999;

    @media ${Theme.media.desktop} {
        padding: 20px 105px;
    }

    @media ${Theme.media.mobile} {
        padding: 20px;
    }
`

const Button = styled.button`
    background-color: ${Theme.colors.primaryFn};
    padding: 8px 20px;
    width: 112px;
    height: 40px;
    margin-left: 32px;

    @media ${Theme.media.tablet} {
        margin-right: 25px;
    }

    @media ${Theme.media.mobile} {
        width: 108px;
        height: 38px;
    }
`

const Link = styled.a`
    ${font({family: "'Epilogue', sans-serif", weight: 400, Fmax: 16, Fmin: 12})};
    color: ${Theme.colors.mainFn};
`

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }
`

const DesktopLink = styled.a`
    ${font({family: "'Epilogue', sans-serif", weight: 400, lineHeight: 1.5, Fmax: 16, Fmin: 13})};
    color: ${Theme.colors.primaryFn};
`

const MobileMenu = styled.nav`
    
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: absolute;
    width: 24px;
    height: 24px;
    top: 36px;
    z-index: 999999;

    span {
        display: block;
        width: 20px;
        height: 2px;
        background-color: ${Theme.colors.burgerCr};

        ${props => props.isOpen && css<{isOpen: boolean}> `
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background-color: ${Theme.colors.burgerCr};
            position: absolute;
            transform: translateY(-5px);

            ${props => props.isOpen && css<{isOpen: boolean}> `
            transform: rotate(-45deg) translateY(0);
            background-color: ${Theme.colors.burgerOpenCr};
            width: 22px;
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background-color: ${Theme.colors.burgerCr};
            position: absolute;
            transform: translateY(5px);

            ${props => props.isOpen && css<{isOpen: boolean}> `
            transform: rotate(45deg) translateY(0);
            background-color: ${Theme.colors.burgerOpenCr};
            width: 22px;
            `}
        }
    }
`
const MenuWrapper = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${Theme.colors.burgerBg};
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        flex-direction: column;
        align-items: center;
    `}
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colors.burgerBg};
    width: 238px;
    height: 179px;
    z-index: 99999;
    display: none;
    margin-top: 25vh;

    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`

const LinkWrapper = styled.div`
    padding: 10px;
    height: 41px;
    width: 238px;
    border-bottom: 1px solid #828282;
    text-align: left;
`

const MobileLink = styled.a`
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: ${Theme.colors.primaryFn};
`

const SocialList = styled.ul<{isOpen: boolean}>`
    display: none;
            
    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        gap: 12px;
        padding: 10px 150px 10px 10px;
        height: 41px;
        width: 238px;
    `}
`

const SocialLink = styled.a`
    color: ${Theme.colors.secondaryFn};
    cursor: pointer;
`

export const S = {
    Header,
    Button,
    Link,
    DesktopMenu,
    DesktopLink,
    MobileMenu,
    BurgerButton,
    MenuWrapper,
    MobileMenuPopup,
    LinkWrapper,
    MobileLink,
    SocialList,
    SocialLink,
}