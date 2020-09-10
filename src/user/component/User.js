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
import ViewTypePage from "../../common/component/ViewTypePage";
import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      style={{ background: "#eae6e6", padding: 15 }}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default function User({ tab }) {
  const classes = useStyles();
  const [value, setValue] = useState(tab === "scrap" ? 0 : 1);
  const [order, setOrder] = useState(0);

  const categoryList = ["scrap", "comment"];
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
            <Tab key={idx} label={item}>
              <Link to={`/user/${item}`}>
                <Tab label={item} />
              </Link>
            </Tab>
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <FilterWrap>
          <ViewTypeBtn />
          <div>
            {makeSelect(["조선", "중앙"], order)}
            {makeSelect(orderList, order)}
          </div>
        </FilterWrap>
        <ViewTypePage data={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FilterWrap>
          <ViewTypeBtn />
          <div>
            {makeSelect(["조선", "중앙"], order)}
            {makeSelect(orderList, order)}
          </div>
        </FilterWrap>
        <ViewTypePage data={data} />
      </TabPanel>
    </div>
  );
}
