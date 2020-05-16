import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
