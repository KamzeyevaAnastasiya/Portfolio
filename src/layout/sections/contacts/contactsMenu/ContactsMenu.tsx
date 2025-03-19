import styled from "styled-components"

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
    }
`

const Link = styled.a`
    
`