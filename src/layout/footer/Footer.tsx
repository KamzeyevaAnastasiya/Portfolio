import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";
import {Icon} from "../../components/icon/Icon";

const socialData = [
    {
        iconId: "facebook",
        to: '#',
    },
    {
        iconId: "instagram",
        to: '#',
    },
    {
        iconId: "telegram",
        to: 'https://t.me/anastasiya_kamzeeva',
    },
    {
        iconId: "linkedin",
        to: 'https://www.linkedin.com/in/anastasia-kamzeyeva-3964961ba',
    }
]

export const Footer = () => {
    return (
        <S.Footer id={"digital assets"}>
            <FlexWrapper justify={"space-between"}>
                <S.Copyright>2025 Anastasiya Kamzeyeva. All rights reserved.</S.Copyright>
                <S.SocialList>
                    {socialData.map((s, index) => {
                        return (
                            <li key={index}>
                                <S.SocialLink href={s.to} target="_blank" rel="noopener noreferrer">
                                    <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </li>
                        )
                    })}
                </S.SocialList>
            </FlexWrapper>
        </S.Footer>
    );
};