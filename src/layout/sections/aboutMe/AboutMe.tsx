import styled from "styled-components";
import MyPhoto from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

export const AboutMe = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify="space-between">
                    <div>
                        <Title>About Me</Title>
                        <Slogan>I look at usual <br/> things with my <br/> unsual eyes.</Slogan>
                    </div>
                    <div><Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</Text>
                    
                    <Text>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.</Text>
                    
                    <Text>Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.</Text></div>
                </FlexWrapper>
                <Image src={MyPhoto} alt=""></Image>
                <SecondImage src={MyPhoto} alt=""></SecondImage>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 1470px;
    padding: 110px 200px 205px;

    position: relative;
`

const Title = styled.h5`
    font-family: "Epilogue", sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.aboutFn};
`

const Slogan = styled.p`
    width: 422px;
    margin-top: 16px;
    font-family: "Epilogue", sans-serif;
    font-weight: 254px;
    font-size: 48px;
    font-variant: all-small-caps;
    color: ${Theme.colors.aboutFn};
`

const Text = styled.p`
    width: 437px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: ${Theme.colors.aboutFn};
    
    & + p {
        margin-top: 1em; 
    }
`

const Image = styled.img`
    width: 532px;
    height: 498px;
    object-fit: cover;
    
    position: absolute;
    right: 760px;
    bottom: 410px;
`

const SecondImage = styled(Image)`
    width: 440px;
    height: 411px;
    
    position: absolute;
    right: 200px;
    bottom: 205px;
`


