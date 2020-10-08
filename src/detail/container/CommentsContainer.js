import CommentsInput from '../component/CommentsInput';
import Comments from '../component/Comments';
import { useSelector, useDispatch } from 'react-redux';
import { types, actions } from '../../common/reducer/detail';

  export default function CommentsContainer(props) {
    const comments = useSelector(state => state.detail.comments);
    const nextId = useSelector(state => state.detail.comments.length);
    const contentId = useSelector(state => state.detail.ids.contentId);
    const commenter = useSelector(state => state.user.info._id);
    const nick = useSelector(state => state.user.info.nick);

    const dispatch = useDispatch();
    const addComment = React.useCallback((comment) => {
      dispatch({ type: types.ADD_COMMENT, comment });
    }, [dispatch]);
    return (
    <React.Fragment>
        <CommentsInput addComment={addComment} contentId={contentId} commenter={commenter} nick={nick} nextId={nextId}/>
        <Comments comments={comments} />
    </React.Fragment>
    )
  }