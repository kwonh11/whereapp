import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Tabs,
  Tab,
  AppBar,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
} from "@material-ui/core";
import CardView from "../../common/component/CardView";
import ListView from "../../common/component/ListView";
import styled from "styled-components";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

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
    backgroundColor: "#3f63bf",
    borderColor: "#3f63bf",
  },
  formControl: {
    margin: 4,
    minWidth: 120,
  },
});

const ContentsContainer = styled.div`
  display: ${(props) => (props.view === "card" ? "flex" : "block")};
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      style={{ background: "#ccc" }}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default function User() {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [order, setOrder] = useState(0);

  const categoryList = ["내 정보", "스크랩", "내 댓글"];
  const orderList = ["push", "latest", "comments"];
  //담은 순, 최신 순, 댓글 많은 순

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [view, setView] = useState("card");

  const handleView = (event, newView) => {
    setView(newView);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {categoryList.map((item, idx) => (
            <Tab key={idx} value={idx} label={item} />
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" gutterBottom>
            닉네임
          </Typography>
          <TextField variant="outlined" placeholder="닉네임" />
        </div>
        <div>
          <Button variant="contained" color="secondary">
            탈퇴
          </Button>
          <Button variant="contained" color="secondary">
            저장
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <ToggleButtonGroup value={view} exclusive onChange={handleView}>
            <ToggleButton value="card">
              <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="list">
              <ViewListIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          {makeSelect(["조선", "중앙"], order)}
          {makeSelect(orderList, order)}
        </div>
        <ContentsContainer view={view}>
          {view === "card" ? (
            <CardView data={data} />
          ) : (
            <ListView data={data} />
          )}
        </ContentsContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
