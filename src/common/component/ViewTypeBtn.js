import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const ToggleBtn = styled(ToggleButton)`
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
`;

function ViewButton({ match }) {
  const [view, setView] = useState("card");

  const handleView = (event, newView) => {
    setView(newView);
  };

  return (
    <ToggleButtonGroup value={view} exclusive onChange={handleView}>
      <ToggleBtn value="card">
        <Link to={`${match.path}?view=card`}>
          <ViewModuleIcon />
        </Link>
      </ToggleBtn>

      <ToggleBtn value="list">
        <Link to={`${match.path}?view=list`}>
          <ViewListIcon />
        </Link>
      </ToggleBtn>
    </ToggleButtonGroup>
  );
}

export default withRouter(ViewButton);
