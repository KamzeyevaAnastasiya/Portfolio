import styled from 'styled-components';
import photo from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { Theme } from '../../../styles/Theme';
import front from '../../../assets/images/front.png'
import { font } from '../../../styles/Common';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <FlexWrapper direction={"column"} align={"center"}>
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
    padding: 150px 105px 100px;
    
    @media ${Theme.media.mobile} {
        padding-top: 120px !important;
    }
`

const SectionTitle = styled.h2`
    ${font({family: "'Epilogue', sans-serif", weight: 800, Fmax: 90, Fmin: 50})};
    color: ${Theme.colors.primaryFn};
    text-align: left;
`

const TextPhoto = styled.img`
    width: 80%;
    height: 80%;
    object-fit: cover;
    margin-bottom: 40px;
`

const PhotoWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 500px;
        height: 500px;
        background: #e7e7e7;
        transform: rotate(-8deg) translateY(-50%);
        position: absolute;
        top: 50%;
        transform-origin: top;

        @media ${Theme.media.tablet} {
            width: 400px;
            height: 400px;
        }

        @media ${Theme.media.mobile} {
            width: 280px;
            height: 280px;
        }
    }
`

const Photo = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
    transform: rotate(9deg);
    opacity: 0.9;
    
    @media ${Theme.media.tablet} {
        width: 400px;
        height: 400px;
    }

    @media ${Theme.media.mobile} {
        width: 280px;
        height: 280px;
    }
`