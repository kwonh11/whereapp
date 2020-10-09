import styled from 'styled-components';
import { Button, Avatar, Menu, MenuItem } from '@material-ui/core';
import Loading from '../../common/component/Loading';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentsInput from './CommentsInput';
import { MoreVert } from '@material-ui/icons';
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
    height: ${props => props.height};
    border-bottom: 1px solid rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.3s ease-out;
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
    padding: 20px 0;
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
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid rgba(0,0,0,0.2);
`;
const ButtonWrap = styled.div``;
function getDateString(createAt) {
    const date = new Date(createAt);
    const year = date.getFullYear();
    const Month = date.getMonth()+1;
    const month = Month < 10? "0" + Month : Month;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function Reply({reply}) {
    return (
    <React.Fragment>
    {
        reply.map((rep, i) => {
            const {commenter, content, createAt} = rep;
            return (
            <ReplyContainer key={i}>
                <CommenterWrap>
                    <Avatar style={{marginRight:"10px"}}/> {commenter}
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
    const { comments, loading, deleteComment } = props;
    const [ sort, setSort ] = React.useState("recent");
    const [commentOn, setCommentOn] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuIndex, setMenuIndex] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleClickSort = (key) => {
        // 여기에 정렬 조건을 실행하는 reselect 코드 작성
        setSort(key);
    };
    const handleClickComment = (e) => {
        console.log(e.currentTarget.dataset.id);
        setCommentOn(e.currentTarget.dataset.id);
    };
    const handleClickDelete = (e) => {
        const _id = anchorEl.dataset.id;
        const commenter = anchorEl.dataset.commenter;
        deleteComment(_id, commenter);
    }
    const handleClickModify = (e) => {
        console.log(anchorEl.dataset.id);
    }
    return (
    <CommentContainer>
        <FilterWrap>
            <ByRecentButton sort={sort} onClick={()=>handleClickSort("recent")}> 최신순 </ByRecentButton>
             | 
             <ByLikeButton sort={sort} onClick={()=>handleClickSort("like")}> 좋아요순 </ByLikeButton>
        </FilterWrap>
        {
        comments.map((comment,i) => {
            const { commenter, content, createAt, like, likeCount, reply, nick, _id } = comment;
            const on = commentOn === _id;

            return (
            <Container key={i} height={on? `${400 + reply.length*200}px`:`${200 + reply.length*200}px`}>
                <CommenterWrap>
                    <ProfileWrap>
                        <Avatar />
                        <span style={{ marginLeft: "10px" }}>{nick}</span>
                    </ProfileWrap>
                        <IconButton aria-controls="fade-menu" data-id={_id} data-commenter={commenter} aria-haspopup="true" onClick={handleClickMenu} >
                        <MoreVert/>
                    </IconButton>
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
                        <MenuItem onClick={handleClickModify}> 수정하기 </MenuItem>
                    </Menu>
                </CommenterWrap>
                <ContentWrap>
                    {content}
                </ContentWrap>
                <InfoWrap>
                    <DateWrap>
                        {getDateString(createAt)}
                    </DateWrap>
                    <ButtonWrap>
                        <Button variant="outlined" color={like? "primary":"default"}>
                            {like} &nbsp;
                            <ThumbUpIcon color={like? "action":"primary"} />
                        </Button>
                        <Button variant="outlined" color="default" data-id={_id} onClick={handleClickComment}>
                            댓글달기
                        </Button>
                    </ButtonWrap>
                </InfoWrap>
                {on && <CommentsInput />}
                <Reply reply={reply} />
            </Container>
        )})
        } 
        {loading && <Loading />}
    </CommentContainer>
    )
}