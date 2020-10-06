import tourImage from '../images/tour.png';
import courseImage from '../images/course.png';
import cultureImage from '../images/culture.png';
import festaImage from '../images/festa.png';
import houseImage from '../images/house.png';
import leportsImage from '../images/leports.png';
import shoppingImage from '../images/department.png';
import FoodImage from '../images/food.png';

const categoryCode = [
    {
        id: 12,
        name: "관광지",
        image: tourImage
    },
    {
        id: 14,
        name: "문화",
        image: cultureImage
    },
    {
        id: 15,
        name: "축제",
        image: festaImage 
    },
    {
        id: 25,
        name: "여행코스",
        image: courseImage
    },
    {
        id: 28,
        name: "레포츠",
        image: leportsImage
    },
    {
        id: 32,
        name: "숙박",
        image: houseImage
    },
    {
        id: 38,
        name: "쇼핑",
        image: shoppingImage
    },
    {
        id: 39,
        name: "음식점",
        image: FoodImage
    }
];
export default categoryCode;
export const getCategory = (id) => {
    return categoryCode.find(category => category.id == id).name;
};