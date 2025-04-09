import styled from 'styled-components';
import photo from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { Theme } from '../../../styles/Theme';
import front from '../../../assets/images/front.png'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <FlexWrapper direction={"column"} align={"left"}>
                        <SectionTitle>HELLO <br/> I’M <br/> ANASTASIYA</SectionTitle>
                        <TextPhoto src={front} alt="Main title"/>
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
    padding: 200px 105px 100px;
    
    @media ${Theme.media.mobile} {
        padding-top: 110px !important;
    }
`

const SectionTitle = styled.h2`
    font-family: "Epilogue", sans-serif;
    font-weight: 800;
    font-size: 90px;
    color: ${Theme.colors.primaryFn};
    
    @media ${Theme.media.mobile} {
        font-size: 50px;
    }
`

const TextPhoto = styled.img`
    width: 80%;
    height: 80%;
    object-fit: cover;

    @media ${Theme.media.mobile} {
        width: 100%;
        height: 100%;
    }
`

const PhotoWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 500px;
        height: 500px;
        background: #e7e7e7;
        transform: rotate(-9deg) translateY(-50%);
        position: absolute;
        top: 50%;
        transform-origin: top;

        @media ${Theme.media.mobile} {
            width: 280px;
            height: 280px;
            margin-top: 15px;
        }
    }
`

const Photo = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
    transform: rotate(8deg);
    opacity: 0.9;
    
    @media ${Theme.media.mobile} {
        width: 280px;
        height: 280px;
        margin-top: 30px;
    }
`