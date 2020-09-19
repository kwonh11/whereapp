import Slider from '../component/Slider';

const news = [
    { 
        image:"http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
        category:"축제", 
        title:`진주남강유등축제`,
        date: `2020/10/12-2020/10/22`,
        address: "대구광역시 동구 동화사1길 1",
        tel: "053-980-7900",
        dist:300,
    },
    { 
        image:"http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
        category:"축제", 
        title:`진주남강유등축제`,
        date: `2020/10/12-2020/10/22`,
        address: "대구광역시 동구 동화사1길 1",
        tel: "053-980-7900",
        dist:300,
    },
    { 
        image:"http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
        category:"축제", 
        title:`진주남강유등축제`,
        date: `2020/10/12-2020/10/22`,
        address: "대구광역시 동구 동화사1길 1",
        tel: "053-980-7900",
        dist:300,
    },
    { 
        image:"http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
        category:"축제", 
        title:`진주남강유등축제`,
        date: `2020/10/12-2020/10/22`,
        address: "대구광역시 동구 동화사1길 1",
        tel: "053-980-7900",
        dist:300,
    },
    { 
        image:"http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
        category:"축제", 
        title:`진주남강유등축제`,
        date: `2020/10/12-2020/10/22`,
        address: "대구광역시 동구 동화사1길 1",
        tel: "053-980-7900",
        dist:300,
    },
]
// 더미데이터 뉴스
const testNews = [...news, ...news, ...news.slice(0,2)];

export default function SliderContainer(props) {
    return (
        <Slider items={testNews}/>
    )
}