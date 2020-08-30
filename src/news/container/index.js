
export default function Detail(props) {
    const {match} = props;
    return (
        <div>
            {`${match.params.company} 입니다.`}
        </div>
    )
}