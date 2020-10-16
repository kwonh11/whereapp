import { useState, useEffect } from "react";
import User from "../component/User";
import { useSelector } from "react-redux";

export default function UserContainer({ tab }) {
  
  const { comments, hearts } = useSelector((state) => state.user);

  const [tabValue, setTabValue] = useState(tab === "heart" ? 0 : 1);
  const [places, setPlaces] = useState([]);
  const [viewType, setViewType] = useState("card");

  useEffect(() => {
    tab === "comment" ? setPlaces(comments) : setPlaces(hearts);
  }, []);

  const handleChangeTab = (event, newValue) => {
    newValue ? setPlaces(comments) : setPlaces(hearts);
    setTabValue(newValue);
  };

  const setPlaceListType = (vlaue) => {
    setViewType(value);
  };

  return (
    <User
      tabValue={tabValue}
      places={places}
      handleChangeTab={handleChangeTab}
      setPlaceListType={setPlaceListType}
      listType={viewType}
    />
  );
}
