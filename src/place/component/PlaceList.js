import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import ViewSelectFilter from "../../common/component/ViewSelectFilter";
import ViewTypePage from "../../common/component/ViewTypePage";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import styled from "styled-components";
import { Skeleton } from "@material-ui/lab";

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;
const ContentsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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

const SkeletonCard = () => (
  <div>
    <Skeleton width={310} height={230} />
    <Skeleton width={100} height={50} />
    <Skeleton width={200} height={20} />
    <Skeleton width={310} height={40} />
  </div>
);

export default function PlaceList({
  placeList,
  isLoading,
  handleSelectTab,
  categoryCode,
  setPlaceListType,
  listType,
}) {
  const [tab, setTab] = React.useState(0);
  React.useEffect(()=>{
    const index = category.findIndex(item => item.id === categoryCode);
    setTab(index > 0 ? index: 0);
  } ,[]);

  const handleClickTab = (tab, categoryId) => {
    setTab(tab);
    handleSelectTab(categoryId);
  } 
  return (
    <>
      <AppBar position="static">
        <Tabs value={tab}>
          {category.map((item, idx) => (
            <Tab
              key={idx}
              label={item.title}
              onClick={() => {
                handleClickTab(idx, item.id);
              }}
            />
          ))}
        </Tabs>
      </AppBar>
      <FilterWrap>
        <ViewTypeBtn setPlaceListType={setPlaceListType} listType={listType}/>
        <ViewSelectFilter />
      </FilterWrap>
      {
        isLoading?
        (
          <ContentsContainer>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </ContentsContainer>
        ):
        (
          <ViewTypePage data={placeList} listType={listType} isLoading={isLoading}/>
        )
      }
    </>
  );
}
