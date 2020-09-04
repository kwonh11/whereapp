import { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import CardView from "../../common/component/CardView";
import ListView from "../../common/component/ListView";

const data = [
  {
    image:
      "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
    category: "MASK",
    title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
    description:
      "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
    originalLink: "https://devhyuk.com",
    date: new Date().toString(),
    company: "조선일보",
  },
  {
    image: "https://www.boannews.com/media/upFiles2/2020/08/571615334_9555.jpg",
    category: "IT",
    title: "인스타그램 고객 지원센터 위장한 공격자들 주의보",
    description:
      "팔로워 많은 계정 노리는 공격, 인스타그램 고객 지원 센터인 척 가장 공격 성공률 좋은 편...문법과 철자 오류 유의한다면 어느 정도 방어 가능",
    originalLink: "https://devhyuk.com",
    date: new Date().toString(),
    company: "보안뉴스",
  },
  {
    image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
    category: "IT",
    title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
    description:
      "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
    originalLink: "https://devhyuk.com",
    date: new Date().toString(),
    company: "보안뉴스",
  },
  {
    image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
    category: "IT",
    title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
    description:
      "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
    originalLink: "https://devhyuk.com",
    date: new Date().toString(),
    company: "보안뉴스",
  },
  {
    image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
    category: "IT",
    title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
    description:
      "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
    originalLink: "https://devhyuk.com",
    date: new Date().toString(),
    company: "보안뉴스",
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  list: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
  img: {
    width: 250,
    height: 160,
    marginRight: 38,
  },
  listItem: {
    borderBottom: "1px solid #ccc",
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

const ContentsContainer = styled.div`
  display: ${(props) => (props.view === "card" ? "flex" : "block")};
`;

export default function NewsList() {
  const classes = useStyles();

  const [view, setView] = useState("card");

  const handleView = (event, newView) => {
    setView(newView);
  };

  return (
    <div>
      <ToggleButtonGroup value={view} exclusive onChange={handleView}>
        <ToggleButton value="card">
          <ViewModuleIcon />
        </ToggleButton>
        <ToggleButton value="list">
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <ContentsContainer view={view}>
        {view === "card" ? <CardView data={data} /> : <ListView data={data} />}
      </ContentsContainer>
    </div>
  );
}
