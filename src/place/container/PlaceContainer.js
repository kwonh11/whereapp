import { useEffect, useState } from "react";
import PlaceList from "../component/PlaceList";
import axios from "axios";

export default function PlaceContainer({ query, match }) {
  console.log("PlaceContainer");

  const [allPlace, setAllPlace] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [tab, setTab] = useState(0);
  const [arrange, setArrange] = useState("A");

  let location;
  useEffect(() => {
    location = JSON.parse(sessionStorage.getItem("location"));
    getPlace();
  }, [arrange]);

  useEffect(() => {
    const id = parseInt(match.params.type);
    id
      ? setSelectedPlace(allPlace.filter((place) => place.contenttypeid === id))
      : setSelectedPlace(allPlace);
  }, [tab]);

  const handleChangeTab = (e, newValue) => {
    setTab(newValue);
  };

  const handleChangeArrange = (e) => {
    setArrange(e.target.value);
  };

  const getPlace = () => {
    console.log("getPlace");
    try {
      axios
        .get("/location/search", {
          params: {
            location: location,
            arrange: arrange,
          },
        })
        .then((res) => {
          console.log(res.data.item);
          setAllPlace([...res.data.item]);
          setSelectedPlace([...res.data.item]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  if (!selectedPlace) return null;

  return (
    <PlaceList
      place={selectedPlace}
      handleChangeTab={handleChangeTab}
      tab={tab}
      query={query}
      arrange={arrange}
      handleChangeArrange={handleChangeArrange}
    />
  );
}
