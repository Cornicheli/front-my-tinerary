import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// REDUX
import rootReducers from "./redux/reducers/rootReducers"
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({reducer:rootReducers})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);