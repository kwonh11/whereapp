import styled, { css } from 'styled-components';
import { Button, Avatar, Menu, MenuItem, Input, TextField } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentsInput from './CommentsInput';
import { MoreVert, DeleteForever } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 20px 10px;
    margin: 20px;
`;
const Container = styled.div`
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.2s ease-out;
`;
const ProfileWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
`;
const CommenterWrap = styled.div`
    width: 100%;
    height: 30px;
    margin: 30px 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
const ContentWrap = styled.div`
    width: 100%;
    justify-self: flex-start;
    font-size: 0.9rem;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 7px;
`;
const InfoWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;
const DateWrap = styled.div`
    color: darkgray;
    font-size: 0.9rem;
    width: 120px;
    height: 30px;
    align-self: flex-end;
`;
const FilterWrap = styled.div`
    width: 100%;
    height: 50px;
`;
const ByRecentButton = styled(Button)`
    margin: 0 5px;
    & .MuiButton-label {
        font-size: 1.1rem;
        font-weight: ${props => props.sort === "recent" ? "bold" : "unset"};
        color: ${props => props.sort === "recent" ? "#2c0097" : "darkgray"}
    }
`;
const ByLikeButton = styled(Button)`
    margin: 0 5px;
    & .MuiButton-label {
        font-size: 1.1rem;
        font-weight: ${props => props.sort === "like" ? "bold" : "unset"};
        color: ${props => props.sort === "like" ? "#2c0097" : "darkgray"}
    }
`;
const ReplyContainer = styled.div`
    width: 100%;
    height: 200px;
    padding-left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid rgba(0,0,0,0.2);
`;
const ButtonWrap = styled.div`

