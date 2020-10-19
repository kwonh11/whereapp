import { useEffect, useState } from "react";
import Search from "../component/Search";
import { actions } from "../../common/reducer/location";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

function SearchContainer({ history }) {
  console.log("SearchContainer");

  const dispatch = useDispatch();
  const { address, predictions, origin } = useSelector((state) => state.location);
  const isHandledAddress = useSelector((state) => state.location.isHandledAddress);

  const [input, setInput] = useState(address);

  useEffect(() => {
    if (address) return;
    if (isHandledAddress) return;
    dispatch(actions.requestLocation());
  }, []);

  const handleAreaBasedList = () => {
    dispatch(actions.setHandledAddress(true));
    return dispatch(actions.requestAreaBasedList({origin, isHandledAddress}));
  };

  const handleChangeAddress = (e, value) => {
    console.log("handleChangeAddress");
    console.log(e.target.value);
    dispatch(actions.setHandledAddress(false));
    setInput(e.target.value);
    dispatch(actions.predictionsRequest(e.target.value));
  };

  const handleSelectAddress = (e, value) => {
    console.log("handleSelectAddress");
    console.log(value);

    console.log(value.description);
    setInput(value.description);
    dispatch(actions.setHandledAddress(true));
    dispatch(actions.setAddress(value.description));
    dispatch(actions.searchAddressRequest(value.description));
    history.push("/place");
  };

  return (
    <Search
      handleAreaBasedList={handleAreaBasedList}
      address={input}
      handleChangeAddress={handleChangeAddress}
      handleSelectAddress={handleSelectAddress}
      predictions={predictions}
    />
  );
}

export default withRouter(SearchContainer);
