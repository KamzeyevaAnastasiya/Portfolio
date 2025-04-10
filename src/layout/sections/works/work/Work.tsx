import styled from "styled-components"
import { StyledButton } from "../../../../components/button/Button"
import { Theme } from "../../../../styles/Theme"
import { font } from "../../../../styles/Common"

type WorkPropsType = {
    category: string
    titlePart1: string
    titlePart2: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
            </ImageWrapper>
            
            <Wrapper>
                <TitleWrapper>
                    <Category>{props.category}</Category>
                    <TitlePart1>{props.titlePart1}</TitlePart1>
                    <TitlePart2>{props.titlePart2}</TitlePart2>
                </TitleWrapper>
                
                <TextWrapper>
                    <Text>{props.text}</Text>
                    <StyledButton/>
                </TextWrapper>
            </Wrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    margin-top: 80px;
    position: relative;

    @media ${Theme.media.mobile} {
        margin-top: 60px;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        opacity: 0.6;
    }
`

const Wrapper = styled.div`
    position: absolute;
    top: 20%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    gap: 5px;
    margin-left: 10px;
    
    @media ${Theme.media.tablet} {
        top: 10%;
    }
`

const Image = styled.img`
    max-width: 1000px;
    width: 100%;
    min-height: 447px;
    object-fit: cover;

    @media ${Theme.media.tablet} { 
        min-height: 620px; 
    }
`

const TitleWrapper = styled.div`
    max-width: 434px;
    width: 100%;
`

const Category = styled.h5`
    ${font({family: "'Epilogue', sans-serif", weight: 600, lineHeight: 1.5, Fmax: 16, Fmin: 15})};
    color: ${Theme.colors.mainFn};
    margin-bottom: 16px;

`

const TitlePart1 = styled.h3`
    ${font({family: "'Epilogue', sans-serif", weight: 200, Fmax: 42, Fmin: 36})};
    color: ${Theme.colors.mainFn};
`

const TitlePart2 = styled.h3`
    ${font({family: "'Epilogue', sans-serif", weight: 800, Fmax: 42, Fmin: 36})};
    color: ${Theme.colors.mainFn};
`

const TextWrapper = styled.div`
    max-width: 434px;
    width: 100%;
    margin-top: 30px;

    @media ${Theme.media.tablet} { 
        margin-top: 24px;
    }
`

const Text = styled.p`
    ${font({family: "'Epilogue', sans-serif", weight: 400, lineHeight: 1.5,Fmax: 18, Fmin: 15})};
    color: ${Theme.colors.mainFn};
`
