import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const LoadDiv = styled.div`
    padding: 36px;
    height: 100%;
    color: ${({theme})=>theme.color};
    background-color: ${({theme})=>theme.backgroundColor};
`

export const withLoading = (WrappedComponent, fetchData) => {
    return () => {
        const [theme, toggleTheme] = useContext(ThemeContext);
        const [data, setData] = useState(null);
        const fetch = async()=> {
            const Data = await fetchData();
            setData(Data);
        }
        useEffect(() => {
            fetch();
        },[])
    
        const Loading = (
            <LoadDiv theme={theme}>ロード中...</LoadDiv>
        )
    
        return(
            data ? <WrappedComponent data={data} /> : Loading
        )
    }
}