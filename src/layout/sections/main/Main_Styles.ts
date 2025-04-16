import styled from "styled-components"
import { Theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Main = styled.section`
    min-height: 100vh;
    padding: 150px 105px 100px;
    
    @media ${Theme.media.tablet} {
        padding-top: 120px !important;
    }
`

const TitleWrapper = styled.div`
    max-width: 565px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    p {
        display: none;
    }
`

const SectionTitle = styled.h2`
    ${font({family: "'Epilogue', sans-serif", weight: 800, Fmax: 90, Fmin: 50})};
    color: ${Theme.colors.primaryFn};
`

const MainTitle = styled.h1`
    ${font({family: "'Epilogue', sans-serif", weight: 400, Fmax: 40, Fmin: 26})};
    color: ${Theme.colors.primaryFn};
    margin-bottom: 40px;
    margin-top: 20px;
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

export const S = {
    Main,
    TitleWrapper,
    SectionTitle,
    MainTitle,
    PhotoWrapper,
    Photo,
}