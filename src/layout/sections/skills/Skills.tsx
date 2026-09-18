import {FlexWrapper} from "../../../components/FlexWrapper"
import {Skill} from "./skill/Skill"
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles";
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        title: "React",
        text: "building modern and reusable interfaces using components, hooks and state management"
    },
    {
        title: "Styled Components",
        text: "styling React components with dynamic styles, CSS-in-JS and reusable patterns"
    },
    {
        title: "Figma",
        text: "working with design mockups and design systems: UI analysis and accurate design implementation"
    },
    {
        title: "HTML",
        text: "creating semantic and accessible web page structures using modern HTML5 elements"
    },
    {
        title: "CSS",
        text: "responsive and cross-browser interface styling, working with Flexbox, Grid, animations and modern CSS techniques"
    },
    {
        title: "TypeScript",
        text: "adding type safety to React applications, API data and components for more reliable and maintainable code"
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <FlexWrapper wrap={"wrap"}>
                    <S.List>
                        <Fade cascade={true} damping={0.2}>
                            {skillData.map((s, index) => {
                                return (
                                    <S.Li key={index}>
                                        <Skill title={s.title}
                                               text={s.text}/>
                                    </S.Li>
                                )
                            })}
                        </Fade>
                    </S.List>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
