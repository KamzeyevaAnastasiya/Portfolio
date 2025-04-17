import { S } from "../Header_Styles";
import { Icon } from "../../../components/icon/Icon";
import { useState } from "react";

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

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen ) } 
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            
            <S.MenuWrapper isOpen={menuIsOpen} onClick={ () => {setmenuIsOpen(false)} }>
                <S.MobileMenuPopup isOpen={menuIsOpen}>
                <ul>
                    {items.map((item, index)=>{
                        return <li key={index}>
                            <S.LinkWrapper>
                                <S.MobileLink 
                                    to={item.href}
                                    smooth={true}
                                    offset={-80}
                                    >
                                    {item.title}</S.MobileLink>
                            </S.LinkWrapper>
                        </li>
                        })
                    }
                </ul>
                </S.MobileMenuPopup>

                <S.SocialList>
                <li>
                    <S.SocialLink>
                        <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"facebook"}/>
                    </S.SocialLink>
                </li>
                
                <li>
                    <S.SocialLink>
                        <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"instagram"}/>
                    </S.SocialLink>
                </li>
    
                <li>
                    <S.SocialLink>
                        <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"twitter"}/>
                    </S.SocialLink>
                </li>
    
                <li>
                    <S.SocialLink>
                        <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"linkediIn"}/>
                    </S.SocialLink>
                </li>
                </S.SocialList>
            </S.MenuWrapper>
        </S.MobileMenu>
    );
};