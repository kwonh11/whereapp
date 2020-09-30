import CommentsInput from '../component/CommentsInput';
import Comments from '../component/Comments';

const commentList = [
    {
      id: 1,
      commenter: "ggyu",
      content: "여기 가보고 싶어요",
      createAt: Date.now(),
      like: false,
      likeCount: 50,
      reply : []
    },
    {
      id: 2,
      commenter: "hyuk",
      content: "추천 합니다.",
      createAt: Date.now(),
      like: true,
      likeCount: 40,
      reply : []
    },
    {
      id: 3,
      commenter: "ggyu",
      content: "여기 가보고 싶어요",
      createAt: Date.now(),
      like: false,
      likeCount: 50,
      reply : []
    },
    {
      id: 4,
      commenter: "hyuk",
      content: "추천 합니다.",
      createAt: Date.now(),
      like: true,
      likeCount: 40,
      reply : [
        {
          commenter: "hyuk",
          content: "저도 추천 합니다.",
          createAt: Date.now(),
        }
      ]
    },
    {
      id: 5,
      commenter: "ggyu",
      content: "여기 가보고 싶어요",
      createAt: Date.now(),
      like: false,
      likeCount: 50,
      reply : []
    },
    {
      id: 6,
      commenter: "hyuk",
      content: "추천 합니다.",
      createAt: Date.now(),
      like: true,
      likeCount: 40,
      reply : []
    },
  ];

  export default function CommentsContainer(props) {
    const [comments, setComments] = React.useState(commentList);

    return (
    <React.Fragment>
        <CommentsInput />
        <Comments comments={comments}/>
    </React.Fragment>
    )
  }