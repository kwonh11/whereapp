import { useState, useEffect } from "react";
import User from "../component/User";
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../common/reducer/user';

export default function UserContainer({ tab }) {
  
  const { comments, hearts } = useSelector((state) => state.user);

  const [tabValue, setTabValue] = useState(tab === "heart" ? 0 : 1);
  const [places, setPlaces] = useState([]);

  const viewType = useSelector(state => state.user.viewType);
  const dispatch = useDispatch();
  const setPlaceViewType = React.useCallback((viewType) => {
    dispatch(actions.setViewType(viewType));
  }, []);
  

  useEffect(() => {
    tab === "comment" ? setPlaces(comments) : setPlaces(hearts);
  }, []);

  const handleChangeTab = (event, newValue) => {
    newValue ? setPlaces(comments) : setPlaces(hearts);
    setTabValue(newValue);
  };

  return (
    <User
      tabValue={tabValue}
      places={places}
      handleChangeTab={handleChangeTab}
      setPlaceViewType={setPlaceViewType}
      viewType={viewType}
    />
  );
}
