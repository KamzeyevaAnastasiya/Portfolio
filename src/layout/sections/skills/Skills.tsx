import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Skill } from "./skill/Skill"

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper wrap={"wrap"}>
            <Skill title={"React"}
            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
            
            <Skill title={"Styled Components"}
            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
            
            <Skill title={"Figma"}
            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
            
            <Skill title={"HTML"}
            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
            
            <Skill title={"CSS"}
            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
            
            <Skill title={"TypeScript"}
            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #eef893;
    min-height: 100vh;
`