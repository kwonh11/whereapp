import { useEffect, useState } from "react";
import Search from "../component/Search";
import axios from "axios";
import { getUsersLocation, callApiGetAddress } from "../../common/api";
import { connect } from 'react-redux';
import {actions} from '../state';

function SearchContainer(props) {

  const { address, requestLocation, requestAreaBasedList } = props;

  useEffect(() => {
    requestLocation();
  }, []);


  return <Search requestAreaBasedList={requestAreaBasedList} address={address} />;
};

const mapStateToProps = (state, props) => ({
  origin: state.location.origin,
  address: state.location.address
});

export default connect(
  mapStateToProps,
  actions
)(SearchContainer);

