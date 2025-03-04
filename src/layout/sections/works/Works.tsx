import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import healthImg from '../../../assets/images/proj-1.webp'
import fashionImg from '../../../assets/images/proj-2.webp'
import barbequeImg from '../../../assets/images/proj-3.webp'

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>MY PROJECTS</SectionTitle>
            <FlexWrapper direction={"column"}>
                <Work src={healthImg} 
                category={"Mental Health"} 
                title={"A Case Study_Find Peace in Meditation"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}/>
                
                <Work src={fashionImg} 
                category={"Fashion Show"} 
                title={"A Case Study_Enjoy Fashion Shows From Home"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}/>
                
                <Work src={barbequeImg} 
                category={"Barbeque"} 
                title={"Branding_Chicken Barbeque Never Goes Wrong"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #b2ebf1;
`