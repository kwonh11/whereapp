import { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";
import { getUsersLocation, callApiLocationBasedList } from "../../common/api";

export default function SearchContainer() {
  useEffect(() => {
    getUsersLocation().then((location) => {
      sessionStorage.setItem("location", JSON.stringify(location));
      setLocation({ ...location });
    });
  }, []);

  const [location, setLocation] = useState({});
  const [address, setAddress] = useState("");

  const handleGetLocation = (e) => {
    callApiLocationBasedList(location)
      .then((res) => setAddress(res.data))
      .catch((err)=> console.log(err));
  };

  return <Search handleGetLocation={handleGetLocation} address={address} />;
}
