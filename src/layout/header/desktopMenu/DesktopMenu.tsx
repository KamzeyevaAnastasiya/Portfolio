import { S } from "../Header_Styles";

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

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>
                        <S.DesktopLink href={`#${item.href}`}>{item.title}</S.DesktopLink>
                    </li>
                })}
            </ul>
        </S.DesktopMenu>
    );
};