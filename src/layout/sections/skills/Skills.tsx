import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Skill } from "./skill/Skill"
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper wrap={"wrap"}>
                    <StyledList>
                        <StyledLi>
                            <Skill title={"React"}
                            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                        </StyledLi>

                        <StyledLi>
                            <Skill title={"Styled Components"}
                            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                        </StyledLi>
                            
                        <StyledLi>
                            <Skill title={"Figma"}
                            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                        </StyledLi>
                            
                        <StyledLi>
                            <Skill title={"HTML"}
                            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                        </StyledLi>
                            
                        <StyledLi>
                            <Skill title={"CSS"}
                            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                        </StyledLi>

                        <StyledLi>
                            <Skill title={"TypeScript"}
                            text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                        </StyledLi>
                    </StyledList>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding: 100px 50px;
`

const StyledList = styled.ol`
    list-style-type: none;
    counter-reset: item;
    display: flex;
    flex-wrap: wrap;
`

const StyledLi = styled.li`
    margin-left: 115px;
    position: relative;
    margin-bottom: 60px;

    &::before {
        content: '0' counter(item) '.'; 
        counter-increment: item;
        font-family: "Epilogue", sans-serif;
        font-weight: 100;
        font-size: 70px;
        color: ${Theme.colors.mainFn};
        position: absolute;
        top: 15px;
        left: -50%;
        transform: translateX(50%);
    }

`
