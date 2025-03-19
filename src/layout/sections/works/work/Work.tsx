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
            <Image src={props.src} alt=""/>
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

const Image = styled.img`
    width: 1040px;
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
    
`

const TitlePart2 = styled.h3`
    
`

const Text = styled.p`
    
`

