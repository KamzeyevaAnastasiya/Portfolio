import styled from "styled-components"
import { Theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const About = styled.section`
    padding: 130px 200px 205px;
`

const TitleWrapper = styled.div`
    max-width: 532px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${Theme.media.tablet} {
        align-items: center;
    }
`
const Title = styled.h5`
    font-family: "Epilogue", sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.aboutFn};
`

const Slogan = styled.p`
    ${font({family: "'Epilogue', sans-serif", weight: 300, Fmax: 48, Fmin: 43})};
    margin-top: 16px;
    font-variant: all-small-caps;
    color: ${Theme.colors.aboutFn};
`

const Image = styled.img`
    max-width: 532px;
    width: 100%;
    max-height: 498px;
    object-fit: cover;
    margin-top: 225px;

    @media ${Theme.media.desktop} {
        margin-top: 30px;
        margin-bottom: 40px;
    }

    @media ${Theme.media.tablet} {
        max-width: 305px;
        max-height: 286px;
        margin-top: 30px;
        margin-bottom: 40px;
    }
`

const TextWrapper = styled.div`
    max-width: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: ${Theme.colors.aboutFn};
    
    & + p {
        margin-top: 1em; 
    }
`

const SecondImage = styled(Image)`
    margin-top: 204px;
    max-width: 440px;
    width: 100%;
    max-height: 411px;

    @media ${Theme.media.desktop} {
        margin-top: 60px;
    }

    @media ${Theme.media.tablet} {
        max-width: 276px;
        max-height: 258px;
        margin-top: 60px;
    }
`

export const S = {
    About,
    TitleWrapper,
    Title,
    Slogan,
    Image,
    TextWrapper,
    Text,
    SecondImage,
}