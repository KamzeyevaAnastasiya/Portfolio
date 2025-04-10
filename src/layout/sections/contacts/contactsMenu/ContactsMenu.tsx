import styled from "styled-components"
import { Theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

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

        @media ${Theme.media.desktop} {
        }

        @media ${Theme.media.desktop} {
            gap: 40px;
            margin-left: 40px;
        }

        @media ${Theme.media.mobile} {
            gap: 28px;
            margin-top: 10px;
            margin-left: 0;
        }
    }
`

const Link = styled.a`
    ${font({family: "'Epilogue', sans-serif", weight: 400, lineHeight: 1.5,  Fmax: 16, Fmin: 14})};
    color: ${Theme.colors.secondaryFn};
`