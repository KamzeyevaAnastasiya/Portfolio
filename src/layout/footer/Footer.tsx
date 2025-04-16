import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";
import { Icon } from "../../components/icon/Icon";

const socialData = [
    {
        iconId:"facebook",
    },
    {
        iconId:"instagram",
    },
    {
        iconId:"twitter",
    },
    {
        iconId:"linkediIn",
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
                                <S.SocialLink>
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