import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import CommentsInput from "../component/CommentsInput";
import Comments from "../component/Comments";
import { actions } from "../../common/reducer/detail";
import ErrorSnack from "../component/ErrorSnack";

const getComments = (state) => state.detail.comments;
const getSortKey = (state) => state.detail.commentSortKey;
const getCommentsWithSortKey = createSelector(
  [getComments, getSortKey],
  (comments, sortKey) => {
    const commentList = [...comments];
    if (sortKey === "registered") {
      return commentList;
    }
    if (sortKey === "recent") {
      return commentList.reverse();
    }
    if (sortKey === "like") {
      commentList.sort((a, b) => {
        return b.like.length - a.like.length;
      });
      return commentList;
    }
    return commentList;
  }
);

export default function CommentsContainer(props) {
  const [sendable, setSendable] = React.useState(false);
  const [snack, setSnack] = React.useState(false);
  const [snackContent, setSnackContent] = React.useState("");

  const comments = useSelector(getCommentsWithSortKey);
  const contentId = useSelector((state) => state.detail.ids.contentId);
  const user = useSelector((state) => state.user.info._id);
  const isLoadingComments = useSelector(
    (state) => state.detail.isLoadingComments
  );
  const sortKey = useSelector((state) => state.detail.commentSortKey);
  const { place } = useSelector((state) => state.detail);

  const dispatch = useDispatch();

  const addComment = React.useCallback(
    (comment) => {
      dispatch(actions.requestAddComment({ comment, place }));
    },
    [dispatch]
  );

  const updateComment = React.useCallback(
    (_id, content) => {
      dispatch(
        actions.requestUpdateComment({
          commentId: _id,
          content,
          commenter: user,
          contentId,
        })
      );
    },
    [dispatch]
  );

  const deleteComment = React.useCallback(
    (_id) => {
      dispatch(
        actions.requestDeleteComment({
          commentId: _id,
          commenter: user,
          contentId,
        })
      );
    },
    [dispatch]
  );

  const addReply = React.useCallback(
    (commentId, reply) => {
      dispatch(actions.requestAddReply({ contentId, commentId, reply }));
    },
    [dispatch]
  );

  const deleteReply = React.useCallback(
    (commentId, replyId) => {
      dispatch(
        actions.requestDeleteReply({
          contentId,
          commentId,
          replyId,
          commenter: user,
        })
      );
    },
    [dispatch]
  );

  const addLike = React.useCallback(
    (commentId) => {
      dispatch(actions.requestLike({ userId: user, commentId }));
    },
    [dispatch]
  );

  const setSortKey = React.useCallback(
    (key) => {
      dispatch(actions.setSortKey(key));
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      <CommentsInput
        addComment={addComment}
        setSendable={setSendable}
        setSnack={setSnack}
        setSnackContent={setSnackContent}
        contentId={contentId}
        commenter={user}
        sendable={sendable}
      />
      <Comments
        isLoadingComments={isLoadingComments}
        setSortKey={setSortKey}
        addReply={addReply}
        updateComment={updateComment}
        deleteComment={deleteComment}
        deleteReply={deleteReply}
        addLike={addLike}
        setSendable={setSendable}
        setSnack={setSnack}
        setSnackContent={setSnackContent}
        sortKey={sortKey}
        comments={comments}
        contentId={contentId}
        commenter={user}
        sendable={sendable}
      />
      <ErrorSnack
        snack={snack}
        sendable={sendable}
        setSnack={setSnack}
        user={user}
        snackContent={snackContent}
        setSnackContent={setSnackContent}
      />
    </React.Fragment>
  );
}
