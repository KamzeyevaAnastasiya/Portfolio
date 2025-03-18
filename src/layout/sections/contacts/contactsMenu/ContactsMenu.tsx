import styled from "styled-components"

export const ContactsMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledContactsMenu>
            <ul>
                {props.menuItems.map((item:string, index:number)=>{
                    return <li key={index}>
                        <a href="">{item}</a>
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