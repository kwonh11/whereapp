import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton, Zoom } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloseIcon from "@material-ui/icons/Close";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import styled, { css } from "styled-components";

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

export default function Chat({ visual, handleClick }) {
  const classes = useStyles();
  return visual ? (
    <Zoom in={visual}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.header}>
          <span>참여인원</span>
          <IconButton onClick={handleClick}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.contents}></div>
        <form className={classes.form}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <InputBase
            className={classes.inputBase}
            placeholder="메세지를 입력해주세요."
          />
          <IconButton>
            <SendIcon />
          </IconButton>
        </form>
      </Paper>
    </Zoom>
  ) : (
    <ChatBtn onClick={handleClick} className={classes.iconButton}>
      <ChatBubbleOutlineIcon className={classes.icon} />
    </ChatBtn>
  );
}
