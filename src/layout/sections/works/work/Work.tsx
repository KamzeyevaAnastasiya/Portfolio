import styled from "styled-components"
import { StyledButton } from "../../../../components/button/Button"
import { Theme } from "../../../../styles/Theme"

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
            <Category>{props.category}</Category>
            <TitlePart1>{props.titlePart1}</TitlePart1>
            <TitlePart2>{props.titlePart2}</TitlePart2>
            <Text>{props.text}</Text>
            <StyledButton/>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    margin-top: 80px;
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
    width: 100%;
    height: 447px;
    object-fit: cover;
`

const Category = styled.h5`
    font-family: "Epilogue", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.mainFn};
`

const TitlePart1 = styled.h3`
    font-family: "Epilogue", sans-serif;
    font-weight: 200;
    font-size: 45px;
    color: ${Theme.colors.mainFn};
`

const TitlePart2 = styled.h3`
    font-family: "Epilogue", sans-serif;
    font-weight: 800;
    font-size: 45px;
    color: ${Theme.colors.mainFn};
`

const Text = styled.p`
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: ${Theme.colors.mainFn};
`

