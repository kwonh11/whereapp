import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton, Zoom } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloseIcon from "@material-ui/icons/Close";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const useStyles = makeStyles({
  paper: {
    zIndex: 9999,
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
  iconButton: {
    zIndex: 9999,
    backgroundColor: "#3f63bf",
    color: "#fff",
    width: 62,
    height: 62,
    position: "fixed",
    bottom: 30,
    right: 30,
    "&:hover": {
      backgroundColor: "#3f63bf",
    },
  },
  icon: {
    width: "80%",
    height: "80%",
  },
});

export default function Chat({ visual, handleClick }) {
  const classes = useStyles();
  return (
    <>
      <IconButton onClick={handleClick} className={classes.iconButton}>
        <ChatBubbleOutlineIcon className={classes.icon} />
      </IconButton>
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
    </>
  );
}
