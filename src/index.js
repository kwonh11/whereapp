import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./common/store";
import ErrorBoundary from './common/ErrorBoundary';

// store ContextAPI로 감싸기
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
