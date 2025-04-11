import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "../../layout/header/headerMenu/HeaderMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { font } from "../../styles/Common";

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