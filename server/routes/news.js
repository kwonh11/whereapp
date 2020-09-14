const qs = require('qs');
const axios = require('axios');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const parseString = require('xml2js').parseString;
// news router
const express = require("express");
const router = express.Router();

// 검색기능
// google rss를 이용한 검색 결과를 보여준다.
// 최대 10개
// JSON으로 파싱 후 
// Article 모델의 구조에 맞춰 array를 리턴함

const getGoogleNewsByKeyword = async (keyword) => {
    console.log(keyword);
    const url = `https://news.google.com/rss/search?q=${keyword}&hl=ko&gl=KR&ceid=KR:ko`;
    const encodedURI = encodeURI(url);
    let googleNewsList = [];
    // {
    //     title: [ '6개 제약⋅ 바이오사 코로나19 치료제 해외임상… “환자 모집 용이" - 조선비즈' ],
    //     link: [
    //       'https://biz.chosun.com/site/data/html_dir/2020/09/09/2020090903610.html'
    //     ],
    //     guid: [
    //       {
    //         _: 'CBMiR2h0dHBzOi8vYml6LmNob3N1bi5jb20vc2l0ZS9kYXRhL2h0bWxfZGlyLzIwMjAvMDkvMDkvMjAyMDA5MDkwMzYxMC5odG1s0gFDaHR0cHM6Ly9tLmJpei5jaG9zdW4uY29tL25ld3MvYXJ0aWNsZS5hbXAuaHRtbD9jb250aWQ9MjAyMDA5MDkwMzYxMA',
    //         '$': [Object]
    //       }
    //     ],
    //     pubDate: [ 'Wed, 09 Sep 2020 21:00:00 GMT' ],
    //     description: [
    //       '<a href="https://biz.chosun.com/site/data/html_dir/2020/09/09/2020090903610.html" target="_blank">6개 제약⋅ 바이오사 코로나19 치료제 해외임상… “환자 모집 용
    //   이"</a>&nbsp;&nbsp;<font color="#6f6f6f">조선비즈</font>'
    //     ],
    //     source: [ { _: '조선비즈', '$': [Object] } ]
    //   }
    await axios.get(encodedURI).then((response)=> {
        parseString(response.data, (err,result)=>{
            const newsList = result.rss.channel[0].item;
            googleNewsList = newsList.map(news => ({
                title: news.title,
                link: news.link[0],
                // 여기에 response 배열 요소 작성
            }));
        })
    })
}

router.get("/search/:keyword", async (req,res) => {
    // params가 제대로 넘어오는지 확인
    console.log(req.params);
    const rss = await getGoogleNewsByKeyword(req.params.keyword);
    // google검색어를 이용해 10개의 rss를 json으로 파싱하는 함수 만들자
});




module.exports = router;