import styled from "styled-components"
import { font } from "../../../styles/Common"
import { Theme } from "../../../styles/Theme"

const Works = styled.section`
    padding: 120px 200px;
    position: relative;
`

const WorksTitle = styled.h2`
    ${font({family: "'Epilogue', sans-serif", weight: 800, lineHeight: 0.9, Fmax: 120, Fmin: 60})};
    color: ${Theme.colors.primaryFn};
`

const Work = styled.div`
    margin-top: 80px;
    position: relative;

    @media ${Theme.media.mobile} {
        margin-top: 60px;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        opacity: 0.6;
    }
`

const Image = styled.img`
    width: 100%;
    min-height: 447px;
    object-fit: cover;
    border: 1px solid #000;

    @media ${Theme.media.desktop} { 
        min-height: 620px; 
    }
`

const Wrapper = styled.div`
    position: absolute;
    top: 20%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    
    @media ${Theme.media.tablet} {
        top: 15%;
    }
`

const TitleWrapper = styled.div`
    max-width: 434px;
    width: 100%;
`

const Category = styled.h5`
    ${font({family: "'Epilogue', sans-serif", weight: 600, lineHeight: 1.5, Fmax: 16, Fmin: 15})};
    color: ${Theme.colors.mainFn};
    margin-bottom: 16px;
    margin-left: 10px;
`

const TitlePart1 = styled.h3`
    ${font({family: "'Epilogue', sans-serif", weight: 200, Fmax: 42, Fmin: 36})};
    color: ${Theme.colors.mainFn};
    margin-left: 10px;
`

const TitlePart2 = styled.h3`
    ${font({family: "'Epilogue', sans-serif", weight: 800, Fmax: 42, Fmin: 36})};
    color: ${Theme.colors.mainFn};
    margin-left: 10px;
`

const TextWrapper = styled.div`
    max-width: 430px;
    width: 100%;
    margin-top: 34px;

    @media ${Theme.media.tablet} { 
        margin-top: 24px;
    }
`

const Text = styled.p`
    ${font({family: "'Epilogue', sans-serif", weight: 400, lineHeight: 1.5,Fmax: 18, Fmin: 15})};
    color: ${Theme.colors.mainFn};
    margin-left: 10px;
`

export const S = {
    Works,
    WorksTitle,
    Work,
    ImageWrapper,
    Image,
    Wrapper,
    TitleWrapper,
    Category,
    TitlePart1,
    TitlePart2,
    TextWrapper,
    Text,
}