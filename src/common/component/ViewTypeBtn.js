import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import qs from "qs";

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

function ViewButton({ match, location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const [view, setView] = useState("card");

  const handleView = (event, newView) => {
    setView(newView);
  };

  return (
    <ToggleButtonGroup value={view} exclusive onChange={handleView}>
      <ToggleBtn value="card">
        <Link
          to={{
            pathname: location.pathname,
            search: qs.stringify({ ...query, view: "card" }),
          }}
        >
          <ViewModuleIcon />
        </Link>
      </ToggleBtn>

      <ToggleBtn value="list">
        <Link
          to={{
            pathname: location.pathname,
            search: qs.stringify({ ...query, view: "list" }),
          }}
        >
          <ViewListIcon />
        </Link>
      </ToggleBtn>
    </ToggleButtonGroup>
  );
}

export default withRouter(ViewButton);
