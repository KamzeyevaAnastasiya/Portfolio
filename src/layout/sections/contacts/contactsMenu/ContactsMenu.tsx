import styled from "styled-components"
import { Theme } from "../../../../styles/Theme";

export const ContactsMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledContactsMenu>
            <ul>
                {props.menuItems.map((item:string, index:number)=>{
                    return <li key={index}>
                        <Link href="">{item}</Link>
                    </li>
                })}
            </ul>
        </StyledContactsMenu>
    );
};

const StyledContactsMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        margin-top: 20px;
    }
`

const Link = styled.a`
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.secondaryFn};
`