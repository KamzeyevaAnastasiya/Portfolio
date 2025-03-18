import styled from 'styled-components';
import photo from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { MainTitle } from '../../../components/h1/H1';
import { Theme } from '../../../styles/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <FlexWrapper direction={"column"} justify={"flex-start"} align={"left"}>
                        <SectionTitle>HELLO <br/> I’M ANASTASIYA</SectionTitle>
                        <MainTitle/>
                    </FlexWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt="My photo"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    padding: 200px 105px 100px;
`

const PhotoWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 570px;
        height: 570px;
        background: #e7e7e7;
        transform: rotate(-9deg) translateY(-50%);
        position: absolute;
        top: 50%;
        transform-origin: top;
    }
`

const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
    transform: rotate(8deg);
    opacity: 0.9;
    z-index: 0;
`

const SectionTitle = styled.h2`
    font-family: "Epilogue", sans-serif;
    font-weight: 800;
    font-size: 100px;
    color: ${Theme.colors.primaryFn};
    position: absolute;
    z-index: 1;
`