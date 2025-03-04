import styled from "styled-components";
import MyPhoto from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from "../../../components/FlexWrapper";

export const AboutMe = () => {
    return (
        <StyledAbout>
            <FlexWrapper>
                <div>
                    <Title>About Me</Title>
                    <Slogan>I look at usual things with my unsual eyes.</Slogan>
                </div>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. 
                Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.</Text>
            </FlexWrapper>
            <Image src={MyPhoto} alt=""></Image>
            <SecondImage src={MyPhoto} alt=""></SecondImage>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 1470px;
`
const Title = styled.h3`
    
`

const Slogan = styled.p`
    
`

const Text = styled.p`
    
`

const Image = styled.img`
    width: 532px;
    height: 498px;
    object-fit: cover;
`

const SecondImage = styled(Image)`
    width: 440px;
    height: 411px;
`


