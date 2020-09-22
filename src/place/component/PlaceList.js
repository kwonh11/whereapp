import { useState } from "react";
import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import ViewTypePage from "../../common/component/ViewTypePage";

const data = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
// https://www.npmjs.com/package/@react-google-maps/api
// 요기요 따라하자

export default function NewsList() {

  return (
    <div>
      <ViewTypeBtn />
      <ViewTypePage data={data} />
    </div>
  );
}
