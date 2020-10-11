import axios from "axios";

export function callApiGetAddress(location) {
  return axios.get("/location", {
    params: {
      location: location,
    },
  });
};

export function callApiBestList() {
  return axios.get("/location/best");
};

export function callApiDetailIntro(contentTypeId, contentId) {
  return axios.get("/place", {
    params: {
      contentId,
      contentTypeId,
      mapinfoYN: "Y",
      overviewYN: "Y",
    },
  });
};

// 유저 위치 확인
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

export function callApiLocationBasedList(location) {
  return axios.get("/location/search", {
    params: {
      location: location,
    },
  });
};

export function getUser() {
  return axios.get("/auth/checkUser");
};

export function uploadImgAPI(formData) {
  console.log("----------uploadImgAPI");

  console.log(formData);
  return axios.patch("/auth/img", formData);
};

// 댓글 목록
export function callApiCommentList(contentId) {
  return axios.get(`/comment/${contentId}`);
};

// 댓글 관련
export function callApiAddComment(comment) {
  return axios.post("/comment", comment );
};
export function callApiUpdateComment(_id, content, commenter) {
  return axios.patch("/comment", {_id, content, commenter});
};
export function callApiDeleteComment(_id, commenter) {
  return axios.delete(`/comment/delete/${_id}/${commenter}`);
};

// 대댓글 관련
export function callApiAddReply(commentId, reply) {
  return axios.post("/comment/reply", { commentId, reply });
};
export function callApiDeleteReply(commentId, replyId, commenter) {
  return axios.delete(`/comment/reply/delete/${commentId}/${replyId}/${commenter}`);
};

// 좋아요 관련
export function callApiAddLike(userId, commentId, contentId) {
  
}
