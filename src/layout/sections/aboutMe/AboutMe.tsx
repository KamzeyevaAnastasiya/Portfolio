import MyPhoto from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./AboutMe_Styles";

export const AboutMe: React.FC = () => {
    return (
        <S.About>
            <Container>
                <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                    <S.TitleWrapper>
                        <S.Title>About Me</S.Title>
                        <S.Slogan>I look at usual <br/> things with my <br/> unsual eyes.</S.Slogan>
                        <S.Image src={MyPhoto} alt=""></S.Image>
                    </S.TitleWrapper>
                    
                    <S.TextWrapper>
                    <S.Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</S.Text>
                    
                    <S.Text>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.</S.Text>
                    
                    <S.Text>Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.</S.Text>
                    <S.SecondImage src={MyPhoto} alt=""></S.SecondImage>
                    </S.TextWrapper>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};