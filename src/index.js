import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <Auth0Provider 
      domain = "dev-jlrampwe.us.auth0.com"
      clientId = "jfcN8D2FmcZlyFFQEhl63hDoLsIVzttV"
      redirectUri = {window.location.origin}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
