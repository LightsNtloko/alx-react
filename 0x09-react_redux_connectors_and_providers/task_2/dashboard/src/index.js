import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"; // Import applyMiddleware
import { Provider } from "react-redux";
import App from "./App/App";
import uiReducer from "./reducers/uiReducer";
import thunk from "redux-thunk"; // Import redux-thunk

// Create Redux store with uiReducer and apply redux-thunk middleware
const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
