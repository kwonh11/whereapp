import styled from "styled-components";
import { Button, Avatar, Menu, MenuItem, TextField } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { MoreVert } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Loading from "../../common/component/Loading";
import CommentsInput from "./CommentsInput";
import getDateString from "../../common/getDateString";
import Reply from "./Reply";
import device from "../../common/device";

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  padding: 30px;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 10px;
  margin: 20px 20px 100px 20px;
  @media ${device.tablet} {
    padding: 5px;
  } ;
`;
const Container = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease-out;
  @media ${device.tablet} {
    padding: 5px;
  } ;
`;
const ContentWrap = styled.div`
  width: 100%;
  justify-self: flex-start;
  font-size: 0.9rem;
  padding: 20px;
  margin-bottom: 10px;
  @media ${device.tablet} {
    padding: 10px;
    font-size: 12px;
  } ;
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
  @media ${device.tablet} {
    font-size: 10px;
    height: 15px;
    text-align: center;
  } ;
`;
const FilterWrap = styled.div`
  width: 100%;
  height: 50px;
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
  @media ${device.tablet} {
    margin: 15px 0;
  } ;
`;
const ByRegisteredButton = styled(Button)`
  margin: 0 5px;
  & .MuiButton-label {
    font-size: 1.1rem;
    font-weight: ${(props) => (props.sort === "registered" ? "bold" : "unset")};
    color: ${(props) => (props.sort === "registered" ? "#2c0097" : "darkgray")};
  }
  @media ${device.tablet} {
    & .MuiButton-label {
      font-size: 14px;
    }
  } ;
`;
const ByRecentButton = styled(Button)`
  margin: 0 5px;
  & .MuiButton-label {
    font-size: 1.1rem;
    font-weight: ${(props) => (props.sort === "recent" ? "bold" : "unset")};
    color: ${(props) => (props.sort === "recent" ? "#2c0097" : "darkgray")};
  }
  @media ${device.tablet} {
    & .MuiButton-label {
      font-size: 14px;
    }
  }
`;
const ByLikeButton = styled(Button)`
  margin: 0 5px;
  & .MuiButton-label {
    font-size: 1.1rem;
    font-weight: ${(props) => (props.sort === "like" ? "bold" : "unset")};
    color: ${(props) => (props.sort === "like" ? "#2c0097" : "darkgray")};
  }
  @media ${device.tablet} {
    & .MuiButton-label {
      font-size: 14px;
    }
  } ;
`;
const Nick = styled.span`
  margin-left: 10px;
  @media ${device.tablet} {
    margin-left: 5px;
    font-size: 15px;
  } ;
`;
const ButtonWrap = styled.div`
  @media ${device.tablet} {
    & .MuiButton-outlined {
      padding: 2px 4px;
    }
    & .MuiSvgIcon-root {
      font-size: 15px;
    }
    & .MuiButton-label {
      font-size: 12px;
    }
  } ;
`;

