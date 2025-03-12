import styled from 'styled-components';
import photo from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container';
import { MainTitle } from '../../../components/h1/H1';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <FlexWrapper direction={"column"} justify={"center"} align={"left"}>
                        <SectionTitle>HELLO <br/> I’M ANASTASIYA</SectionTitle>
                        <MainTitle/>
                    </FlexWrapper>
                    <Photo src={photo} alt="My photo" />
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    padding: 200px 105px 105px 175px;
`

const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
    transform: rotate(8deg);
    opacity: 0.9;
`