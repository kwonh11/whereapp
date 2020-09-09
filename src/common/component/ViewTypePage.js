import qs from "qs";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 140,
  },
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

function ListView({ data }) {
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

function CardView({ data, path }) {
  const classes = useStyles();

  return data.map((news, idx) => (
    <Card className={classes.root} key={idx}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={news.image}
          title={news.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {news.title}
          </Typography>
          {path === "/news" && (
            <Typography variant="body2" color="textSecondary" component="p">
              {news.description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/news/${news.id}`}> 자세히</Link>
        </Button>
        {path === "/news" && (
          <Button size="small" color="primary">
            스크랩
          </Button>
        )}
      </CardActions>
    </Card>
  ));
}

const ContentsContainer = styled.div`
  margin-top: 10px;
  ${(props) =>
    props.view === "card" &&
    css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    `}
  ${(props) =>
    props.view === "list" &&
    css`
      display: block;
    `};
`;

function ViewTypePage({ location, data }) {
  console.log(location);
  let query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  if (!Object.keys(query).length) {
    query.view = "card";
  }

  return (
    <ContentsContainer view={query.view}>
      {query.view === "card" ? (
        <CardView data={data} path={location.pathname} />
      ) : (
        <ListView data={data} />
      )}
    </ContentsContainer>
  );
}

export default withRouter(ViewTypePage);
