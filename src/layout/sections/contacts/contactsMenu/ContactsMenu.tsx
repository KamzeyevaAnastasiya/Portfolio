import { S } from "../Contacts_Styles";

const items = [
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Digital Assets",
        href: "digital assets"
    },
]

export const ContactsMenu: React.FC = () => {
    return (
        <S.ContactsMenu>
            <ul>
                {items.map((item, index)=>{
                    return <li key={index}>
                        <S.Link href={`#${item.href}`}>{item.title}</S.Link>
                    </li>
                })}
            </ul>
        </S.ContactsMenu>
    );
};