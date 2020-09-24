import Detail from "../component/Detail";



export default function DetailContainer() {
  console.log(sessionStorage.getItem("currentPlace")); // string
  const place = JSON.parse(sessionStorage.getItem("currentPlace"));
  console.log(typeof place);
  const handleShare = () => {
    console.log("share");
  }
  const handleScrap = () => {
    console.log("scrap");
  }
  return <Detail place={place} handleShare={handleShare} handleScrap={handleScrap}/>;
};
