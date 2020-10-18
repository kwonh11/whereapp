import { Router, Route, Switch } from "react-router-dom";
import ChatPage from "./chat/page/ChatPage";
import PlacePage from "./place/page/PlacePage";
import HomePage from "./home/page/HomePage";
import { createBrowserHistory } from "history";
import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import GNBPage from "./gnb/page/GNBPage";
import DetailPage from "./detail/page/DetailPage";
import UserPage from "./user/page/UserPage";
import Footer from "./common/component/Footer";
import SliderContainer from "./home/container/SliderContainer";

const customHistory = createBrowserHistory();
const GlobalFontStyle = createGlobalStyle`
`;
const GlobalStyle = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  };
  * {
    box-sizing : border-box;
    text-decoration: none;
    font-family: 'S-CoreDream-3Light' !important;
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
  return (
    <React.Fragment>
      <GlobalFontStyle />
      <GlobalStyle />
      <Router history={customHistory}>
        <GNBPage />
        <Switch>
          <Route path="/" exact component={SliderContainer} />
        </Switch>
        <AppContainer>
          <Switch>
            <Route path="/user/:tab" component={UserPage} />
            <Route path="/chat" component={ChatPage} />
            <Route
              path="/place/:contenttypeid/:contentid"
              component={DetailPage}
            />
            <Route path="/place" component={PlacePage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
          <ChatPage />
        </AppContainer>
        <Route path="/" exact component={Footer} />
      </Router>
    </React.Fragment>
  );
}
