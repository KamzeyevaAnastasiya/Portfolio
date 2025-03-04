import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const items = ["Projects", "About", "Digital Assets"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <Button>Let’s Talk</Button>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #b8f3b7;
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    background-color: #2d2c2c;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #fff;
`