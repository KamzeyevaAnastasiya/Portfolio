import styled from "styled-components";
import MyPhoto from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const AboutMe = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                    <TitleWrapper>
                        <Title>About Me</Title>
                        <Slogan>I look at usual <br/> things with my <br/> unsual eyes.</Slogan>
                        <Image src={MyPhoto} alt=""></Image>
                    </TitleWrapper>
                    
                    <TextWrapper>
                    <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</Text>
                    
                    <Text>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.</Text>
                    
                    <Text>Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.</Text>
                    <SecondImage src={MyPhoto} alt=""></SecondImage>
                    </TextWrapper>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    padding: 100px 200px 205px;
`

const TitleWrapper = styled.div`
    max-width: 532px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${Theme.media.tablet} {
        align-items: center;
    }
`
const Title = styled.h5`
    font-family: "Epilogue", sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.aboutFn};
`

const Slogan = styled.p`
    ${font({family: "'Epilogue', sans-serif", weight: 300, Fmax: 48, Fmin: 43})};
    margin-top: 16px;
    font-variant: all-small-caps;
    color: ${Theme.colors.aboutFn};
`

const Image = styled.img`
    max-width: 532px;
    width: 100%;
    max-height: 498px;
    object-fit: cover;
    margin-top: 225px;

    @media ${Theme.media.desktop} {
        margin-top: 30px;
        margin-bottom: 40px;
    }

    @media ${Theme.media.tablet} {
        max-width: 305px;
        max-height: 286px;
        margin-top: 30px;
        margin-bottom: 40px;
    }
`

const TextWrapper = styled.div`
    max-width: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: ${Theme.colors.aboutFn};
    
    & + p {
        margin-top: 1em; 
    }
`

const SecondImage = styled(Image)`
    margin-top: 204px;
    max-width: 440px;
    width: 100%;
    max-height: 411px;

    @media ${Theme.media.desktop} {
        margin-top: 60px;
    }

    @media ${Theme.media.tablet} {
        max-width: 276px;
        max-height: 258px;
        margin-top: 60px;
    }
`


