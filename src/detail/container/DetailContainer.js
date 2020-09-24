import Detail from "../component/Detail";
import {callApiComments} from '../../common/api';


export default function DetailContainer() {
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [comments, setComments] = React.useState([]);

  const scrollEvent = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      console.log("페이지 끝 , 데이터 FETCHING ");
      setLoading(true);
      setPage(page+1);
      callApiComments(page).then((result) => {
        console.log(result);
        setComments([...comments, ...result]);
        setTimeout(()=>setLoading(false), 3000);
      }).finally(()=> console.log(comments));
    }
  }
  React.useEffect(()=>{
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  },[]);
  
  const place = JSON.parse(sessionStorage.getItem("currentPlace"));

  const handleShare = () => {
    console.log("share");
  }
  const handleScrap = () => {
    console.log("scrap");
  }

  return <Detail place={place} handleShare={handleShare} handleScrap={handleScrap} loading={loading} comments={comments} />;
};
