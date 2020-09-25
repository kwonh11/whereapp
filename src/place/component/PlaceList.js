import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import ViewSelectFilter from "../../common/component/ViewSelectFilter";
import ViewTypePage from "../../common/component/ViewTypePage";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import qs from "qs";
import styled from "styled-components";

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

const category = [
  { title: "전체" },
  { title: "관광지", id: 12 },
  { title: "문화", id: 14 },
  { title: "축제", id: 15 },
  { title: "여행코스", id: 25 },
  { title: "레포츠", id: 28 },
  { title: "숙박", id: 32 },
  { title: "쇼핑", id: 38 },
  { title: "음식점", id: 39 },
];

export default function PlaceList({
  place,
  query,
  tab,
  handleSelectTab,
  order,
}) {
  console.log("PlaceList");

  return (
    <>
      <AppBar position="static">
        <Tabs value={tab}>
          {category.map((item, idx) => (
            <Tab
              key={idx}
              label={item.title}
              component={Link}
              to={{
                pathname: "/place",
                search: qs.stringify({ ...query, tab: item.id }),
              }}
              onClick={() => handleSelectTab(item.id, idx)}
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
