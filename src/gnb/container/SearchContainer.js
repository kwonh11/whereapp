import { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";
import { getUsersLocation, callApiLocationBasedList } from "../../common/api";
import { connect } from 'react-redux';
import {actions} from '../state';

function SearchContainer() {
  
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState("");

  useEffect(() => {
    getUsersLocation().then((location) => {
      sessionStorage.setItem("location", JSON.stringify(location));
      // location객체의 값을 store에 저장한다. dispatch setOrigin이용
      // saga를 이용해서
      // setOrigin을 watching 하다가
      // setLoading(true) 시키고
      // setReverseGeocode를 실행시키고
      // placeList를 state에 저장한다.
      // 저장이 모두완료되면 setLoading(False)
      // saga로 origin을 얻어와 저장하는 로직을 작성하자.
      setLocation({ ...location });
    });
  }, []);


  const handleGetLocation = (e) => {
    callApiLocationBasedList(location)
      .then((res) => setAddress(res.data))
      .catch((err)=> console.log(err));
  };

  return <Search handleGetLocation={handleGetLocation} address={address} />;
};

const mapStateToProps = (state, props) => ({
  origin: state.location.origin,
  reverseGeocoded: state.location.reverseGeocoded
});

export default connect(
  mapStateToProps,
  actions
)(SearchContainer);

