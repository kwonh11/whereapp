const qs = require('qs');
const axios = require('axios');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const parseString = require('xml2js').parseString;
// news router
const express = require("express");
const router = express.Router();



// Naver News API를 이용한 검색으로 변경하기
// 1. naver에서 애플리케이션등록
// 2. 요청 헤더에 클라이언트 id, 클라이언트 시크릿을 포함시킴
// 3. naver api의 뒤에 쿼리를 "query"키로 발송
// 4. json형태로 받아 확인
// 5. query escape해야함 주의

// google검색은 image제외하고 사용할 시에는 유용할 듯
// image를 넣어야하는 경우, 다양한 플랫폼들의 각기 다른 DOM구조를 파싱해야함 -> 현실적으로 어려움
// 상의 후 결정

const getGoogleNewsByKeyword = async (keyword) => {
    console.log(keyword);
    const url = `https://news.google.com/rss/search?q=${keyword}&hl=ko&gl=KR&ceid=KR:ko`;
    const encodedURI = encodeURI(url);

    await axios.get(encodedURI).then((response)=> {
        parseString(response.data, (err,result)=>{
            const newsList = result.rss.channel[0].item;
            googleNewsList = newsList.map(news => {
                // content, image, category 파싱 필요
                console.log({
                    title: news.title[0],
                    link: news.link[0],
                    corp: news.source[0]._,
                    published: news.pubDate[0],
                    origin: news.link[0],
                })
            });
        })
    }).catch(err => console.log(err));
}

router.get("/search/:keyword", async (req,res) => {
    // params가 제대로 넘어오는지 확인
    console.log(req.params);
    const rss = await getGoogleNewsByKeyword(req.params.keyword);
    // google검색어를 이용해 10개의 rss를 json으로 파싱하는 함수 만들자
});




module.exports = router;