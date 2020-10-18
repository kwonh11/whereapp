import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import qs from "qs";

const ToggleBtnGroup = styled(ToggleButtonGroup)`
  & button {
    padding: 0 !important;
    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3f63bf;
      width: 100%;
      height: 100%;
      padding: 11px;
    }
  }
`;

function ViewButton({ setPlaceViewType, viewType }) {
  const handleView = (event, viewType) => {
    setPlaceViewType(viewType);
  };

  return (
    <ToggleBtnGroup value={viewType} exclusive onChange={handleView}>
      <ToggleButton value="card">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="list">
        <ViewListIcon />
      </ToggleButton>
    </ToggleBtnGroup>
  );
}

export default ViewButton;
