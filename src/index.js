import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styling/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Hello from './pages/Hello';
import Signup from './pages/Signup';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import {ThemeContextProvider} from "./Context/ThemeContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ThemeContextProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Signup" exact element={<Signup />} />
      <Route path="/hello" exact element={<Hello />} />
    </Routes>
  </BrowserRouter>
      </ThemeContextProvider>
);