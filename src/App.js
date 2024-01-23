// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import axios from "axios";

import Home from './components/page/home/Home';
import About from './components/page/home/About';
import Login from './components/page/home/Login';
import Signup from './components/page/home/Signup';
import Dashboard from './components/page/dashboard/Dashboard';
import UserHomepage from './components/page/dashboard/UserHomepage';
import Benefits from './components/page/dashboard/Benefits';
import OrgForm from './components/page/OrgForm';

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
      {/* <Route path="/dash" element={ <UserHomepage/> }></Route> */}
      <Route path="/benefits" element={ <Benefits/> }></Route>
      <Route path="/OrgForm" element={ <OrgForm/> }></Route>
    </Routes>
    
    </>
  );
}

export default App;
