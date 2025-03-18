import styled from "styled-components"
import { Theme } from "../../../../styles/Theme";

type SkillPropsType = {
    title: string
    text: string
}

export const Skill = (props: SkillPropsType) => {
    return (
            <StyledSkill>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 325px;

`

const SkillTitle = styled.h4`
    font-family: "Epilogue", sans-serif;
    font-weight: 300;
    font-size: 30px;
    color: ${Theme.colors.mainFn};
`

const SkillText = styled.p`
    font-family: "Epilogue", sans-serif;
    font-weight: 200;
    font-size: 18px;
    color: ${Theme.colors.mainFn};
`
