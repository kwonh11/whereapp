import Detail from "../component/Detail";

const Comments = [
  {
    id: 1,
    commenter: "ggyu",
    content: "여기 가보고 싶어요",
    createAt: Date.now(),
    like: false,
    likeCount: 50,
    reply : []
  },
  {
    id: 2,
    commenter: "hyuk",
    content: "추천 합니다.",
    createAt: Date.now(),
    like: true,
    likeCount: 40,
    reply : []
  },
  {
    id: 3,
    commenter: "ggyu",
    content: "여기 가보고 싶어요",
    createAt: Date.now(),
    like: false,
    likeCount: 50,
    reply : []
  },
  {
    id: 4,
    commenter: "hyuk",
    content: "추천 합니다.",
    createAt: Date.now(),
    like: true,
    likeCount: 40,
    reply : [
      {
        commenter: "hyuk",
        content: "저도 추천 합니다.",
        createAt: Date.now(),
      }
    ]
  },
  {
    id: 5,
    commenter: "ggyu",
    content: "여기 가보고 싶어요",
    createAt: Date.now(),
    like: false,
    likeCount: 50,
    reply : []
  },
  {
    id: 6,
    commenter: "hyuk",
    content: "추천 합니다.",
    createAt: Date.now(),
    like: true,
    likeCount: 40,
    reply : []
  },
];

export default function DetailContainer() {
  const [loading, setLoading] = React.useState(false);
  const [comments, setComments] = React.useState(Comments);

  // lazy loading
  // const scrollEvent = async () => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
  //     console.log("페이지 끝 ");
  //     const storageDatas = JSON.parse(sessionStorage.getItem("comments"));
  //     const commentList = storageDatas? [...storageDatas, ...Comments] : [...Comments];
  //     sessionStorage.setItem("comments", JSON.stringify(commentList));
  //     await setLoading(true);
  //     await setComments(commentList);
  //     setTimeout(()=>setLoading(false), 2000);
  //   };
  // };
  // React.useEffect(()=>{
  //   window.addEventListener('scroll', scrollEvent);
  //   return () => window.removeEventListener('scroll', scrollEvent);
  // },[]);
  
  const place = JSON.parse(sessionStorage.getItem("currentPlace"));

  const handleShare = () => {
    console.log("share");
  }
  const handleScrap = () => {
    console.log("scrap");
  }

  return (
  <React.Fragment>
    <Detail place={place} handleShare={handleShare} handleScrap={handleScrap} loading={loading} comments={comments} />
  </React.Fragment>
  );
};
