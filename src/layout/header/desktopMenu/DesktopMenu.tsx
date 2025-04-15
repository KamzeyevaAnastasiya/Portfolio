import { S } from "../Header_Styles";

export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.DesktopMenu>
            <ul>
                {props.menuItems.map((item:string, index:number)=>{
                    return <li key={index}>
                        <S.DesktopLink href="">{item}</S.DesktopLink>
                    </li>
                })}
            </ul>
        </S.DesktopMenu>
    );
};