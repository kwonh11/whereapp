import { Router, Route, Link, Switch } from "react-router-dom";
import Chat from "../src/chat/container";
import Detail from "../src/detail/container";
import Home from "../src/home/component";
import News from "../src/news/container";
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
          <Route path="/chat" component={Chat} />
          <Route path="/news/:company" component={News} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
