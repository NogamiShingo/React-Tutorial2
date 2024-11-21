import styled from 'styled-components';
import { useState, useEffect } from 'react';

const LoadDiv = styled.div`
    padding: 36px;
`

export const withLoading = (WrappedComponent, fetchData) => {
    return () => {
        const [data, setData] = useState(null);
        const fetch = async()=> {
            const Data = await fetchData();
            setData(Data);
        }
        useEffect(() => {
            fetch();
        },[])
    
        const Loading = (
            <LoadDiv>ロード中...</LoadDiv>
        )
    
        return(
            data ? <WrappedComponent data={data} /> : Loading
        )
    }
}