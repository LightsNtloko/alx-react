import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer'; // Import the rootReducer

// Create the Redux store using the rootReducer
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}> {/* Provide the store to the entire app */}
    <App />
  </Provider>,
  document.getElementById('root')
);
