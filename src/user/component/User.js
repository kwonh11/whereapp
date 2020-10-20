import {
  AppBar,
  FormControl,
  Paper,
  Select,
  Tab,
  Tabs,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import ViewTypePage from "../../common/component/ViewTypePage";

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
  viewType,
  setPlaceViewType,
}) {
  const classes = useStyles();

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
            setPlaceViewType={setPlaceViewType}
            viewType={viewType}
          />
          <div>
            {/* {makeSelect(["조선", "중앙"], order)}
            {makeSelect(orderList, order)} */}
          </div>
        </FilterWrap>
        <ViewTypePage data={places} viewType={viewType} />
      </ContentsWrap>
    </Paper>
  );
}
