import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"}>
                <Copyright>2022 Relume. All right reserved.</Copyright>
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
    background-color: #def9c4;
    min-height: 20vh;
`

const SocialList = styled.ul`
    display: flex;
    gap: 12px;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`

const Copyright = styled.small`
`