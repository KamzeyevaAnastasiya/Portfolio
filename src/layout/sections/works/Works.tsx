import {FlexWrapper} from "../../../components/FlexWrapper"
import {Work} from "./work/Work"
import tmdbImg from '../../../assets/images/proj-1.webp'
import catchTheGoogleImg from '../../../assets/images/proj-2.webp'
import todoListImg from '../../../assets/images/proj-3.webp'
import {Container} from "../../../components/Container"
import {S} from "./Works_Styles"
import React from "react"
import {Fade} from "react-awesome-reveal"

const worksData = [
    {
        src: tmdbImg,
        category: "TMDB Movies",
        titlePart1: "A Movie App_",
        titlePart2: "Explore, Search & Discover",
        text: "A responsive movie application built with React and TypeScript. Browse movies by category, search and filter titles, explore detailed movie information, manage favorites, and enjoy a smooth user experience with loading states and centralized error handling.",
        demoUrl: "https://github.com/KamzeyevaAnastasiya/tmdb-kinopoisk",
    },
    {
        src: catchTheGoogleImg,
        category: "Catch The Google",
        titlePart1: "A Multiplayer Game_",
        titlePart2: "Catch the Moving Google",
        text: "A browser-based multiplayer game where two players compete to catch a moving Google icon. Built with JavaScript and WebSockets for real-time game synchronization, with configurable game settings and keyboard controls.",
        demoUrl: "https://github.com/KamzeyevaAnastasiya/CatchTheGoogle",
    },
    {
        src: todoListImg,
        category: "ToDo List",
        titlePart1: "A Task Manager_",
        titlePart2: "Organize Your Daily Tasks",
        text: "A task management application built with React and TypeScript. The project focuses on reusable components, structured state management, and creating a clean and responsive user interface.",
        demoUrl: "https://github.com/KamzeyevaAnastasiya/ToDoList",
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
                                      text={w.text}
                                      demoUrl={w.demoUrl}/>
                            )
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};