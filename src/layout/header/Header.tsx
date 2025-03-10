import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = ["Projects", "About", "Digital Assets"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <FlexWrapper justify={"space-around"} align={"center"}>
                        <Menu menuItems={items}/>
                        <Button>Let’s Talk</Button>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #b8f3b7;
`

const Button = styled.button`
    background-color: #2d2c2c;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #fff;
    margin-left: 32px;
`