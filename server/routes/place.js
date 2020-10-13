const axios = require("axios");
const express = require("express");
const Place = require("../schemas/place");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("-----------place get");
  const { contentId, contentTypeId } = req.query;
  let additional = {};

  const commonIntroURL = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.TOUR_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&mapinfoYN=Y&overviewYN=Y&MobileOS=ETC&MobileApp=Where&_type=json`;
  const detailIntroURL = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro?ServiceKey=${process.env.TOUR_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&MobileOS=ETC&MobileApp=Where&_type=json`;

  await axios
    .all([axios.get(commonIntroURL), axios.get(detailIntroURL)])
    .then(
      axios.spread((commonResult, detailResult) => {
        additional = {
          ...commonResult.data.response.body.items.item,
          ...detailResult.data.response.body.items.item,
        };
        res.json(additional).end();
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(403).send(err);
    });
});

router.post("/", isLoggedIn, async (req, res) => {
  console.log("--------------------post");
  const { contentid } = req.body;

  try {
    const exPlace = await Place.findOne({
      contentid,
    });

    if (exPlace) {
      console.log("플레이스 잇");
      console.log(exPlace._id);

      res.json(exPlace._id);
    } else {
      console.log("플레이스 없");

      const newPlace = await Place.create(req.body);
      console.log(newPlace._id);
      res.json(newPlace._id);
    }
  } catch (err) {
    res.status(403).send(err);
  }
});

module.exports = router;
