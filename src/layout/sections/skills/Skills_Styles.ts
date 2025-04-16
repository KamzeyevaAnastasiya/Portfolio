import styled from "styled-components"
import { font } from "../../../styles/Common"
import { Theme } from "../../../styles/Theme"

const Skills = styled.section`
    padding: 100px 40px;
    position: relative;
`

const List = styled.ol`
    list-style-type: none;
    counter-reset: item;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 5px;
`

const Li = styled.li`
    margin-left: 115px;
    position: relative;
    margin-bottom: 60px;

    &::before {
        content: '0' counter(item) '.'; 
        ${font({family: "'Epilogue', sans-serif", weight: 100, Fmax: 70, Fmin: 45})};
        counter-increment: item;
        color: ${Theme.colors.mainFn};
        position: absolute;
        top: 7px;
        left: -45%;
        transform: translateX(50%);
    }

    @media ${Theme.media.mobile} {
        margin-left: 80px;
        margin-bottom: 40px;
    }
`

const Skill = styled.div`
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

export const S = {
    Skills,
    List,
    Li,
    Skill,
    SkillTitle,
    SkillText,
}