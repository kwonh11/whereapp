import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton, Zoom } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloseIcon from "@material-ui/icons/Close";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import styled from "styled-components";
import device from "../../common/device";

const useStyles = makeStyles({
  paper: {
    zIndex: 9998,
    width: 400,
    height: 600,
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    bottom: 30,
    right: 30,
  },
  header: {
    height: 60,
    display: "flex",
    alignItems: "center",
    padding: 10,
    "& span": {
      flex: 1,
    },
  },
  contents: {
    flex: 1,
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  form: {
    height: 57,
    display: "flex",
  },
  inputBase: {
    flex: 1,
  },
  icon: {
    width: "80%",
    height: "80%",
  },
});

const ChatBtn = styled(IconButton)`
  &.MuiButtonBase-root {
    z-index: 9999;
    color: #fff;
    right: 30px;
    width: 62px;
    bottom: 30px;
    height: 62px;
    position: fixed;
    background-color: #3f63bf;
    &.MuiButtonBase-root:hover {
      background-color: #3f63bf;
    }
  }
`;

const ChatWrap = styled.ul`
  /* list-style: none; */
  margin: 0;
  padding: 0;
  flex: 1;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .you + & .me {
    border-bottom-right-radius: 5px;
  }

  & li {
    padding: 9px;
    border-radius: 30px;
    margin-bottom: 2px;

    /* &.you + &.me {
      border-bottom-right-radius: 5px;
    } */

    &.you {
      background: #eee;
      align-self: flex-start;
    }

    &.me {
      align-self: flex-end;
      background: #3f63bf;
      color: #fff;

      &.me + &.me {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      &:last-of-type {
        border-bottom-right-radius: 30px;
      }
    }
  }
`;
const StyledPaper = styled(Paper)`
  @media ${device.mobileL} {
    &.makeStyles-paper-8 {
      right: 0px !important;
      bottom: 0px !important;
      width: 100% !important;
      height: 100% !important;
    }
  } ;
`;
const Notice = styled.li`
  font-weight: bold;
  color: #024a73;
`;

function Chat({
  input,
  chatList,
  visual,
  handleClick,
  handleChangeInput,
  handleClickSubmit,
  nick,
  userId,
  listRef,
}) {
  const classes = useStyles();

  return visual ? (
    <Zoom in={visual}>
      <StyledPaper elevation={3} className={classes.paper}>
        <div className={classes.header}>
          <span>{`참여인원 :  `}</span>
          <IconButton onClick={handleClick}>
            <CloseIcon />
          </IconButton>
        </div>
        <ChatWrap className={classes.contents} ref={listRef}>
          {chatList.map((item, idx) => {
            if (item.userId === "system") {
              return (
                <Notice key={idx}>
                  {`${item.message} `}
                </Notice>
              );
            } else if (item.userId === userId) {
              return (
                <li className="me" key={idx}>
                  {`${item.message} `}
                </li>
              );
            } else {
              return (
                <li className="you" key={idx}>
                  {`${item.nick} : ${item.message} `}
                </li>
              );
            }
          })}
        </ChatWrap>
        <form className={classes.form} onSubmit={handleClickSubmit}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <InputBase
            className={classes.inputBase}
            value={input}
            placeholder="메세지를 입력해주세요."
            onChange={handleChangeInput}
          />
          <IconButton onClick={handleClickSubmit}>
            <SendIcon />
          </IconButton>
        </form>
      </StyledPaper>
    </Zoom>
  ) : (
    <ChatBtn onClick={handleClick} className={classes.iconButton}>
      <ChatBubbleOutlineIcon className={classes.icon} />
    </ChatBtn>
  );
}

export default React.forwardRef(Chat);
