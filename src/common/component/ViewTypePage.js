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
import Card from "./Card";
import { getCategory } from "../categoryCode";
import { blue, red } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { actions } from "../reducer/detail";
import device from "../../common/device";

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

  @media ${device.tablet} {
    padding: 2px;
    border-width: 1px;
    font-weight: normal;
    font-size: 10px;
  }
`;

const IconWrap = styled.div`
  display: flex;
  & .MuiAvatar-root {
    margin-right: 10px;
    @media ${device.tablet} {
      font-weight: normal;
      width: 34px;
      height: 34px;
      font-size: 10px;
    }
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 10px;
  @media ${device.tablet} {
    & .MuiListItemText-root span.MuiTypography-root {
      font-size: 12px;
      font-weight: bold;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      width: 100%;
    }
  }
`;

const StyledList = styled(List)`
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.laptop} {
    grid-template-columns: none;
  }

  @media ${device.tablet} {
    & .MuiListItemText-root span,
    p {
      font-size: 10px;
    }
    & li a img {
      width: 150px;
      height: 100px;
      margin-right: 8px;
    }
  }
`;

const DescWrap = styled.div`
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

function ListView({ data }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const setIds = React.useCallback(
    (contentTypeId, contentId) => {
      dispatch(actions.setIds({ contentTypeId, contentId }));
    },
    [dispatch]
  );
  const setPlace = React.useCallback(
    (place) => {
      dispatch(
        actions.setPlace({
          ...place,
          isClose: place.dist <= 1000,
        })
      );
    },
    [dispatch]
  );

  const handleClickList = (contentTypeId, contentId, place) => {
    setIds(contentTypeId, contentId);
    setPlace(place);
  };

  return (
    <StyledList>
      {data.map((place, idx) => {
        const { contenttypeid, contentid } = place;
        return (
          <ListItem
            alignItems="flex-start"
            key={idx}
            className={classes.listItem}
          >
            <Link to={`/place/${contenttypeid}/${contentid}`}>
              <img
                src={place.firstimage}
                className={classes.img}
                onClick={() => handleClickList(contenttypeid, contentid, place)}
              />
            </Link>
            <DescWrap>
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
                    secondary={
                      <>
                        {place.readcount >= 2000 && (
                          <Badge color="red"> 추천 </Badge>
                        )}
                        {place.dist < 1000 && (
                          <Badge color="green"> 가까움 </Badge>
                        )}
                      </>
                    }
                  />
                </TitleWrap>
                <ListItemText primary={place.addr1} secondary={place.addr2} />
                <ListItemText primary={place.tel} />
              </div>

              <IconWrap>
                <Avatar className={classes.typeAvatar}>
                  {getCategory(place.contenttypeid)}
                </Avatar>
                <Avatar
                  className={place.dist >= 1000 ? classes.red : classes.green}
                >
                  {`${place.dist / 1000}km`}
                </Avatar>
              </IconWrap>
            </DescWrap>
          </ListItem>
        );
      })}
    </StyledList>
  );
}
function CardView({ data }) {
  return data.map((place, idx) => (
    <Card
      key={idx}
      place={{
        ...place,
        isClose: place.dist <= 1000,
        isPopular: place.readcount >= 3000,
        isOnline: place.addr1 && place.addr1.includes("온라인"),
      }}
      simple={true}
    />
  ));
}

const ContentsContainer = styled.div`
  padding: 0 10px;
  width: 100%;
  ${(props) =>
    props.view === "card" &&
    css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      justify-content: center;
      & .MuiPaper-root {
        height: 380px !important;
      }
      & .MuiTypography-root span {
        font-size: 10px;
        border: 1px;
        padding: 1px;
      }

      @media ${device.laptopM} {
        grid-template-columns: repeat(3, 330px);
        gap: 30px;
      }
      @media ${device.laptop} {
        grid-template-columns: repeat(3, 250px);
        gap: 10px;
        & .MuiPaper-root {
          height: 320px !important;
        }
      }
      @media ${device.tablet} {
        grid-template-columns: repeat(2, 230px);
        gap: 10px;
        & .MuiPaper-root {
          height: 260px !important;
        }
      }
      @media ${device.mobileL} {
        grid-template-columns: repeat(2, 160px);
        gap: 3px;
        & .MuiPaper-root {
          height: 200px !important;
        }
      }
    `}
  ${(props) =>
    props.view === "list" &&
    css`
      display: block;
    `};
  & .MuiPaper-root {
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
    width: 100%;
    min-width: 300px;
    height: 350px;
    margin: 0;
    transition: opacity 0.4s ease-out;
    opacity: ${(props) => (props.isLoading ? 0.3 : 1)};

    @media ${device.laptop} {
      min-width: 246px;
      height: 288px;
    }

    @media ${device.tablet} {
      * {
        font-size: 12px;
      }
      min-width: 150px;
      height: 200px;

      & .MuiCardHeader-root {
        padding: 4px;

        & .MuiCardHeader-content {
          & span {
            font-size: 12px;
          }
        }

        & .MuiCardHeader-subheader span {
          font-size: 10px;
          font-weight: normal;
          border-width: 1px;
          padding: 2px;
          margin-right: 0;
        }
      }

      & .MuiCardContent-root {
        padding: 0px 4px;
        & p {
          font-size: 10px;
        }
      }

      & .MuiCardActions-root {
        padding: 4px;
        & .MuiButtonBase-root {
          padding: 0 10px 0 0;
          & span svg {
            font-size: 18px;
          }
        }
      }

      & .MuiAvatar-root {
        height: 30px;
        width: 30px;
        font-size: 10px;
        font-weight: normal;
      }
    }
  }
`;

function ViewTypePage({ viewType, data, isLoading }) {
  return (
    <ContentsContainer view={viewType} isLoading={isLoading}>
      {viewType === "card" ? (
        <CardView data={data} />
      ) : (
        <ListView data={data} />
      )}
    </ContentsContainer>
  );
}

export default withRouter(ViewTypePage);
