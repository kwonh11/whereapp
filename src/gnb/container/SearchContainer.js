import { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";
import { getUsersLocation } from "../../common/api";

export default function SearchContainer() {
  console.log("SearchContainer");

  useEffect(() => {
    getUsersLocation().then((location) => {
      console.log(location);
      sessionStorage.setItem("location", JSON.stringify(location));
      setLocation({ ...location });
    });
  }, [address, predictions]);

  const [location, setLocation] = useState({});
  const [address, setAddress] = useState("");
  const [predictions, setPredictions] = useState([]);

  const handleGetLocation = (e) => {
    try {
      axios
        .get("/location", {
          params: {
            location: location,
          },
        })
        .then((res) => setAddress(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyUp = (e) => {
    console.log("handleKeyUp");
    console.log(e.target.value);
    setAddress(e.target.value);

    try {
      axios
        .get("/location/autocomplete", {
          params: {
            input: e.target.value,
          },
        })
        .then((res) => {
          console.log(res);
          setPredictions(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Search
      handleGetLocation={handleGetLocation}
      address={address}
      handleKeyUp={handleKeyUp}
      predictions={predictions}
    />
  );
}
