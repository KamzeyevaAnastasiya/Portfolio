import { Icon } from '../icon/Icon';
import { S } from './Button_Styles';

export const Button: React.FC = () => {
    return (
        <S.Button>
            <S.Text>View More</S.Text>
            <S.Link href="">
                <Icon iconId={'more'}  width={'16'} height={'16'} viewBox={'0 0 16 16'}></Icon> 
            </S.Link>
        </S.Button>
    );
};