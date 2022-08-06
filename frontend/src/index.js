import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Start from './Start';
import { BrowserRouter } from 'react-router-dom';
import Characteristics from './sections/Characteristics';
import Album from './sections/Album';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
 
    <Start />
    </BrowserRouter>
 </React.StrictMode>,
  document.getElementById('root')
)
