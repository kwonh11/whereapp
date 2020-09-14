// user router
const express = require("express");
const router = express.Router();
const Article = require("../schemas/article");


// 인증 미들웨어 적용 필요
// request.body.data.article은 article schema의 형식에 맞춰야함
// scrap한 article을 db에 저장한다 O
// redux의 store에서 article데이터를 가져오는 작업필요
router.post("/scrap", async (req,res) => {
    const {article} = req.body;
    const result = await Article.create(article);
    await Article.find((err, docs)=>{
        console.log(docs)
    });
    res.json(article);
});



module.exports = router;