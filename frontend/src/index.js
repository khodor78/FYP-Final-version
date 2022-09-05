import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import { Provider } from 'react-redux';
import Start from './Start';
import { BrowserRouter } from 'react-router-dom';
import Characteristics from './sections/Characteristics';
import Album from './sections/Album';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
 
    <Start />
    </BrowserRouter>
 </React.StrictMode>
 </Provider>
 ,
  document.getElementById('root')
)
