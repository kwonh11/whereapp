import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton, Divider } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "../../common/device";

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 50px;

  & form {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 2px 4px;
    align-items: center;
  }

  @media ${device.tablet} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    & form {
      border: none;
      border-radius: 0px;
      box-shadow: 0 -2px 4px 0 rgba(33, 37, 41, 0.08);
    }
  }
`;

const useStyles = makeStyles({
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
  handleAreaBasedList,
  address,
  predictions,
  handleChangeAddress,
  handleSelectAddress,
}) {
  const classes = useStyles();
  console.log(address);
  return (
    <Autocomplete
      options={predictions}
      getOptionLabel={(option) => option.structured_formatting.main_text}
      onChange={handleSelectAddress}
      renderInput={(params) => (
        <Container>
          <Paper
            variant="outlined"
            ref={params.InputProps.ref}
            component="form"
          >
            <Link to="/place">
              <IconButton
                className={classes.iconButton}
                onClick={handleAreaBasedList}
              >
                <LocationOnIcon />
              </IconButton>
            </Link>
            <Divider className={classes.divider} orientation="vertical" />

            <InputBase
              className={classes.input}
              // inputProps={params.inputProps}
              {...params.inputProps}
              autoFocus
              onChange={handleChangeAddress}
              placeholder="Search"
              value={address}
            />
            <IconButton type="submit" className={classes.iconButton}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Container>
      )}
    />
  );
}
