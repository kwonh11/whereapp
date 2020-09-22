import { Router, Route, Switch } from "react-router-dom";
import ChatPage from "./chat/page/ChatPage";
import NewsPage from "./place/page/PlacePage";
import HomePage from "./home/page/HomePage";
import { createBrowserHistory } from "history";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import GNBPage from "./gnb/page/GNBPage";
import DetailPage from "./detail/page/DetailPage";
import UserPage from "./user/page/UserPage";
import Modal from "./common/component/Modal";
import Footer from "./common/component/Footer";
import SliderContainer from "./home/container/SliderContainer";

// login test
import SignIn from "./gnb/component/Signin";

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
  section {
    padding-top: 80px;
  }
`;

const AppContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
`;

// router
export default function App() {
  console.log("app!!!!!!!!!");
  return (
  <React.Fragment>
    <Router history={customHistory}>
      <GNBPage />
      <Switch>
        <Route path="/" exact component={SliderContainer} />
      </Switch>
      <AppContainer>
        <GlobalStyle />
          <Switch>
            <Route path="/user/:tab" component={UserPage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/place/:id" component={DetailPage} />
            <Route path="/place" component={NewsPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
          <ChatPage />
      </AppContainer>
    </Router>
    <Footer />
  </React.Fragment>
  );
}