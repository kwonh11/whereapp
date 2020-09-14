import axios from 'axios';


// test용 데이터
const dumyArticle = {
  title: "뉴스1",
  images: "image",
  content: "content",
  category: "category",
  corp: "google",
  published: "2020-01-01",
  // date타입 server로 이동 후 타입 변환 주의
  createAt: new Date(),
}
const axiosConfig = {
  baseURL: 'http://localhost:8000',
};
const data = {
    article : dumyArticle
}

export function callApiScrap(article) {
  return axios.post("/user/scrap", data, axiosConfig);
};

export function callApiSearchByKeyword(keyword) {
  if(!keyword) return;
  return axios.get(`/news/search/${keyword}`);
}