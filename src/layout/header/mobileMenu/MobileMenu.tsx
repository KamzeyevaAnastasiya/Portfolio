import styled, { css } from "styled-components"
import { Theme } from "../../../styles/Theme";

export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            
            <MobileMenuPopup isOpen={true}>
                <ul>
                {props.menuItems.map((item:string, index:number)=>{
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${Theme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
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
            position: absolute;transform: translateY(5px);


            ${props => props.isOpen && css<{isOpen: boolean}> `
            transform: rotate(45deg) translateY(0);
            background-color: ${Theme.colors.burgerOpenCr};
            width: 22px;
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${Theme.colors.burgerBg};
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 99999;
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

`

const ListItem = styled.li`
    
`

const Link = styled.a`
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.primaryFn};
`