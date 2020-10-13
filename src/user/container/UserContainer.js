import { useState, useEffect } from "react";
import User from "../component/User";
import { useSelector } from "react-redux";

export default function UserContainer({ tab }) {
  console.log("-----------UserContainer");
  console.log(`tab : ${tab}`);

  const { comments, hearts } = useSelector((state) => state.user);
  const commentsPlaces = comments.map((item) => item.place);
  const heartsPlaces = hearts.map((item) => item.place);

  console.log(`comments : ${comments}`);
  console.log(`hearts : ${hearts}`);

  const [tabValue, setTabValue] = useState(tab === "heart" ? 0 : 1);
  const [places, setPlaces] = useState([]);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    tab === "comment" ? setPlaces(commentsPlaces) : setPlaces(heartsPlaces);
    console.log(`places : ${places}`);
  }, [tabValue]);

  const handleChangeTab = (event, newValue) => {
    newValue ? setPlaces(commentsPlaces) : setPlaces(heartsPlaces);
    setTabValue(newValue);
  };

  return (
    <User
      tabValue={tabValue}
      places={places}
      handleChangeTab={handleChangeTab}
    />
  );
}
