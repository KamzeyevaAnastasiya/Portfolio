import styled from 'styled-components';
import photo from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <SectionTitle>HELLO I’M ANASTASIYA</SectionTitle>
                    <MainTitle>FRONT-END DEVELOPER</MainTitle>
                </div>

                <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
`

const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`
