import styled from 'styled-components'
import { Icon } from '../icon/Icon';
import { Theme } from '../../styles/Theme';

export const StyledButton = () => {
    return (
        <StyledBtn>
            <Text>View More</Text>
            <a href="">
                <Icon iconId={'more'}  width={'16'} height={'16'} viewBox={'0 0 16 16'}></Icon> 
            </a>
        </StyledBtn>
    );
};

const StyledBtn = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Text = styled.p`
    font-family: "Epilogue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${Theme.colors.mainFn};
`