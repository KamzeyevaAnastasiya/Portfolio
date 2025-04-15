import { StyledButton } from "../../../../components/button/Button"
import { S } from "../Works_Styles"

type WorkPropsType = {
    category: string
    titlePart1: string
    titlePart2: string
    text: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
            </S.ImageWrapper>
            
            <S.Wrapper>
                <S.TitleWrapper>
                    <S.Category>{props.category}</S.Category>
                    <S.TitlePart1>{props.titlePart1}</S.TitlePart1>
                    <S.TitlePart2>{props.titlePart2}</S.TitlePart2>
                </S.TitleWrapper>
                
                <S.TextWrapper>
                    <S.Text>{props.text}</S.Text>
                    <StyledButton/>
                </S.TextWrapper>
            </S.Wrapper>
        </S.Work>
    );
};
