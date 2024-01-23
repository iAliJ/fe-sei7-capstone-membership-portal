// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import Axios from "axios";

import Home from './components/page/home/Home';
import About from './components/page/home/About';
import Login from './components/page/home/Login';
import Signup from './components/page/home/Signup';
import Dashboard from './components/page/dashboard/Dashboard';
// import UserHomepage from './components/page/dashboard/UserHomepage';
import Benefits from './components/page/dashboard/Benefits';
import OrgForm from './components/page/OrgForm';

import UserHomepage from './components/page/dashboard/UserHomepage'
import Orgtable from './components/page/organization/Orgtable'

function App(){
  const [isAuth, setIsAuth] = useState(false);
  

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
       setIsAuth(true); 
     }
   }, [isAuth]);

   
   const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    setIsAuth(false);
    window.location.href = '/login'
  };


   const addOrg = (org) => {
    console.log(`ORG ${org}`);
    console.log(org);
    axios.post("org/add", org)
    .then(res => {
    console.log("org Signed Up Successfully");
    })
    .catch(err => {
    console.log("Error Signing Up org");
    console.log(err);
    })
  }

  return (
    <>

    {/* <Home/> */}
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/about" element={ <About/> }></Route>
      <Route path="/login" element={ <Login/> }></Route>
      <Route path="/signup" element={ <Signup/> }></Route>

      <Route path="/dashboard" element={ <Dashboard logout={onLogoutHandler} /> }>
        <Route path="home" element={ <UserHomepage /> }></Route>
        <Route path="orgs" element={ <Orgtable /> }></Route>
      </Route>

      {/* <Route path="/dash" element={ <UserHomepage/> }></Route> */}
      <Route path="/benefits" element={ <Benefits/> }></Route>
      <Route path="/OrgForm" element={ <OrgForm addOrg={addOrg}/> }></Route>
    </Routes>
    
    </>
  );
}

export default App;
