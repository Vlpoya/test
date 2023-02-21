import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './redux/store';
import App from './App';
import MyCostomDataContextProvider from './Context/DataContext';

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <MyCostomDataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyCostomDataContextProvider>

  </Provider>,

);
