import axios from "axios";
import qs from "qs";

const axiosConfig = {
  baseURL: "http://localhost:8000",
};
const Comments = [
  {
    commenter: "ggyu",
    content: "여기 가보고 싶어요",
    createAt: Date.now().toLocaleString,
  },
  { 
    commenter: "ggyu",
    content: "여기 가보고 싶어요",
    createAt: Date.now().toLocaleString,
  }
];

// 데이터 추가하는 부분 만들기 , 클로저 이용한 레퍼런스 제거
export function callApiComments(page) {
  console.log(`page ${page}에 해당하는 데이터 목록 FETCH`);
  return new Promise((resolve,reject)=> {
    resolve(Comments);
  })
}
export function callApiScrap(article) {
  return axios.post("/user/scrap", {}, axiosConfig);
};

// 검색 후 응답되는 배열은
// list 형태로 출력
export function callApiSearchByKeyword(keyword) {
  if (!keyword) return;
  return axios.get(`/news/search/${keyword}`);
}

export function callApiAreaBasedList(latitude, longitude) {
  return axios.get(``);
}

// 유저 위치 재확인후 저장
// redux에 유저 위치 저장하는 로직 필요
export function getUsersLocation() {
  console.log("getUsersLocation");

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((loc) => {
        resolve({ lat: loc.coords.latitude, lng: loc.coords.longitude });
      });
    });
  };

  return getLocation();
}
