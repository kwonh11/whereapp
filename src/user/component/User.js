import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  FormControl,
  Select,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";
import ViewTypePage from "../../common/component/ViewTypePage";
import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import styled from "styled-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  formControl: {
    margin: 4,
    minWidth: 120,
  },
});

const ContentsWrap = styled.div`
  padding: 10px;
`;

const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function User({
  tabValue,
  places,
  handleChangeTab,
  listType,
  setPlaceListType,
}) {
  const classes = useStyles();

  const categoryList = ["scrap", "comment"];
  const orderList = ["push", "latest", "comments"];

  const makeSelect = (selectList, value) => {
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <Select native value={value} onChange={handleChange}>
          {selectList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <Paper>
      <AppBar position="static" color="default">
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="좋아요" component={Link} to="/user/heart" />
          <Tab label="내 댓글" component={Link} to="/user/comment" />
        </Tabs>
      </AppBar>
      <ContentsWrap>
        <FilterWrap>
          <ViewTypeBtn
            setPlaceListType={setPlaceListType}
            listType={listType}
          />
          <div>
            {/* {makeSelect(["조선", "중앙"], order)}
            {makeSelect(orderList, order)} */}
          </div>
        </FilterWrap>
        <ViewTypePage data={places} />
      </ContentsWrap>
    </Paper>
  );
}
