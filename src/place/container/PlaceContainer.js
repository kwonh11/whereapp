import { useEffect, useState } from "react";
import PlaceList from "../component/PlaceList";
import axios from "axios";

export default function PlaceContainer() {
  console.log("PlaceContainer");
  let location;
  useEffect(() => {
    location = JSON.parse(sessionStorage.getItem("location"));
    console.log(location.lng);
    getPlace();
  }, []);

  const [place, setPlace] = useState(null);

  const getPlace = () => {
    try {
      axios
        .get("/location/search", {
          params: {
            location: location,
          },
        })
        .then((res) => setPlace([...res.data.item]));
    } catch (error) {
      console.error(error);
    }
  };

  if (!place) return null;

  return <PlaceList place={place} />;
}
