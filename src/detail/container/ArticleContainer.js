import Article from "../component/Article";

const data = [
  {
    id: 0,
    title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
    image:
      "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
    content:
      "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
    category: "MASK",
    corp: "segye",
    published: new Date().toString(),
    createAt: new Date().toString(),
  },
  {
    id: 1,
    title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
    image:
      "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
    content:
      "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
    category: "MASK",
    corp: "segye",
    published: new Date().toString(),
    createAt: new Date().toString(),
  },
  {
    id: 2,
    title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
    image:
      "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
    content:
      "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
    category: "MASK",
    corp: "segye",
    published: new Date().toString(),
    createAt: new Date().toString(),
  },
  {
    id: 3,
    title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
    image:
      "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
    content:
      "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
    category: "MASK",
    corp: "segye",
    published: new Date().toString(),
    createAt: new Date().toString(),
  },
  {
    id: 4,
    title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
    image:
      "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
    content:
      "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
    category: "MASK",
    corp: "segye",
    published: new Date().toString(),
    createAt: new Date().toString(),
  },
  {
    id: 5,
    title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
    image:
      "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
    content:
      "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
    category: "MASK",
    corp: "segye",
    published: new Date().toString(),
    createAt: new Date().toString(),
  },
];

export default function ArticleContainer({ id }) {
  const news = data.find((item) => item.id === parseInt(id));
  return <Article news={news} />;
}
