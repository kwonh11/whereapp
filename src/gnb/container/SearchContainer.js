import { useEffect, useState } from "react";
import Search from "../component/Search";
import { actions } from "../../common/reducer/location";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

function SearchContainer({ history }) {
  const dispatch = useDispatch();
  const { address, predictions, origin } = useSelector(
    (state) => state.location
  );
  const isHandledAddress = useSelector(
    (state) => state.location.isHandledAddress
  );

  const [input, setInput] = useState(address);

  useEffect(() => {
    if (address) return;
    if (isHandledAddress) return;
    dispatch(actions.requestLocation());
  }, []);

  const handleAreaBasedList = () => {
    return dispatch(actions.requestAreaBasedList({ origin, isHandledAddress }));
  };

  const handleChangeAddress = (e) => {
    setInput(e.target.value);
    if (e.target.value.length >= 3) {
      dispatch(actions.setHandledAddress(false));
      dispatch(actions.predictionsRequest(e.target.value));
    }
  };

  const handleSelectAddress = (e, value) => {
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
