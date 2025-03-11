import styled from "styled-components"
import { Theme } from "../../../styles/Theme";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item:string, index:number)=>{
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
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