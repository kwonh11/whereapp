import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:8000",
};


export function callApiScrap(article) {
  return axios.post("/user/scrap", {}, axiosConfig);
};

export function callApiLocationBasedList(location) {
  return axios.get("/location", {
    params: {
      location: location,
    },
  });
};

export function callApiDetailIntro(contentTypeId, contentId) {
  return axios.get("/place", {
    params: {
      contentId,
      contentTypeId,
      mapinfoYN: "Y",
      overviewYN: "Y"
    }
  });
};

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
};

