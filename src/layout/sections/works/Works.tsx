import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import healthImg from '../../../assets/images/proj-1.webp'
import fashionImg from '../../../assets/images/proj-2.webp'
import barbequeImg from '../../../assets/images/proj-3.webp'
import { Container } from "../../../components/Container"
import { S } from "./Works_Styles"
import React from "react"
import { Fade } from "react-awesome-reveal"

const worksData = [
    {
        src: healthImg,
        category: "Mental Health",
        titlePart1: "A Case Study_",
        titlePart2: "Find Peace in Meditation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
    },
    {
        src: fashionImg,
        category: "Fashion Show",
        titlePart1: "A Case Study_",
        titlePart2: "Enjoy Fashion Shows From Home",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
    },
    {
        src: barbequeImg,
        category: "Barbeque",
        titlePart1: "Branding_",
        titlePart2: "Chicken Barbeque Never Goes Wrong",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works id={"projects"}>
            <Container>
                <S.WorksTitle>MY<br/>PROJECTS</S.WorksTitle>
                <FlexWrapper direction={"column"}>
                    <Fade cascade={true} damping={0.2}>
                        {worksData.map((w, index) => {
                            return (
                                <Work src={w.src} key={index}
                                    category={w.category} 
                                    titlePart1={w.titlePart1}
                                    titlePart2={w.titlePart2}
                                    text={w.text}/>
                            )
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};