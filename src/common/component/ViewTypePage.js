import qs from "qs";
import styled, { css } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
//test 중
import { callApiScrap } from "../../common/api";
import Card from "./Card";

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
    width: "100%",
    borderBottom: "1px solid #ccc",
    "&:last-child": {
      borderBottom: "none",
    },
  },
});
const DescriptionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const ListActionsWrap = styled.div`
  display: flex;
  align-self: flex-end;
  /* & button: {
    padding: 10px;
  } */
`;

function ListView({ data }) {
  const classes = useStyles();
  const testHandleOnClickScrap = (article) => {
    callApiScrap(article).catch((err) => console.log(err));
  };
  return (
    <List className={classes.list}>
      {data.map((place, idx) => (
        <ListItem
          alignItems="flex-start"
          key={idx}
          className={classes.listItem}
        >
          <img src={place.firstimage} className={classes.img} />
          <DescriptionWrap>
            <ListItemText
              primary={place.title}
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {place.addr1}
                </Typography>
              }
            />
            <ListActionsWrap>
              <Button size="small" color="primary">
                <Link to={`/place/${place.contentid}`}> 자세히</Link>
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={testHandleOnClickScrap}
              >
                스크랩
              </Button>
            </ListActionsWrap>
          </DescriptionWrap>
        </ListItem>
      ))}
    </List>
  );
}

function CardView({ data }) {
  // redux 구축 후 store에서 정확한 article을 매개변수로 사용하는
  // 로직으로 바꾸기
  const testHandleOnClickScrap = (article) => {
    callApiScrap(article).catch((err) => console.log(err));
  };

  return data.map((place, idx) => <Card key={idx} item={place} />);
}

const ContentsContainer = styled.div`
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
  & .MuiPaper-root {
    min-width: 300px;
    width: 310px;
    height: 350px;
    margin: 0;

    & .MuiCardHeader-title {
      flex: 1;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

function ViewTypePage({ location, data }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  if (!Object.keys(query).length) {
    query.view = "card";
  }

  return (
    <ContentsContainer view={query.view}>
      {query.view === "card" ? (
        <CardView data={data} />
      ) : (
        <ListView data={data} />
      )}
    </ContentsContainer>
  );
}

export default withRouter(ViewTypePage);
