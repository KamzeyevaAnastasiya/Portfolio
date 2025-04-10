import styled from 'styled-components'
import { Icon } from '../icon/Icon';
import { Theme } from '../../styles/Theme';

export const StyledButton = () => {
    return (
        <StyledBtn>
            <Text>View More</Text>
            <Link href="">
                <Icon iconId={'more'}  width={'16'} height={'16'} viewBox={'0 0 16 16'}></Icon> 
            </Link>
        </StyledBtn>
    );
};

const StyledBtn = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 105px;
    height: 40px;
    gap: 4px;
    padding: 8px 0px;
    margin-left: 10px;
`

const Text = styled.p`
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.mainFn};

    @media ${Theme.media.desktop} {
        font-size: 15px;
    }
`

const Link = styled.a`
    width: 16px;
    height: 16px;
`