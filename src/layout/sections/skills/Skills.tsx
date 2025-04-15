import { FlexWrapper } from "../../../components/FlexWrapper"
import { Skill } from "./skill/Skill"
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";

const skillData = [
    {
        title: "React",
        text: "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
    },
    {
        title: "Styled Components",
        text: "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
    },
    {
        title: "Figma",
        text: "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
    },
    {
        title: "HTML",
        text: "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
    },
    {
        title: "CSS",
        text: "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
    },
    {
        title: "TypeScript",
        text: "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <FlexWrapper wrap={"wrap"}>
                    <S.List>
                        {skillData.map((s, index) => {
                            return (
                                <S.Li>
                                    <Skill title={s.title} key={index}
                                    text={s.text}/>
                                </S.Li>
                            )
                        })}
                    </S.List>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
