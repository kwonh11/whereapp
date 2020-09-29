import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import ViewSelectFilter from "../../common/component/ViewSelectFilter";
import ViewTypePage from "../../common/component/ViewTypePage";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CATEGORY_CODE from "../../common/categoryCode";
import qs from "qs";

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
  order,
  query,
}) {
  console.log("PlaceList");

  return (
    <>
      <AppBar position="static">
        <Tabs value={tab} onChange={handleChangeTab} variant="fullWidth">
          <StyledTab
            label="전체"
            component={Link}
            to={{
              pathname: "/place",
              search: qs.stringify({ ...query }),
            }}
          />
          {CATEGORY_CODE.map((item, idx) => (
            <StyledTab
              key={idx}
              label={item.name}
              component={Link}
              to={{
                pathname: `/place/${item.type}`,
                search: qs.stringify({ ...query }),
              }}
            />
          ))}
        </Tabs>
      </AppBar>
      <FilterWrap>
        <ViewTypeBtn />
        <ViewSelectFilter />
      </FilterWrap>
      <ViewTypePage data={place} />
    </>
  );
}
