const qs = require('qs');
const axios = require('axios');
require("dotenv").config();
// news router
const express = require("express");
const router = express.Router();



// 네이버 뉴스 검색 결과과 image, description이 저장안됨
const getNaverNewsByKeyword = async (keyword) => {
    console.log(keyword);
    const url = `https://openapi.naver.com/v1/search/news?query=${encodeURI(keyword)}`;
    await axios.get(url,{
        headers: {
        "X-Naver-Client-Id": process.env.CLIENT_ID,
        "X-Naver-Client-Secret": process.env.CLIENT_SECRET
    }}).then(response => {
        console.log(response.data);
    }).catch(err => {
        console.log(err);
    })

    // await axios.get(encodedURI).then((response)=> {
    //     parseString(response.data, (err,result)=>{
    //         const newsList = result.rss.channel[0].item;
    //         googleNewsList = newsList.map(news => {
    //             // content, image, category 파싱 필요
    //             console.log({
    //                 title: news.title[0],
    //                 link: news.link[0],
    //                 corp: news.source[0]._,
    //                 published: news.pubDate[0],
    //                 origin: news.link[0],
    //             })
    //         });
    //     })
    // }).catch(err => console.log(err));
}


// routers 
router.get("/search/:keyword", async (req,res) => {
    console.log(req.params);
    const rss = await getNaverNewsByKeyword(req.params.keyword);
});

router.get("/corp/:name", async (req,res) => {
    console.log(req.params);
    
});




module.exports = router;