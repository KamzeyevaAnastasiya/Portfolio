import { S } from "../Header_Styles";
import { Icon } from "../../../components/icon/Icon";

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            
            <S.MenuWrapper isOpen={false}>
                <S.MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item:string, index:number)=>{
                        return <li key={index}>
                            <S.LinkWrapper>
                                <S.MobileLink href="">{item}</S.MobileLink>
                            </S.LinkWrapper>
                        </li>
                        })
                    }
                </ul>
                </S.MobileMenuPopup>

                <S.SocialList isOpen={false}>
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