import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import ViewSelectFilter from "../../common/component/ViewSelectFilter";
import ViewTypePage from "../../common/component/ViewTypePage";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import styled from "styled-components";
import CATEGORY_CODE from "../../common/categoryCode";

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

const StyledTab = styled(Tab)`
  &.MuiTab-root {
    min-width: auto;
  }
`;

export default function PlaceList({
  place,
  tab,
  handleChangeTab,
  arrange,
  handleChangeArrange,
}) {
  console.log("PlaceList");

  return (
    <>
      <AppBar position="static">
        <Tabs value={tab.idx} onChange={handleChangeTab} variant="fullWidth">
          <StyledTab label="전체" />
          {CATEGORY_CODE.map((item) => (
            <StyledTab key={item.type} id={item.type} label={item.name} />
          ))}
        </Tabs>
      </AppBar>
      <FilterWrap>
        <ViewTypeBtn />
        <ViewSelectFilter
          arrange={arrange}
          handleChangeArrange={handleChangeArrange}
        />
      </FilterWrap>
      <ViewTypePage data={place} />
    </>
  );
}
