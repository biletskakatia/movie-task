import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App.jsx'
import { Provider } from "react-redux";
import { store } from './Redux/store.js';
import './Styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)
