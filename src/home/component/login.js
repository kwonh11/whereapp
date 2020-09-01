import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#3f63bf",
    borderColor: "#3f63bf",
  },
});

export default function login() {
  const classes = useStyles();
  return (
    <Button variant="outlined" color="primary">
      로그인 / 가입
    </Button>
  );
}
