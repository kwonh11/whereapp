import Slider from "../component/Slider";

const news = [
  {
    contentid: 1,
    firstimage:
      "http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
    contenttypeid: 12,
    title: `진주남강유등축제`,
    date: `2020/10/12-2020/10/22`,
    addr1: "대구광역시 동구 동화사1길 1",
    tel: "053-980-7900",
    dist: 300,
    readcount: 100,
  },
  {
    contentid: 2,
    firstimage:
      "http://tong.visitkorea.or.kr/cms/resource/50/495150_image2_1.jpg",
    contenttypeid: 14,
    title: `진주남강유등축제`,
    date: `2020/10/12-2020/10/22`,
    address: "대구광역시 동구 동화사1길 1",
    tel: "053-980-7900",
    dist: 300,
    readcount: 1500,
  },
  {
    contentid: 3,
    firstimage:
      "http://tong.visitkorea.or.kr/cms/resource/21/2554921_image2_1.jpg",
    contenttypeid: 15,
    title: `진주남강유등축제`,
    date: `2020/10/12-2020/10/22`,
    addr1: "대구광역시 동구 동화사1길 1",
    tel: "053-980-7900",
    dist: 100,
    readcount: 3500,
  },
  {
    contentid: 4,
    firstimage:
      "http://tong.visitkorea.or.kr/cms/resource/20/2657520_image2_1.jpg",
    contenttypeid: 25,
    title: `진주남강유등축제`,
    date: `2020/10/12-2020/10/22`,
    addr1: "대구광역시 동구 동화사1길 1",
    tel: "053-980-7900",
    dist: 10000,
    readcount: 3000,
  },
  {
    contentid: 5,
    firstimage:
      "http://tong.visitkorea.or.kr/cms/resource/06/2524206_image2_1.JPG",
    contenttypeid: 28,
    title: `진주남강유등축제`,
    date: `2020/10/12-2020/10/22`,
    addr1: "대구광역시 동구 동화사1길 1",
    tel: "053-980-7900",
    dist: 100000,
    readcount: 2500,
  },
];
// 더미데이터 뉴스
const testNews = [...news, ...news, ...news.slice(0, 2)];

export default function SliderContainer(props) {
  return <Slider items={testNews} />;
}
