import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import getDateString from "../../common/getDateString";
import device from "../../common/device";

const ReplyContainer = styled.div`
  width: 100%;
  height: 200px;
  padding-left: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  @media ${device.tablet} {
    padding-left: 5px;
    border-left: #f1f1f1 solid 5vw;
  } ;
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
const Nick = styled.span`
  margin-left: 10px;
  @media ${device.tablet} {
    margin-left: 5px;
    font-size: 15px;
  } ;
`;

export default function Reply(props) {
  const { loginUser, reply, commentId, deleteReply } = props;

  const handleDeleteReply = (e) => {
    const { replyId } = e.currentTarget.dataset;
    deleteReply(commentId, replyId);
  };
  return (
    <React.Fragment>
      {reply.map((rep, i) => {
        const { commenter, nick, content, createAt, _id } = rep;
        return (
          <ReplyContainer key={i}>
            <CommenterWrap>
              <ProfileWrap>
                <Avatar />
                <Nick>{nick}</Nick>
              </ProfileWrap>
              {loginUser === commenter && (
                <IconButton
                  data-commenter={commenter}
                  data-reply-id={_id}
                  onClick={handleDeleteReply}
                >
                  <DeleteForever />
                </IconButton>
              )}
            </CommenterWrap>
            <ContentWrap>{content}</ContentWrap>
            <InfoWrap>
              <DateWrap>{getDateString(createAt)}</DateWrap>
            </InfoWrap>
          </ReplyContainer>
        );
      })}
    </React.Fragment>
  );
}
