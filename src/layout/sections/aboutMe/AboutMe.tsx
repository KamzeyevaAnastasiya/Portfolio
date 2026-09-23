import MyPhoto from '../../../assets/images/myPhoto.webp'
import MyPhoto2 from '../../../assets/images/myPhoto2.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./AboutMe_Styles";

export const AboutMe: React.FC = () => {
    return (
        <S.About id={"about"}>
            <Container>
                <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                    <S.TitleWrapper>
                        <S.Title>About Me</S.Title>
                        <S.Slogan>I look at usual <br/> things with my <br/> unsual eyes.</S.Slogan>
                        <S.Image src={MyPhoto2} alt=""></S.Image>
                    </S.TitleWrapper>

                    <S.TextWrapper>
                        <S.Text> I’m a Frontend Developer who enjoys building modern, responsive interfaces and turning
                            ideas into real web experiences. I work with React, TypeScript, JavaScript and a variety of
                            modern libraries and tools while constantly exploring new technologies and improving my
                            development skills.</S.Text>

                        <S.Text>I love learning and exploring new technologies, especially when they give me a chance to
                            solve problems in a different ways. Personal projects, challenging tasks, and experimenting
                            with new ideas help me grow as a developer and keep me motivated.</S.Text>

                        <S.Text>Outside of development, I enjoy traveling, working out, reading books, and discovering
                            new things. I believe that staying curious and constantly exploring the world helps me bring
                            fresh ideas and a different perspective to what I create.</S.Text>
                        <S.SecondImageWrapper>
                            <S.SecondImage src={MyPhoto} alt=""/>
                        </S.SecondImageWrapper>
                    </S.TextWrapper>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};