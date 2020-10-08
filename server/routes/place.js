const qs = require('qs');
const axios = require('axios');
require("dotenv").config();
// news router
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const {contentId ,contentTypeId } = req.query;
    let additional = {};

    const commonIntroURL = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.TOUR_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&mapinfoYN=Y&overviewYN=Y&MobileOS=ETC&MobileApp=Where&_type=json`;
    const detailIntroURL = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro?ServiceKey=${process.env.TOUR_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&MobileOS=ETC&MobileApp=Where&_type=json`;

    await axios.all([axios.get(commonIntroURL), axios.get(detailIntroURL)])
        .then(axios.spread((commonResult, detailResult) => {
            additional = {
                ...commonResult.data.response.body.items.item,
                ...detailResult.data.response.body.items.item
            };
            console.log(additional);
            res.json(additional);
        }))
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;