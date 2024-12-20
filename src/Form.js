import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './components/button';
import { TabBodyContainer } from './components/tab-body-container';
import { FormModal } from './FormModal';
import { Hint } from './Hint';

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`;

const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black;
`;

const FormButton = styled(Button)`
    width: 120px;
`

const ButtonContainer = styled.div`
    margin-top: 24px;
`

export const Form = ({onAddLang}) => {
    const [text, setText] = useState('');
    const [modal, setModal] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        setModal(true);
    }
    return(
        <TabBodyContainer title="新しい言語の追加">
            <form onSubmit={submitForm}>
                <Label>言語</Label>
                <Input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                <Hint/>
                <ButtonContainer>
                    <FormButton>追加</FormButton>
                </ButtonContainer>
            </form>
            {
                modal && 
                <FormModal 
                    confirm={()=>onAddLang(text)}
                    cancel={() => setModal(false)}
                />
            }
        </TabBodyContainer>
    )
}