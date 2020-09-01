import CategoryContainer from "../container/CategoryContainer";
import DateContainer from "../container/DateContainer";
import LoginContainer from "../container/LoginContainer";
import SearchContainer from "../container/SearchContainer";

export default function HomePage() {
  return (
    <div>
      <SearchContainer />
      <LoginContainer />
      <DateContainer />
      <CategoryContainer />
    </div>
  );
}
