import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';


export default function ({ snack, sendable, user, setSnack }) {
  const [message, setMessage] = React.useState("로그인 후 이용해주세요");
  const handleCloseSnackbar = () => {
    setSnack(false);
  };

  React.useEffect(() => {
    if (sendable && !user) {
      setMessage("로그인 후 이용해주세요.")
    }
    if (!sendable && !user) {
      setMessage("1글자 이상 300글자 이하로 작성해주세요. 로그인 후 이용 가능합니다.")
    }
  }, [sendable, user]);

  return (
    <>
      <Snackbar open={snack} onClose={handleCloseSnackbar} anchorOrigin={{vertical:'bottom', horizontal:'center'}}>
        <Alert onClose={handleCloseSnackbar} severity="error" variant="filled" style={{ fontWeight: "bold" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}