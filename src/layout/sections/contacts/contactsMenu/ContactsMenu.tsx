import { S } from "../Contacts_Styles";

export const ContactsMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.ContactsMenu>
            <ul>
                {props.menuItems.map((item:string, index:number)=>{
                    return <li key={index}>
                        <S.Link href="">{item}</S.Link>
                    </li>
                })}
            </ul>
        </S.ContactsMenu>
    );
};