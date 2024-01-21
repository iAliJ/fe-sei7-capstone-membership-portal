// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import axios from "axios";

import Home from './components/page/Home';
import About from './components/page/About';
import Login from './components/page/Login';
import Signup from './components/page/Signup';
import Dashboard from './components/page/Dashboard';

function App(){

  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
       setIsAuth(true); 
     }
   }, [isAuth]);


  return (
    <>
    {/* <Home/> */}
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/about" element={ <About/> }></Route>
      <Route path="/login" element={ <Login/> }></Route>
      <Route path="/signup" element={ <Signup/> }></Route>
      <Route path="/dashboard" element={ <Dashboard/> }></Route>
    </Routes>
    </>
  );
}

export default App;
