import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function ({ snackOpen, snackContent, handleCloseSnack }) {
  const [update, setUpdate] = React.useState(0);

  return (
    <>
      <Snackbar
        open={snackOpen}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="error"
          variant="filled"
          style={{ fontWeight: "bold" }}
        >
          {snackContent}
        </Alert>
      </Snackbar>
    </>
  );
}
