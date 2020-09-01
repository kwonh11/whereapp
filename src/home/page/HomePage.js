import CategoryContainer from "../container/CategoryContainer";
import DateContainer from "../container/DateContainer";
import LoginContainer from "../container/LoginContainer";
import SearchContainer from "../container/SearchContainer";
import SliderContainer from '../container/SliderContainer';

export default function HomePage() {
  return (
    <div>
      <SearchContainer />
      <LoginContainer />
      <DateContainer />
      <CategoryContainer />
      <SliderContainer />
    </div>
  );
}
