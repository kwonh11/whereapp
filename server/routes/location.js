const express = require("express");
const { Client, Status } = require("@googlemaps/google-maps-services-js");

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

module.exports = router;
