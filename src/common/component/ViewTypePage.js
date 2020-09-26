import qs from "qs";
import styled, { css } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@material-ui/core";
//test 중
import { callApiScrap } from "../../common/api";
import Card from "./Card";
import { getCategory } from "../categoryCode";
import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
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
  typeAvatar: {
    fontSize: "small",
    fontWeight: "bold",
    backgroundColor: "#484848",
  },
  green: {
    marginRight: "20px",
    fontSize: "x-small",
    fontWeight: "bold",
    color: "white",
    backgroundColor: blue[800],
  },
  red: {
    marginRight: "20px",
    fontSize: "x-small",
    fontWeight: "bold",
    color: "white",
    backgroundColor: red[900],
  },
});

const Badge = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 15px;
  border: 2px solid ${(props) => (props.color === "red" ? "red" : "green")};
  padding: 4px;
  margin: 0 3px;
  color: ${(props) => (props.color === "red" ? "red" : "green")};
`;

const IconWrap = styled.div`
  display: flex;
  & .MuiAvatar-root {
    margin-right: 10px;
    & + & {
      margin-right: 10px;
    }
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 10px;
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
          <div>
            <div>
              <TitleWrap>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="h6"
                      color="textPrimary"
                    >
                      {place.title}
                    </Typography>
                  }
                />
                {place.readcount >= 2000 && <Badge color="red"> 추천 </Badge>}

                {place.dist < 1000 && <Badge color="green"> 가까움 </Badge>}
              </TitleWrap>
              <ListItemText primary={place.addr1} secondary={place.addr2} />
              <ListItemText primary={place.tel} />
            </div>

            <IconWrap>
              <Avatar className={classes.typeAvatar}>
                {
                  getCategory(place.contenttypeid)
                }
              </Avatar>
              <Avatar
                className={place.dist >= 1000 ? classes.red : classes.green}
              >
                {`${place.dist / 1000}km`}
              </Avatar>
            </IconWrap>
          </div>
        </ListItem>
      ))}
    </List>
  );
}

function CardView({ data }) {
  return data.map((place, idx) => <Card key={idx} place={place} />);
}

const ContentsContainer = styled.div`
  width: 100%;
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
