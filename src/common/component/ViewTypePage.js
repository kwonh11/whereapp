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
//test 중
import {callApiScrap} from '../../common/api';

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
    width: "100%",
    borderBottom: "1px solid #ccc",
    "&:last-child": {
      borderBottom: "none",
    },
  },
});
const DescriptionWrap = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  flex-direction: column;
`;
const ListActionsWrap = styled.div`
  display:flex;
  align-self: flex-end;
  & button: {
    padding:10px;
  }
`;
function ListView({ data }) {
  const classes = useStyles();
  const testHandleOnClickScrap = (article) => {
    callApiScrap(article).catch(err =>console.log(err));
  }
  return (
    <List className={classes.list}>
      {data.map((news, idx) => (
        <ListItem
          alignItems="flex-start"
          key={idx}
          className={classes.listItem}
        >
          <img src={news.image} className={classes.img} />
          <DescriptionWrap>
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
          <ListActionsWrap>
        <Button size="small" color="primary">
          <Link to={`/news/${news.id}`}> 자세히</Link>
        </Button>
        <Button size="small" color="primary" onClick={testHandleOnClickScrap}>
          스크랩
        </Button>
          </ListActionsWrap>
          </DescriptionWrap>
        </ListItem>
      ))}
    </List>
  );
}

function CardView({ data, path }) {
  const classes = useStyles();

  // redux 구축 후 store에서 정확한 article을 매개변수로 사용하는 
  // 로직으로 바꾸기
  const testHandleOnClickScrap = (article) => {
    callApiScrap(article).catch(err =>console.log(err));
  }

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
          <Button size="small" color="primary" onClick={testHandleOnClickScrap}>
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
