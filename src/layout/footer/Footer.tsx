import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"}>
                <Copyright>2025 Anastasiya Kamzeyeva. All rights reserved.</Copyright>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"facebook"}/>
                        </SocialLink>
                    </SocialItem>
                    
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
        
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"twitter"}/>
                        </SocialLink>
                    </SocialItem>
        
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"24"} width={"24"} viewBox={"0 0 24 24"} iconId={"linkediIn"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
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

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    color: ${Theme.colors.secondaryFn};
    cursor: pointer;
`