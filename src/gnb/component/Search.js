import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  InputBase,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 50px;
  & form {
    width: 100%;
    height: 100%;
  }
`;

const DropContainer = styled(Paper)`
  position: absolute;
  width: 100%;
  top: 52px;
`;
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

export default function Search({
  requestAreaBasedList,
  address,
  predictions,
}) {
  const classes = useStyles();

  // const AutoCompleteList = () => {
  //   console.log("AutoCompleteList");
  //   return (
  //     <DropContainer elevation={3}>
  //       <List dense={true}>
  //         {predictions.map((place) => (
  //           <ListItem>
  //             <ListItemIcon>
  //               <LocationOnIcon />
  //             </ListItemIcon>
  //             <ListItemText
  //               primary={place.structured_formatting.main_text}
  //               secondary={place.structured_formatting.secondary_text}
  //             />
  //           </ListItem>
  //         ))}
  //       </List>
  //     </DropContainer>
  //   );
  // };

  return (
    <Container>
      <Paper component="form" className={classes.root} elevation={3}>
        <Link to="/place">
          <IconButton
            className={classes.iconButton}
            onClick={requestAreaBasedList}
          >
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

        {/* <InputBase
          className={classes.input}
          placeholder="Search"
          // onSubmit={(e) => e.preventDefault()}
          value={address}
          // onKeyUp={handleKeyUp}
          onChange={handleKeyUp}
        /> */}

        {/* <Autocomplete
          className={classes.input}
          freeSolo
          options={predictions.map(
            (option) => option.structured_formatting.main_text
          )}
          renderInput={(params) => (
            <InputBase
              {...params}
              onChange={handleKeyUp}
              placeholder="Search"
              margin="normal"
            />
          )}
        /> */}

        <IconButton type="submit" className={classes.iconButton}>
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* {predictions && AutoCompleteList()} */}
    </Container>
  );
}