export default function Comments(props) {
  const {
    comments,
    deleteComment,
    updateComment,
    contentId,
    addReply,
    addLike,
    loginUser,
    deleteReply,
    setSnackOpen,
    setSnackContent,
    isLoadingComments,
    sortKey,
    setSortKey,
  } = props;
  const [replyOn, setReplyOn] = React.useState(null);
  const [modifyOn, setModifyOn] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modifyingInput, setModifyingInput] = React.useState("");
  const open = Boolean(anchorEl);

  const handleClickSort = (e) => {
    setSortKey(e.currentTarget.dataset.key);
  };
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClickReply = (e) => {
    setModifyOn(null);
    setReplyOn(e.currentTarget.parentElement.dataset.id);
  };
  const handleClickDelete = (e) => {
    const _id = anchorEl.dataset.id;
    deleteComment(_id);
    handleCloseMenu();
  };
  const handleClickModifyButton = (e) => {
    setReplyOn(null);
    setModifyOn(anchorEl.dataset.id);
    setModifyingInput(anchorEl.dataset.content);
    handleCloseMenu();
  };
  const handleSubmitModify = (e) => {
    if (!loginUser) {
      setSnackContent("로그인 후 이용해주세요.");
      setSnackOpen(true);
      return;
    }
    if (!modifyingInput) {
      setSnackContent("1글자 이상 300글자 이하로 작성해주세요.");
      setSnackOpen(true);
      return;
    }
    if (modifyingInput.length > 300) {
      setSnackContent("1글자 이상 300글자 이하로 작성해주세요.");
      setSnackOpen(true);
      return;
    }
    updateComment(e.currentTarget.dataset.id, modifyingInput);
    setReplyOn(null);
    setModifyOn(null);
  };
  const handleChangeModifyingInput = (e) => {
    setModifyingInput(e.target.value);
  };
  const handleClickLike = (e) => {
    if (!loginUser) {
      setSnackContent("로그인 후 이용해주세요.");
      setSnackOpen(true);
      return;
    }
    addLike(e.currentTarget.parentElement.dataset.id);
  };

  return (
    <CommentContainer>
      {isLoadingComments ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : comments.length === 0 ? ("등록된 댓글이 없습니다."
      ) : (
        <React.Fragment>
          <FilterWrap>
            <ByRegisteredButton
              sort={sortKey}
              data-key="registered"
              onClick={handleClickSort}
            >
              {" "}
              등록순{" "}
            </ByRegisteredButton>
            |
            <ByRecentButton
              sort={sortKey}
              data-key="recent"
              onClick={handleClickSort}
            >
              {" "}
              최신순{" "}
            </ByRecentButton>
            |
            <ByLikeButton
              sort={sortKey}
              data-key="like"
              onClick={handleClickSort}
            >
              {" "}
              좋아요순{" "}
            </ByLikeButton>
          </FilterWrap>

          {comments.map((comment, i) => {
            const {
              commenter,
              content,
              createAt,
              like,
              reply,
              nick,
              _id,
            } = comment;
            const contentWithLine = content ? content.split(/\r\n|\r|\n/) : [];
            const isLiked = like.includes(commenter);
            return (
              <Container key={_id} replyOn={replyOn === _id ? "on" : ""}>
                <CommenterWrap>
                  <ProfileWrap>
                    <Avatar />
                    <Nick>{nick}</Nick>
                  </ProfileWrap>
                  {
                    // 내가 쓴 글일 경우 옵션버튼 노출
                    loginUser === commenter && (
                      <IconButton
                        aria-controls="fade-menu"
                        aria-haspopup="true"
                        data-id={_id}
                        data-content={content}
                        onClick={handleClickMenu}
                      >
                        <MoreVert />
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
                    <MenuItem onClick={handleClickModifyButton}>
                      {" "}
                      수정하기{" "}
                    </MenuItem>
                  </Menu>
                </CommenterWrap>
                {modifyOn === _id ? (
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
                      onClick={handleSubmitModify}
                      style={{ margin: "10px 0 0 auto", display: "flex" }}
                    >
                      수정완료
                    </Button>
                  </ContentWrap>
                ) : (
                  <ContentWrap>
                    {contentWithLine
                      ? contentWithLine.map((line, i) => (
                          <React.Fragment key={i}>
                            {line} <br />
                          </React.Fragment>
                        ))
                      : content}
                  </ContentWrap>
                )}
                <InfoWrap>
                  <DateWrap>{getDateString(createAt)}</DateWrap>
                  <ButtonWrap data-id={_id}>
                    <Button
                      variant="outlined"
                      color={isLiked ? "primary" : "default"}
                      onClick={handleClickLike}
                    >
                      {like.length} &nbsp;
                      <ThumbUpIcon color={isLiked ? "primary" : "action"} />
                    </Button>
                    <Button
                      variant="outlined"
                      color="default"
                      onClick={handleClickReply}
                    >
                      댓글달기
                    </Button>
                  </ButtonWrap>
                </InfoWrap>
                {replyOn === _id && (
                  <CommentsInput
                    setSnackOpen={setSnackOpen}
                    setSnackContent={setSnackContent}
                    isReply={true}
                    commentId={_id}
                    addReply={addReply}
                    contentId={contentId}
                    commenter={commenter}
                  />
                )}
                <Reply
                  reply={reply}
                  loginUser={loginUser}
                  commentId={_id}
                  deleteReply={deleteReply}
                />
              </Container>
            );
          })}
        </React.Fragment>
      )}
    </CommentContainer>
  );
}
