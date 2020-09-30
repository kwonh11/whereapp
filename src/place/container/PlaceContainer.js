import { useEffect, useState } from "react";
import PlaceList from "../component/PlaceList";
import axios from "axios";

export default function PlaceContainer() {
  console.log("PlaceContainer");

  const [selectedPlace, setSelectedPlace] = useState([]);
  const [tab, setTab] = useState({ idx: 0, typeId: "" });
  const [arrange, setArrange] = useState("A");

  let location;

  useEffect(() => {
    location = JSON.parse(sessionStorage.getItem("location"));
    getPlace();
  }, [arrange, tab]);

  const handleChangeTab = (e, newValue) => {
    console.log("handleChangeTab");
    setTab({ idx: newValue, typeId: e.currentTarget.id });
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
            contentTypeId: tab.typeId,
          },
        })
        .then((res) => {
          let data = [];
          if (res.data) {
            data = Array.isArray(res.data.item)
              ? res.data.item
              : [res.data.item];
          }

          setSelectedPlace([...data]);
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
      arrange={arrange}
      handleChangeArrange={handleChangeArrange}
    />
  );
}
