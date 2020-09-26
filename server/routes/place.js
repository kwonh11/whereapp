const qs = require('qs');
const axios = require('axios');
require("dotenv").config();
// news router
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const {contentId ,contentTypeId} = req.query;
    axios.get(
        `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro?ServiceKey=${process.env.TOUR_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&MobileOS=ETC&MobileApp=Where&_type=json`)
    .then(response => {
        console.log(response.data.response.body.data.items);
        res.json(response.data.response.body.data.items);
    })
    .catch(err => {
        console.log(err);
    })
})




module.exports = router;