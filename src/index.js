import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers/index'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
