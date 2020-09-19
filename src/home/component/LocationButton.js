import {Button} from '@material-ui/core';


export default function(props) {
    const {onClickLocation} = props;
    return (
        <Button color='primary' variant='outlined' onClick={onClickLocation}>현재위치사용</Button>
    )
}