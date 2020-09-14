import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
});

export default function Search(props) {
  const classes = useStyles();
  const { onSearch } = props;
  const [text, setText] = React.useState('');

  const handleOnChangeText = e => {
    e.preventDefault();
    setText(e.target.value);
  }
  const handleSubmitSearchs = (e) => {
    e.preventDefault();
    onSearch(text).then((response, error)=>{
      console.log(JSON.stringify(response.data));
    }).catch(err=> console.log(err));
  };

  return (
    <div>
      <Paper component="form" className={classes.root} elevation={3}>
        <InputBase 
        className={classes.input} 
        placeholder="Search" 
        onChange={handleOnChangeText}
        onSubmit={(e)=> e.preventDefault()}/>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={handleSubmitSearchs}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
