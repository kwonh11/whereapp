import Slider from '../component/Slider';
import Card from '../component/NewsCard';


export default function SliderContainer(props) {
    return (
        <Slider>
            <Card />
            <Card />
            <Card />
            <Card />
        </Slider>
    )
}