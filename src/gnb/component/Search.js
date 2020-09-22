import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton, Divider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

export default function Search({ handleGetLocation, address }) {
  const classes = useStyles();

  const [text, setText] = useState("");

  const handleOnChangeText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleSubmitSearchs = (e) => {
    e.preventDefault();
    onSearch(text)
      .then((response, error) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Paper component="form" className={classes.root} elevation={3}>
      <IconButton className={classes.iconButton} onClick={handleGetLocation}>
        <LocationOnIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.input}
        placeholder="Search"
        onChange={handleOnChangeText}
        onSubmit={(e) => e.preventDefault()}
        value={address}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        onClick={handleSubmitSearchs}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
