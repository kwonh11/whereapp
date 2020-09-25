import { useEffect, useState } from "react";
import PlaceList from "../component/PlaceList";
import axios from "axios";

export default function PlaceContainer({ query }) {
  console.log("PlaceContainer");
  let location;
  useEffect(() => {
    location = JSON.parse(sessionStorage.getItem("location"));
    console.log(location.lng);
    getPlace();
  }, []);

  const [allPlace, setAllPlace] = useState(null);
  const [selectPlace, setSelectPlace] = useState(null);
  const [tab, setTab] = useState(0);
  const [order, setOrder] = useState(0);

  const handleSelectTab = (id, tab) => {
    tab
      ? setSelectPlace(allPlace.filter((place) => place.contenttypeid === id))
      : setSelectPlace(allPlace);

    setTab(tab);
  };

  const getPlace = () => {
    console.log("getPlace");
    try {
      axios
        .get("/location/search", {
          params: {
            location: location,
          },
        })
        .then((res) => {
          console.log(res.data.item);
          setAllPlace([...res.data.item]);
          setSelectPlace([...res.data.item]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  if (!selectPlace) return null;

  return (
    <PlaceList
      place={selectPlace}
      query={query}
      handleSelectTab={handleSelectTab}
      tab={tab}
    />
  );
}
