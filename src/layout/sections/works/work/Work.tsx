import styled from "styled-components"
import { StyledButton } from "../../../../components/button/Button"
import { Theme } from "../../../../styles/Theme"
import { font } from "../../../../styles/Common"
import { FlexWrapper } from "../../../../components/FlexWrapper"

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
            
            <FlexWrapper>
                <TitleWrapper>
                    <Category>{props.category}</Category>
                    <TitlePart1>{props.titlePart1}</TitlePart1>
                    <TitlePart2>{props.titlePart2}</TitlePart2>
                </TitleWrapper>
                
                <TextWrapper>
                    <Text>{props.text}</Text>
                    <StyledButton/>
                </TextWrapper>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    margin-top: 80px;
    position: relative;

    @media ${FlexWrapper} {
        position: absolute;
        top: 20%;
    }

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

const Image = styled.img`
    max-width: 1040px;
    width: 100%;
    min-height: 447px;
    object-fit: cover;
`

const TitleWrapper = styled.div`
    width: 100%;
    min-height: 270px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-around;

`

const Category = styled.h5`
    ${font({family: "'Epilogue', sans-serif", weight: 600, lineHeight: 1.5, Fmax: 16, Fmin: 15})};
    color: ${Theme.colors.mainFn};
    margin-bottom: 16px;

    @media ${Theme.media.desktop} {
        margin-bottom: 14px;
    }
`

const TitlePart1 = styled.h3`
    ${font({family: "'Epilogue', sans-serif", weight: 200, Fmax: 45, Fmin: 40})};
    color: ${Theme.colors.mainFn};
    max-width: 440px;
`

const TitlePart2 = styled.h3`
    ${font({family: "'Epilogue', sans-serif", weight: 800, Fmax: 45, Fmin: 40})};
    color: ${Theme.colors.mainFn};
    max-width: 440px;
    
`

const TextWrapper = styled.div`

`

const Text = styled.p`
    ${font({family: "'Epilogue', sans-serif", weight: 400, lineHeight: 1.5,Fmax: 18, Fmin: 17})};
    color: ${Theme.colors.mainFn};
    margin-top: 50px;
    margin-bottom: 20px;
    max-width: 440px;

    @media ${Theme.media.desktop} {
        margin-top: 20px;
    }
`

