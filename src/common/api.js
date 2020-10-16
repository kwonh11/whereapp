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
      mapinfoYN: "Y",
      overviewYN: "Y",
    },
  });
}

// 유저 위치 확인
export function getUsersLocation() {
  const getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((loc) => {
        resolve({ lat: loc.coords.latitude, lng: loc.coords.longitude });
      });
    });
  };
  return getLocation();
}

export function callApiLocationBasedList(location) {
  return axios.get("/location/search", {
    params: {
      location: location,
    },
  });
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
  return axios.patch("/comment", {commentId, content, commenter});
};
export function callApiDeleteComment(_id, commenter) {
  return axios.delete(`/comment/delete/${_id}/${commenter}`);
}

// 대댓글 관련
export function callApiAddReply(commentId, reply) {
  return axios.post("/comment/reply", { commentId, reply });
};
export function callApiDeleteReply(commentId, replyId, commenter) {
  return axios.delete(`/comment/reply/delete/${commentId}/${replyId}/${commenter}`);
};

// 좋아요 관련
export function callApiAddLike(userId, commentId) {
  return axios.post("/comment/like", {userId, commentId});
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