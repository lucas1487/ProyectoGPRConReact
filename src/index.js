import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './Menu/Menu';
import SeccionMain from './SeccionMain/SeccionMain';
import PrimeraSeccion from './PrimeraSeccion/PrimeraSeccion';
import SegundaSeccion from './SegundaSeccion/SegundaSeccion';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <BrowserRouter>
    <Routes>
    <Route path="/" element={<SeccionMain />} />
      
  </Routes>

  <Routes>
    <Route path="/" element={<PrimeraSeccion />} />
      
  </Routes>
  <Routes>
    <Route path="/" element={<SegundaSeccion />} />
      
  </Routes>

  <Routes>
    <Route path="/Menu" element={<Menu />} />
      
  </Routes>
</BrowserRouter>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
