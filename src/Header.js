import styled from 'styled-components';
import { Button } from './components/button';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px 64px 0;
    border-bottom: 1px solid #E0E0E0;
`;

const HeaderUl = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const HeaderLi = styled.li`
    list-style: none;
    padding: 4px 12px;
    cursor: pointer;
    border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`;

const HeaderButton = styled(Button)`
    padding: 0;
    margin-bottom: 4px;
`;

export const Header = ({tab,setTab}) => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    return (
        <Container>
            <HeaderUl>
                <HeaderLi onClick={()=>setTab('list')} focused={tab==='list'}>リスト</HeaderLi>
                <HeaderLi onClick={()=>setTab('form')} focused={tab==='form'}>フォーム</HeaderLi>
            </HeaderUl>
            <HeaderButton onClick={toggleTheme}>テーマ変更</HeaderButton>
        </Container>
    )
}