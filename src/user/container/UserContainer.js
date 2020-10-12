import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, FormControl, Select } from "@material-ui/core";
import ViewTypePage from "../../common/component/ViewTypePage";
import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import User from "../component/User";
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../common/reducer/user'

export default function UserContainer({ tab }) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(tab === "scrap" ? 0 : 1);
  const [order, setOrder] = useState(0);




  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <User tab={tab}  />;
}
