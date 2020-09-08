import { makeStyles } from "@material-ui/core/styles";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
  img: {
    width: 250,
    height: 160,
    marginRight: 20,
  },
  listItem: {
    padding: "8px 0",
    borderBottom: "1px solid #ccc",
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

export default function ListView({ data }) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {data.map((news, idx) => (
        <ListItem
          alignItems="flex-start"
          key={idx}
          className={classes.listItem}
        >
          <img src={news.image} className={classes.img} />
          <ListItemText
            primary={news.title}
            secondary={
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {news.description}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
