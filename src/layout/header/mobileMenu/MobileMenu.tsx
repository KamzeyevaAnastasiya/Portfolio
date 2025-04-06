import styled, { css } from "styled-components"
import { Theme } from "../../../styles/Theme";
import { Icon } from "../../../components/icon/Icon";

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
                            <LinkWrapper>
                                <Link href="">{item}</Link>
                            </LinkWrapper>
                        </ListItem>
                        })
                    }
                </ul>
            </MobileMenuPopup>

            <SocialList isOpen={true}>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"facebook"}/>
                    </SocialLink>
                </SocialItem>
                
                <SocialItem>
                    <SocialLink>
                        <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"instagram"}/>
                    </SocialLink>
                </SocialItem>
    
                <SocialItem>
                    <SocialLink>
                        <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"twitter"}/>
                    </SocialLink>
                </SocialItem>
    
                <SocialItem>
                    <SocialLink>
                        <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"linkediIn"}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
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
        gap: 10px;
    }
`

const ListItem = styled.li`
    
`

const LinkWrapper = styled.div`
    padding: 10px;
    height: 41px;
    width: 238px;
    border-bottom: 1px solid #828282;
    text-align: left;
`

const Link = styled.a`
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: ${Theme.colors.primaryFn};
`

const SocialList = styled.ul<{isOpen: boolean}>`
    position: absolute;
    z-index: 99999;
    display: none;
    top: 250px;
        
    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        gap: 12px;
    `}
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    color: ${Theme.colors.secondaryFn};
    cursor: pointer;
`