import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  InputBase,
  IconButton,
  Zoom,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloseIcon from "@material-ui/icons/Close";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import styled, { css } from "styled-components";
import device from "../../common/device";

const useStyles = makeStyles({
  paper: {
    zIndex: 9998,
    width: 360,
    height: 500,
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
  inline: {
    display: "inline",
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

const StyledList = styled(List)`
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

  & .MuiListItem-root {
    display: flex;
    &.me {
      justify-content: flex-end;
      & .MuiListItemText-root span:last-child {
        background: #3f63bf;
        color: #fff;
      }
    }

    &.you {
      justify-content: flex-start;
      & .MuiListItemText-root span:last-child {
        background: #eee;
      }
    }

    & .MuiListItemText-root {
      display: flex;
      flex-direction: column;
      flex: none;

      & span:last-child {
        padding: 0.6rem;
        border-radius: 1rem;
      }
    }
  }
`;
const StyledPaper = styled(Paper)`
  @media ${device.mobileL} {
    &.makeStyles-paper-9 {
      right: 0px;
      bottom: 0px;
      width: 100%;
      height: 82vh;
    }
  } ;
`;

export default function Chat({
  input,
  chatList,
  visual,
  handleClick,
  handleChangeInput,
  handleClickSubmit,
  user,
  count,
  info,
}) {
  console.log("==========Chat");
  console.log(chatList);

  const classes = useStyles();

  return visual ? (
    <Zoom in={visual}>
      <StyledPaper elevation={3} className={classes.paper}>
        <div className={classes.header}>
          <span>{`참여인원 : ${count}`}</span>
          <IconButton onClick={handleClick}>
            <CloseIcon />
          </IconButton>
        </div>
        <StyledList className={classes.contents}>
          {chatList.map((item, idx) => (
            <ListItem
              alignItems="flex-start"
              className={item.nick && item.id === info._id ? "me" : "you"}
            >
              {item.nick && (
                <ListItemAvatar>
                  <Avatar alt={item.nick} src={item.image} />
                </ListItemAvatar>
              )}
              <ListItemText
                primary={
                  item.nick && (
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {item.nick}
                    </Typography>
                  )
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </StyledList>
        <form className={classes.form}>
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
