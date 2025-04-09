import styled from "styled-components"
import { Theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

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
    
    @media ${Theme.media.tablet} {
        width: 280px;
    }

    @media ${Theme.media.mobile} {
        width: 220px;
    }
`

const SkillTitle = styled.h4`
    ${font({family: "'Epilogue', sans-serif", weight: 300, Fmax: 30, Fmin: 25})};
    color: ${Theme.colors.mainFn};
    margin-bottom: 5px;
`

const SkillText = styled.p`
    ${font({family: "'Epilogue', sans-serif", weight: 200, Fmax: 18, Fmin: 14})};
    color: ${Theme.colors.mainFn};
`
