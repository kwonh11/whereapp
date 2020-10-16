import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';


export default function ({ snack, sendable, user, setSnack, snackContent, setSnackContent }) {
  const handleCloseSnackbar = () => {
    setSnack(false);
  };

  React.useEffect(() => {
    if (sendable && !user) {
      setSnackContent("로그인 후 이용해주세요.")
    }
    if (!sendable && !user) {
      setSnackContent("1글자 이상 300글자 이하로 작성해주세요.")
    }
  }, [sendable, user]);

  return (
    <>
      <Snackbar open={snack} onClose={handleCloseSnackbar} anchorOrigin={{vertical:'bottom', horizontal:'center'}}>
        <Alert onClose={handleCloseSnackbar} severity="error" variant="filled" style={{ fontWeight: "bold" }}>
          {snackContent}
        </Alert>
      </Snackbar>
    </>
  )
}