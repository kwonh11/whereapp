import { Router, Route, Link, Switch } from "react-router-dom";
import ChatPage from "../src/chat/page/ChatPage";
import Detail from "../src/detail/container";
import NewsPage from './news/page/NewsPage';
import HomePage from "./home/page/HomePage";
import { createBrowserHistory } from "history";
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const customHistory = createBrowserHistory();
const GlobalStyle = createGlobalStyle`
  ${reset}
`
// router
export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router history={customHistory}>
        <Link to="/detail">Detail</Link>
        <br />
        <Link to="/chat">Chat</Link>
        <br />
        <Link to="/news">News</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
