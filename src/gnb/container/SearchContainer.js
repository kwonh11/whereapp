import { useEffect, useState } from "react";
import Search from "../component/Search";
import { connect } from "react-redux";
import { actions } from "../../common/reducer/location";
import axios from "axios";

function SearchContainer(props) {
  console.log("SearchContainer");
  // const [location, setLocation] = useState({});
  const [addr, setAddress] = useState("");
  const [predictions, setPredictions] = useState([]);

  const { address, requestLocation, requestAreaBasedList } = props;

  useEffect(() => {
    // requestLocation();
  }, []);

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
      requestAreaBasedList={requestAreaBasedList}
      address={addr}
      // handleGetLocation={handleGetLocation}
      // address={address}
      handleKeyUp={handleKeyUp}
      predictions={predictions}
    />
  );
}

const mapStateToProps = (state, props) => ({
  origin: state.location.origin,
  address: state.location.address,
});

export default connect(mapStateToProps, actions)(SearchContainer);
