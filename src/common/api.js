import axios from 'axios';
import qs from 'qs';

const axiosConfig = {
  baseURL: 'http://localhost:8000',
};

export function callApiScrap(article) {
  return axios.post("/user/scrap", {}, axiosConfig);
};

// 검색 후 응답되는 배열은
// list 형태로 출력
export function callApiSearchByKeyword(keyword) {
  if(!keyword) return;
  return axios.get(`/news/search/${keyword}`);
}

export function callApiAreaBasedList(latitude, longitude) {
  return axios.get(``)
}


// 유저 위치 재확인후 저장
// redux에 유저 위치 저장하는 로직 필요
export function getUsersLocation() {
  console.log('getUsersLocation');
  let result = {
    latitude: '',
    longitude: '',
    error: false
  };
  const onSuccess = (position) => {
    result.latitude  = position.coords.latitude;
    result.longitude = position.coords.longitude;
    console.log(`latitude : ${result.latitude}, longitude: ${result.longitude}`);
  }
  const onFailure = () => { 
    result.error = true;
  }
  if(!navigator.geolocation) {

  } else {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  }
  return result;
}