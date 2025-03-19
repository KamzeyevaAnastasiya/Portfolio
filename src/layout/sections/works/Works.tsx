import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import healthImg from '../../../assets/images/proj-1.webp'
import fashionImg from '../../../assets/images/proj-2.webp'
import barbequeImg from '../../../assets/images/proj-3.webp'
import { Theme } from "../../../styles/Theme"
import { Container } from "../../../components/Container"

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <WorksTitle>MY<br/>PROJECTS</WorksTitle>
                <FlexWrapper direction={"column"}>
                    <Work src={healthImg} 
                    category={"Mental Health"} 
                    titlePart1={"A Case Study_"}
                    titlePart2={"Find Peace in Meditation"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}/>
                    
                    <Work src={fashionImg} 
                    category={"Fashion Show"} 
                    titlePart1={"A Case Study_"} 
                    titlePart2={"Enjoy Fashion Shows From Home"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}/>
                    
                    <Work src={barbequeImg} 
                    category={"Barbeque"} 
                    titlePart1={"Branding_"}
                    titlePart2={"Chicken Barbeque Never Goes Wrong"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    padding: 140px 200px 160px;
`

const WorksTitle = styled.h2`
    font-family: "Epilogue", sans-serif;
    font-weight: 800;
    font-size: 120px;
    line-height: 0.9;
    color: ${Theme.colors.primaryFn};
`