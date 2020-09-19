import React from "react";
import Search from "../component/Search";
import { callApiSearchByKeyword } from '../../common/api';
export default function SearchContainer() {
  return <Search onSearch={callApiSearchByKeyword}/>;
}
