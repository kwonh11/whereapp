import styled from 'styled-components';
import {Divider} from '@material-ui/core';
import Loading from '../../common/component/Loading';

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 300px;
    padding: 20px 10px;
    margin: 20px;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export default function Comments(props) {
    const {comments, loading} = props;
    return (
    <CommentContainer>
        {
        comments.map((comment,i) => (
            <Container key={i}>
                {comment.commenter} <br />
                {comment.content} <br />
                {comment.createAt} <br />
                <Divider />
            </Container>
        ))
        } 
        {loading && <Loading />}
    </CommentContainer>
    )
}