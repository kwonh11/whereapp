const express = require("express");
const { Client, Status } = require("@googlemaps/google-maps-services-js");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res, next) => {
  const client = new Client({});
  client
    .reverseGeocode({
      params: {
        latlng: JSON.parse(req.query.location),
        language: "ko",
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 1000,
    })
    .then((r) => {
      res.json(r.data.results[0].formatted_address);
    })
    .catch((e) => {
      console.log(e);
    });
});

router.get("/search", async (req, res, next) => {
  const location = JSON.parse(req.query.location);
  console.log(location);
  try {
    const data = await axios.get(
      `http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=${process.env.TOUR_KEY}&mapX=${location.lng}&mapY=${location.lat}&radius=2000&listYN=Y&MobileOS=ETC&MobileApp=Where&_type=json`
    );
    res.json(data.data.response.body.items);
  } catch (error) {
    console.error(error);
  }
});

router.get("/best",async (req, res) => {
  await axios.get(
    `http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=${process.env.TOUR_KEY}&areaCode=1&numOfRows=20&pageNo=1&arrange=Q&MobileOS=ETC&MobileApp=Where`
  ).
  then(result => {
    console.log(result.data);
    const placeList = result.data.response.body.items.item;
    placeList.sort((a, b) => {
      return b.readcount - a.readcount;
    })
    res.json(placeList.slice(0, 10));
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
