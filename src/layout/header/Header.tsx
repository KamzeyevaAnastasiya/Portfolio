import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "../../layout/header/headerMenu/HeaderMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const items = ["Projects", "About", "Digital Assets"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <FlexWrapper align={"center"} >
                        <HeaderMenu menuItems={items}/>
                        <Button><Link href="">Let’s Talk</Link></Button>
                        <MobileMenu menuItems={items}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${Theme.colors.primaryBg};
    padding: 20px 200px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0%;
    z-index: 99999;
`

const Button = styled.button`
    background-color: ${Theme.colors.primaryFn};
    padding: 8px 20px;
    width: 111px;
    height: 40px;
    margin-left: 32px;

    @media ${Theme.media.tablet} {
        margin-right: 15px;
    }
`

const Link = styled.a`
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${Theme.colors.mainFn};
`