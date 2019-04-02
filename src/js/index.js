import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/ConfigureStore';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <App />,
  rootElement
);
