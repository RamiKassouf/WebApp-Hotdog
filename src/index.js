import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS
import './Styling/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Pages
import Home from './pages/Home';
import Hello from './pages/Hello';
import Breeds from './pages/Breeds';
import Download from './pages/Download';
import Subscription from './pages/Subscription';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


//Context
import {ThemeContextProvider} from "./Context/ThemeContext"
import {SigninContextProvider} from './Context/SigninContext';
import {SignupContextProvider} from './Context/SignupContext';
import { LoggedinContextProvider } from './Context/LoggedinContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoggedinContextProvider>
  <SigninContextProvider>
  <SignupContextProvider>    
  <ThemeContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Breeds" exact element={<Breeds />} />
        <Route path="/Download" exact element={<Download />} />
        <Route path="/Subscription" exact element={<Subscription />} />
        <Route path="/hello" exact element={<Hello />} />
      </Routes>
    </BrowserRouter>
  </ThemeContextProvider>
  </SignupContextProvider>
  </SigninContextProvider>
  </LoggedinContextProvider>
);