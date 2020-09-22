import { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";
import { getUsersLocation } from "../../common/api";

export default function SearchContainer() {
  useEffect(() => {
    getUsersLocation().then((location) => setLocation({ ...location }));
  }, []);

  const [location, setLocation] = useState({});
  const [address, setAddress] = useState("");

  const handleGetLocation = (e) => {
    console.log(location);
    axios
      .get("/location", {
        params: {
          location: location,
        },
      })
      .then((res) => setAddress(res.data));
  };

  return <Search handleGetLocation={handleGetLocation} address={address} />;
}
