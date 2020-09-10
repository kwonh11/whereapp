import Slider from '../component/Slider';

const news = [
    { 
        image:"https://image.newsis.com/2020/08/31/NISI20200831_0016630218_web.jpg?rnd=20200831150912",
        category:"정치", 
        title:`文대통령 "모처럼 독서 즐겨보길"…'코로나 사피엔스' 등 추천`, 
        description : `'오늘부터의 세계' '리더라면 정조처럼' '홍범도 평전' 등 추천
        "독서가 더위 이기는 좋은 방법 아닐까…출판시장에도 도움"
        "정조대왕 금난전권 혁파하며 경제 개혁한 이야기 가장 좋아"`, 
        originalLink:"https://newsis.com/view/?id=NISX20200901_0001150406&cID=10301&pID=10300", 
        date: new Date().toString(), 
        company:"뉴시스"
    },
    { 
        image:"https://image.newsis.com/2020/08/24/NISI20200824_0016606732_web.jpg?rnd=20200901120343",
        category:"정치", 
        title:`文대통령 "모처럼 독서 즐겨보길"…'코로나 사피엔스' 등 추천`, 
        description : `'오늘부터의 세계' '리더라면 정조처럼' '홍범도 평전' 등 추천
        "독서가 더위 이기는 좋은 방법 아닐까…출판시장에도 도움"
        "정조대왕 금난전권 혁파하며 경제 개혁한 이야기 가장 좋아"`, 
        originalLink:"https://newsis.com/view/?id=NISX20200901_0001150406&cID=10301&pID=10300", 
        date: new Date().toString(), 
        company:"뉴시스"
    },
    { 
        image:"https://image.newsis.com/2018/01/15/NISI20180115_0000094737_web.jpg?rnd=20180115163907",
        category:"정치", 
        title:`文대통령 "모처럼 독서 즐겨보길"…'코로나 사피엔스' 등 추천`, 
        description : `'오늘부터의 세계' '리더라면 정조처럼' '홍범도 평전' 등 추천
        "독서가 더위 이기는 좋은 방법 아닐까…출판시장에도 도움"
        "정조대왕 금난전권 혁파하며 경제 개혁한 이야기 가장 좋아"`, 
        originalLink:"https://newsis.com/view/?id=NISX20200901_0001150406&cID=10301&pID=10300", 
        date: new Date().toString(), 
        company:"뉴시스"
    },
    { 
        image:"https://image.newsis.com/2020/09/01/NISI20200901_0000591915_web.jpg?rnd=20200901071247",
        category:"정치", 
        title:`文대통령 "모처럼 독서 즐겨보길"…'코로나 사피엔스' 등 추천`, 
        description : `'오늘부터의 세계' '리더라면 정조처럼' '홍범도 평전' 등 추천
        "독서가 더위 이기는 좋은 방법 아닐까…출판시장에도 도움"
        "정조대왕 금난전권 혁파하며 경제 개혁한 이야기 가장 좋아"`, 
        originalLink:"https://newsis.com/view/?id=NISX20200901_0001150406&cID=10301&pID=10300", 
        date: new Date().toString(), 
        company:"뉴시스"
    },
]
// 더미데이터 뉴스
const testNews = [...news, ...news, ...news.slice(0,2)];

export default function SliderContainer(props) {
    return (
        <Slider news={testNews}/>
    )
}