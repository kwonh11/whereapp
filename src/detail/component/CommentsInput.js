import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import device from "../../common/device";

const CommentsWrap = styled.div`
  position: static !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
`;
const StyledButton = styled(Button)`
  height: 40px;
  width: 75px;
  margin-left: 10px;
  @media ${device.tablet} {
    height: 30px;
    width: 50px;
    font-size: 12px !important;
  }
`;
const StyledTextField = styled(TextField)`
  margin: 0 10px;
  width: 95%;
  @media ${device.tablet} {
    & .MuiInputLabel-root {
      font-size: 12px;
    }
    & .MuiOutlinedInput-multiline {
      padding: 12px;
    }
  } ;
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
  color: ${(props) => (props.color === "gray" ? "#848484" : "red")};
  display: flex;
  align-self: flex-end;
  @media ${device.tablet} {
    font-size: 8px;
  }
`;

export default function CommentsInput(props) {
  const {
    addComment,
    contentId,
    commenter,
    isReply,
    commentId,
    addReply,
    setSnackOpen,
    setSnackContent,
  } = props;
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = () => {
    if (!commenter) {
      setSnackContent("로그인 후 이용해주세요.");
      setSnackOpen(true);
      return;
    }
    if (!inputValue) {
      setSnackContent("1글자 이상 300글자 이하로 작성해주세요.");
      setSnackOpen(true);
      return;
    }
    if (inputValue.length > 300) {
      setSnackContent("1글자 이상 300글자 이하로 작성해주세요.");
      setSnackOpen(true);
      return;
    }
    if (isReply) {
      // contentId, commentId, reply
      const replyComment = {
        commenter,
        content: inputValue,
        createAt: new Date(),
      };
      addReply(commentId, replyComment);
      setInputValue("");
    }
    if (!isReply) {
      const comment = { commenter, contentId, content: inputValue };
      addComment({ ...comment, reply: [], createAt: new Date(), like: [] });
      setInputValue("");
    }
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
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
        value={inputValue}
      />
      <InputDatas>
        <Characters color={inputValue.length <= 300 ? "gray" : "red"}>
          {inputValue.length} / 300
        </Characters>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          입 력
        </StyledButton>
      </InputDatas>
      <Divider />
    </CommentsWrap>
  );
}
