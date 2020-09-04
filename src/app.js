import { Router, Route, Link, Switch } from "react-router-dom";
import ChatPage from "../src/chat/page/ChatPage";
import Detail from "../src/detail/container";
import NewsPage from "../src/news/page/NewsPage";
import HomePage from "../src/home/page/HomePage";
import UserPage from "../src/user/page/UserPage";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

// router
export default function App() {
  return (
    <React.Fragment>
      <Router history={customHistory}>
        <Link to="/detail">Detail</Link>
        <br />
        <Link to="/chat">Chat</Link>
        <br />
        <Link to="/news/josun">News</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/news/:company" component={NewsPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
