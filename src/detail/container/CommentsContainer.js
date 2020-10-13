import CommentsInput from '../component/CommentsInput';
import Comments from '../component/Comments';
import { useSelector, useDispatch } from 'react-redux';
import { types, actions } from '../../common/reducer/detail';
import ErrorSnack from '../component/ErrorSnack';

export default function CommentsContainer(props) {
    const [sendable, setSendable] = React.useState(false);  
    const [snack, setSnack] = React.useState(false);
  
    const comments = useSelector(state => state.detail.comments);
    const contentId = useSelector(state => state.detail.ids.contentId);
    const user = useSelector(state => state.user.info._id);
    const { place } = useSelector(state => state.detail);

    const dispatch = useDispatch();
    const addComment = React.useCallback((comment) => {
        dispatch(actions.requestAddComment({comment, place}));
    }, [dispatch]);
    const updateComment = React.useCallback((_id, content) => {
      dispatch(actions.requestUpdateComment({ commentId: _id, content, commenter: user, contentId }));
    }, [dispatch]);
    const deleteComment = React.useCallback((_id) => {
      dispatch(actions.requestDeleteComment({ commentId: _id, commenter:user, contentId}));
    }, [dispatch]);
    const addReply = React.useCallback((commentId, reply) => {
      dispatch(actions.requestAddReply({ contentId, commentId, reply }));
    }, [dispatch]);
    const deleteReply = React.useCallback(( commentId, replyId ) => {
      dispatch(actions.requestDeleteReply({ contentId, commentId, replyId, commenter:user }));
    }, [dispatch]);
  
    return (
    <React.Fragment>
        <CommentsInput
          addComment={addComment}
          contentId={contentId}
          commenter={user}
          sendable={sendable}
          setSendable={setSendable}
          setSnack={setSnack}
        />
        <Comments
          addReply={addReply}
          updateComment={updateComment}
          deleteComment={deleteComment}
          deleteReply={deleteReply}
          comments={comments}
          contentId={contentId}
          commenter={user}
          sendable={sendable}
          setSendable={setSendable}
          setSnack={setSnack}
        />
        <ErrorSnack snack={snack} sendable={sendable} setSnack={setSnack} user={user} />
    </React.Fragment>
    )
  }