import { S } from "../Skills_Styles";

type SkillPropsType = {
    title: string
    text: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
            <S.Skill>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.text}</S.SkillText>
            </S.Skill>
    );
};
