import CommentsInput from '../component/CommentsInput';
import Comments from '../component/Comments';
import { useSelector, useDispatch } from 'react-redux';
import { types, actions } from '../../common/reducer/detail';

  export default function CommentsContainer(props) {
    const comments = useSelector(state => state.detail.comments);
    const contentId = useSelector(state => state.detail.ids.contentId);
    const commenter = useSelector(state => state.user.info._id);
    
    const dispatch = useDispatch();
    const addComment = React.useCallback((comment) => {
        dispatch({ type: types.REQUEST_ADD_COMMENT, comment });
    }, [dispatch]);
    const updateComment = React.useCallback((_id, content, commenter, contentId) => {
      dispatch({ type: types.REQUEST_UPDATE_COMMENT, _id, content, commenter, contentId });
    }, [dispatch]);
    const deleteComment = React.useCallback((_id, commenter, contentId) => {
      dispatch({ type: types.REQUEST_DELETE_COMMENT, _id, commenter, contentId });
    }, [dispatch]);
    const addReply = React.useCallback((contentId, commentId, reply) => {
      dispatch({ type: types.REQUEST_ADD_REPLY, contentId, commentId, reply });
    }, [dispatch]);
    const deleteReply = React.useCallback((contentId, commentId, replyId, commenter) => {
      dispatch({ type: types.REQUEST_DELETE_REPLY, contentId, commentId, _id: replyId, commenter });
    }, [dispatch]);
    return (
    <React.Fragment>
        <CommentsInput 
        addComment={addComment} 
        contentId={contentId} 
        commenter={commenter}
        />
        <Comments 
        addReply={addReply}
        updateComment={updateComment}  
        deleteComment={deleteComment}
        deleteReply={deleteReply}
        comments={comments} 
        contentId={contentId}
        commenter={commenter} 
        />
    </React.Fragment>
    )
  }