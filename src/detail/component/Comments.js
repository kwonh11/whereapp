import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const CommentsWrap = styled.div`
    position: static !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
`;
const StyledButton = styled(Button)`
    height: 40px;
    width: 75px;
    margin-left: 10px;
`;
const StyledTextField = styled(TextField)`
    margin: 0 10px;
    width: 95%;
`;
const InputDatas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: auto;
    padding: 10px 0;
`;
const Characters = styled.div`
    font-size: 0.7rem;
    color: ${props => props.color === "gray"? "#848484":"red"};
    display: flex;
    align-self: flex-end;
`;

export default function Comments(props) {
    const [value, setValue] = React.useState('');
    const [sendable, setSendable] = React.useState(true);

    React.useEffect(()=>{
        if (value.length > 300) setSendable(false);
        if (value.length <= 300) setSendable(true);
    },[value]);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <CommentsWrap>
            <StyledTextField
            id="outlined-textarea"
            onChange={handleChange}
            rowsMax={5}
            label={`댓글 달기`}
            placeholder="바르고 고운 말을 사용해주세요."
            multiline
            variant="outlined"
            value={value}
            />
            <InputDatas>
                <Characters color={sendable? "gray":"red"}> 
                    {value.length} / 300
                </Characters>
                <StyledButton variant="contained" color="primary">입 력</StyledButton>
            </InputDatas>
        </CommentsWrap>
    )
}