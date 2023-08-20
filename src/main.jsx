import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx';
import './Index.css';
import { Provider } from 'react-redux';
import store from './redux/store/store.jsx';
import Router from './router/Router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
