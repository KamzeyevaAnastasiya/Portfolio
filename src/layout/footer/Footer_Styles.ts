import styled from "styled-components"
import { Theme } from "../../styles/Theme"

const Footer = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 64px 200px 55px;

    @media ${Theme.media.mobile} {
        padding: 30px 10px;
    }
`

const Copyright = styled.small`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: ${Theme.colors.secondaryFn};

    @media ${Theme.media.tablet} {
        width: 200px;
    }
`

const SocialList = styled.ul`
    display: flex;
    gap: 12px;

`

const SocialLink = styled.a`
    color: ${Theme.colors.secondaryFn};
    cursor: pointer;
`

export const S = {
    Footer,
    Copyright,
    SocialList,
    SocialLink,
}