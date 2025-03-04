import styled from "styled-components"
import { StyledButton } from "../../../../components/button/Button"

type WorkPropsType = {
    category: string
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Category>{props.category}</Category>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <StyledButton/>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    
`

const Image = styled.img`
    width: 1040px;
    height: 447px;
    object-fit: cover;
`

const Category = styled.div`
    
`

const Title = styled.h3`
    
`

const Text = styled.p`
    
`

