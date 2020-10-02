import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton, Divider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

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

export default function Search({ requestAreaBasedList, address }) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} elevation={3}>
      <Link to="/place">
        <IconButton className={classes.iconButton} onClick={requestAreaBasedList}>
          <LocationOnIcon />
        </IconButton>
      </Link>
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.input}
        placeholder="Search"
        onSubmit={(e) => e.preventDefault()}
        value={address}
      />
      <IconButton type="submit" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
