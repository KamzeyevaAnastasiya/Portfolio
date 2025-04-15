import photo from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import front from '../../../assets/images/front.png'
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <S.TitleWrapper>
                        <S.SectionTitle>HELLO <br/> I’M <br/> ANASTASIYA</S.SectionTitle>
                        <S.TextPhoto src={front} alt="Main title"/>
                    </S.TitleWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="My photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};