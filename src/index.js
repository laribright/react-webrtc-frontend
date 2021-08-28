import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";

import App from "./App";
// import store from "./store";
import "./index.css";
import { ContextProvider } from "./SocketContextAPI";

ReactDOM.render(
  // <Provider store={store}>
  <ContextProvider>
    <App />
  </ContextProvider>,
  // </Provider>,
  document.getElementById("root")
);
