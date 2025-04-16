import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
import React from "react";

export const Header: React.FC = () => {

        const [width, setWidth] = React.useState(window.innerWidth);
        const breakpoint = 768;

        React.useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth)
            window.addEventListener("resize", handleWindowResize);

            return () => window.removeEventListener("resize", handleWindowResize);
        }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <FlexWrapper align={"center"} >
                        {width < breakpoint ? <MobileMenu/> : <DesktopMenu/>}
                        <S.Button><S.Link href="#talk">Let’s Talk</S.Link></S.Button>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};