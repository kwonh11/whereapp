import axios from "axios";

export function callApiGetAddress(location) {
  return axios.get("/location", {
    params: {
      location: location,
    },
  });
}

export function callApiBestList(regionCode) {
  return axios.get(`/location/best/${regionCode}`);
}

export function callApiDetailIntro(contentTypeId, contentId) {
  return axios.get("/place", {
    params: {
      contentId,
      contentTypeId,
    },
  });
}

// 유저 위치 확인
export function getUsersLocation() {
  const getLocation = () => {
    const originPromise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((loc) => {
        resolve({ lat: loc.coords.latitude, lng: loc.coords.longitude });
      });
    });
    const timeOutPromise = new Promise((resolve, reject) => {
      setTimeout(resolve, 2500, { lat: 37.57593689999999, lng: 126.9768157 });
    });
    // 2.5초 내에 응답 없을 시 기본 주소 "광화문" 설정
    return Promise.race([originPromise, timeOutPromise]);
  };
  return getLocation();
}

export function callApiLocationBasedList(params) {
  return axios.get("/location/search", { params });
}

export function uploadImgAPI(formData) {
  return axios.patch("/auth/img", formData);
}

// 댓글 목록
export function callApiCommentList(contentId) {
  return axios.get(`/comment/${contentId}`);
}

// 댓글 관련
export function callApiAddComment(comment) {
  return axios.post("/comment", comment);
}

export function callApiAddPlace(place) {
  return axios.post("/place", place);
}

export function callApiUpdateComment(commentId, content, commenter) {
  return axios.patch("/comment", { commentId, content, commenter });
}
export function callApiDeleteComment(_id, commenter) {
  return axios.delete(`/comment/delete/${_id}/${commenter}`);
}

// 대댓글 관련
export function callApiAddReply(commentId, reply) {
  return axios.post("/comment/reply", { commentId, reply });
}
export function callApiDeleteReply(commentId, replyId, commenter) {
  return axios.delete(
    `/comment/reply/delete/${commentId}/${replyId}/${commenter}`
  );
}

// 좋아요 관련
export function callApiAddLike(userId, commentId) {
  return axios.post("/comment/like", { userId, commentId });
}

export function callApiGeocode(location) {
  return axios.get("/location/geocode", {
    params: {
      location: location,
    },
  });
}

export function getUser() {
  return axios.get("/auth/checkUser");
}

export function callApiUpdateHeart(place) {
  return axios.patch("/auth/heart", { place });
}

export function callApiGetHeart() {
  return axios.get("/auth/heart");
}

export function callApiGetComment() {
  return axios.get("/auth/comment");
}

export function callAutoComplete(address) {
  return axios.get("/location/autocomplete", {
    params: {
      input: address,
    },
  });
}

export function callApiGetChat() {
  return axios.get("/chat");
}

export function callApiPostChat(input) {
  return axios.post("/chat", { input });
}
