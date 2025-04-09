import styled from "styled-components"
import { Theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

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

    @media ${Theme.media.tablet} {
        display: none;
    }
`

const ListItem = styled.li`
    
`

const Link = styled.a`
    ${font({family: "'Epilogue', sans-serif", weight: 400, lineHeight: 1.5, Fmax: 16, Fmin: 13})};
    color: ${Theme.colors.primaryFn};
`