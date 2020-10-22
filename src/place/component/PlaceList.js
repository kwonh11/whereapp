import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import ViewSelectFilter from "../../common/component/ViewSelectFilter";
import ViewTypePage from "../../common/component/ViewTypePage";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import styled from "styled-components";
import { Skeleton } from "@material-ui/lab";
import CATEGORY from "../../common/categoryCode";

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

const StyledTabs = styled(Tabs)`
  display: flex;
`;

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
  setPlaceViewType,
  viewType,
}) {
  const [tab, setTab] = React.useState(0);
  React.useEffect(() => {
    const index = CATEGORY.findIndex((item) => item.id === categoryCode) + 1;
    setTab(index >= 1 ? index : 0);
  }, []);

  const handleClickTab = (tab, categoryId) => {
    setTab(tab);
    handleSelectTab(categoryId);
  };

  return (
    <>
      <AppBar position="static">
        <StyledTabs value={tab} variant="scrollable">
          <Tab label="전체" onClick={() => handleClickTab(0, "")} />
          {CATEGORY.map((item, idx) => (
            <Tab
              key={idx + 1}
              label={item.name}
              onClick={() => {
                handleClickTab(idx + 1, item.id);
              }}
            />
          ))}
        </StyledTabs>
      </AppBar>
      <FilterWrap>
        <ViewTypeBtn setPlaceViewType={setPlaceViewType} viewType={viewType} />
        <ViewSelectFilter />
      </FilterWrap>
      {isLoading ? (
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
      ) : (
        <ViewTypePage
          data={placeList}
          viewType={viewType}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
