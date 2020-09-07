import { Router, Route, Link, Switch } from "react-router-dom";
import ChatPage from "./chat/page/ChatPage";
import Detail from "./detail/container";
import NewsPage from "./news/page/NewsPage";
import HomePage from "./home/page/HomePage";
import UserPage from "./user/page/UserPage";
import { createBrowserHistory } from "history";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import GNBPage from "./gnb/page/GNBPage";

const customHistory = createBrowserHistory();
const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
        box-sizing : border-box;
        text-decoration: none;
  }
  body {
      background-color: rgb(249, 249, 249);
  }
`;
const AppContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
`;
// router
export default function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router history={customHistory}>
        <GNBPage />
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
        <ChatPage />
      </Router>
    </AppContainer>
  );
}
