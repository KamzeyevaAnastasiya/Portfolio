import photo from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"flex-start"} justify={"space-around"} wrap={'wrap'}>
                    <S.TitleWrapper>
                        <S.SectionTitle>HELLO <br/> I’M <br/> ANASTASIYA</S.SectionTitle>
                        <S.MainTitle>
                            <p>Front-end Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Front-end Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80,
                                }}
                                />
                        </S.MainTitle>
                        
                    </S.TitleWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="My photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};