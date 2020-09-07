import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

export default function ViewButton({ view, handleView }) {
  return (
    <ToggleButtonGroup value={view} exclusive onChange={handleView}>
      <ToggleButton value="card">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="list">
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
