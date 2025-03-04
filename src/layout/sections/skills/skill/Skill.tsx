import styled from "styled-components"

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
    width: 33%;
    
`

const SkillTitle = styled.h3`
    
`

const SkillText = styled.p`
    
`