`;
function getDateString(createAt) {
    const date = new Date(createAt);
    const year = date.getFullYear();
    const Month = date.getMonth()+1;
    const month = Month < 10? "0" + Month : Month;
    const Day = date.getDate();
    const day = Day < 10? "0" + Day : Day;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function Reply(props) {
    const {commenter : loginUser , reply, commentId, deleteReply, contentId} = props;

    const handleDeleteReply = (e) => {
        const {replyId, commenter} = e.currentTarget.dataset;
        console.log(replyId, commenter, commentId);
        deleteReply(contentId, commentId, replyId, commenter);
    }
    return (
    <React.Fragment>
    {
        reply.map((rep, i) => {
            const {commenter, nick, content, createAt, _id} = rep;
            return (
            <ReplyContainer key={i}>
                <CommenterWrap>
                    <ProfileWrap>
                        <Avatar />
                        <span style={{ marginLeft: "10px" }}>{nick}</span>
                    </ProfileWrap>
                    {
                        loginUser === commenter
                        && 
                        <IconButton 
                        data-commenter={commenter}
                        data-reply-id={_id}
                        onClick={handleDeleteReply}>
                            <DeleteForever/>
                        </IconButton>
                    }
                </CommenterWrap>
                <ContentWrap>
                    {content}
                </ContentWrap>
                <InfoWrap>
                    <DateWrap>
                        {getDateString(createAt)}
                    </DateWrap>
                </InfoWrap>
            </ReplyContainer>
            )})
        }
    </React.Fragment>
    )
}

export default function Comments(props) {
    const { comments, deleteComment, updateComment, contentId, addReply, commenter : loginUser, deleteReply, sendable, setSendable, setSnack } = props;
    const [ sort, setSort ] = React.useState("recent");
    const [replyOn, setReplyOn] = React.useState(null);
    const [modifyOn, setModifyOn] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modifyingInput, setModifyingInput] = React.useState("");
    const open = Boolean(anchorEl);

    React.useEffect(()=>{
        if (modifyingInput.length > 300) setSendable(false);
        if (modifyingInput.length <= 300) setSendable(true);
        if (modifyingInput.length === 0) setSendable(false);
    }, [modifyingInput]);

    const handleClickSort = (key) => {
        // 여기에 정렬 조건을 실행하는 reselect 코드 작성
        setSort(key);
    };
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleClickReply = (e) => {
        setModifyOn(null);
        setReplyOn(e.currentTarget.dataset.id);
    };

    const handleClickDelete = (e) => {
        const _id = anchorEl.dataset.id;
        deleteComment(_id, commenter, contentId);
        handleCloseMenu();
    };
    const handleClickModifyButton = (e) => {
        setReplyOn(null);
        setModifyOn(anchorEl.dataset.id);
        setModifyingInput(anchorEl.dataset.content);
        handleCloseMenu();
    };
    const handleSubmitModify = (e) => {
        if (!commenter || !sendable) {
            setSnack(true);
            return;
        }
        updateComment(e.currentTarget.dataset.id, modifyingInput, e.currentTarget.dataset.commenter, contentId);
        setReplyOn(null);
        setModifyOn(null);
    };
    const handleChangeModifyingInput = (e) => {
        console.log(e.key);
        setModifyingInput(e.target.value);
    };
    return (
        <CommentContainer>
        <FilterWrap>
            <ByRecentButton sort={sort} onClick={()=>handleClickSort("recent")}> 최신순 </ByRecentButton>
             | 
             <ByLikeButton sort={sort} onClick={()=>handleClickSort("like")}> 좋아요순 </ByLikeButton>
        </FilterWrap>
        {
        comments.map((comment,i) => {
            const { commenter, content, createAt, like, reply, nick, _id } = comment;
            const contentWithLine = content? content.split(/\r\n|\r|\n/) : [];
            return (
            <Container key={i} replyOn={replyOn === _id ? "on" : ""}>
                <CommenterWrap>
                    <ProfileWrap>
                        <Avatar />
                        <span style={{ marginLeft: "10px" }}>{nick}</span>
                        </ProfileWrap>
                        { // 내가 쓴 글일 경우 옵션버튼 노출
                            loginUser === commenter
                            && 
                            (
                            <IconButton 
                            aria-controls="fade-menu" 
                            aria-haspopup="true" 
                            data-id={_id} 
                            data-content={content}
                            onClick={handleClickMenu} >
                                <MoreVert/>
                            </IconButton>
                            )
                        }
                    <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleCloseMenu}
                    TransitionComponent={Fade}
                    elevation={1}
                    >
                        <MenuItem onClick={handleClickDelete}> 삭제하기 </MenuItem>
                        <MenuItem onClick={handleClickModifyButton}> 수정하기 </MenuItem>
                    </Menu>
                </CommenterWrap>
                {
                    modifyOn === _id ?
                    (
                    <ContentWrap>
                        <TextField
                        id="outlined-multiline-static"
                        label="수정하기"
                        fullWidth
                        multiline
                        rowsMax={5}
                        rows={contentWithLine.length}
                        variant="outlined"
                        onChange={handleChangeModifyingInput}
                        value={modifyingInput}
                        />
                        <Button 
                        variant="contained" 
                        color="primary"
                        data-id={_id}
                        data-commenter={commenter}                
                        onClick={handleSubmitModify} 
                        style={{margin: "10px 0 0 auto",
                        display: "flex"}}>
                            수정완료
                        </Button>
                    </ContentWrap>
                    )
                    :
                    (
                    <ContentWrap>
                        {
                            contentWithLine?
                            contentWithLine.map((line,i) => (
                                <React.Fragment key={i}>
                                {line} <br/>
                                </React.Fragment>
                            )):
                            content
                        }
                    </ContentWrap>
                    )
                }
                <InfoWrap>
                    <DateWrap>
                        {getDateString(createAt)}
                    </DateWrap>
                    <ButtonWrap>
                        <Button variant="outlined" color={like? "primary":"default"}>
                            {like} &nbsp;
                            <ThumbUpIcon color={like? "action":"primary"} />
                        </Button>
                        <Button variant="outlined" color="default" data-id={_id} onClick={handleClickReply}>
                            댓글달기
                        </Button>
                    </ButtonWrap>
                </InfoWrap>
                    {replyOn === _id && <CommentsInput
                        setSnack={setSnack}
                        isReply={true}
                        commentId={_id}
                        addReply={addReply}
                        contentId={contentId}
                        commenter={commenter}
                        sendable={sendable}
                        setSendable={setSendable}
                        />}
                <Reply reply={reply} contentId={contentId} commenter={commenter} commentId={_id} deleteReply={deleteReply}/>
            </Container>
        )})
        }
    </CommentContainer>
    )
}