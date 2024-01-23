// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, redirect } from "react-router-dom";
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
// import Orgtable from './components/page/organization/Orgtable'
import Directory from './components/page/directory/DirectoryTable'

function App(){
  const [isAuth, setIsAuth] = useState(false);

  const [userData, setUserData] = useState({});
  

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
       setIsAuth(true); 
     }
   }, [isAuth]);


  //  useEffect(() => {

  //   setUserData(userData)
    
  //  }, []);

   const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    localStorage.removeItem("access_token");
    localStorage.removeItem("first_name");
    setIsAuth(false);
    setUserData(null);
    window.location.href = '/login'
  };


   const addOrg = (org) => {
    console.log(`ORG data inside addOrg app.js`);
    console.log(org);
    Axios.post("api/organization/create", org)
    .then(res => {
    console.log("org Signed Up Successfully");
    res.redirect("dashboard/home")
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
      <Route path="/login" element={ <Login setUserData={setUserData} /> }></Route>
      <Route path="/signup" element={ <Signup/> }></Route>

      <Route path="/dashboard" element={ userData && <Dashboard userData={userData} logout={onLogoutHandler} /> }>
        <Route path="home" element={ <UserHomepage /> }></Route>
        <Route path="directory" element={ <Directory /> }></Route>
        <Route path="benefits" element={ <Benefits /> }></Route>
      </Route>

      {/* <Route path="/dash" element={ <UserHomepage/> }></Route> */}
      <Route path="/benefits" element={ <Benefits/> }></Route>
      <Route path="/OrgForm" element={ <OrgForm addOrg={addOrg}/> }></Route>
    </Routes>
    
    </>
  );
}

export default App;
