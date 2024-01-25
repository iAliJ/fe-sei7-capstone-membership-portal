// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import Axios from "axios";

import Home from './components/page/home/Home';
import About from './components/page/home/About';
import Login from './components/page/home/Login';
import Signup from './components/page/home/Signup';
import Dashboard from './components/page/dashboard/Dashboard';
// import UserHomepage from './components/page/dashboard/UserHomepage';
import Benefits from './components/page/dashboard/Benefits';
import Events from './components/page/dashboard/Events';
import OrgForm from './components/page/OrgForm';
import OrgApprovalWait from './components/page/OrgApprovalWait';

import UserHomepage from './components/page/dashboard/UserHomepage'
// import Orgtable from './components/page/organization/Orgtable'
import Directory from './components/page/directory/DirectoryTable'
import DirectoryDetail from './components/page/directory/DirectoryDetail' 
import BenefitAdd from "./components/benefit/BenefitAdd";
import MemberDetail from './components/page/directory/MemberDetail'
import UserEditForm from './components/page/organization/UserEditForm'


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

  const setUser = (user) =>{
  Axios.post("api/user/update", user)
  .then((res) => {
    console.log("Profile Updated Successfully");
    res.redirect("dashboard/home")
  })
  .catch((err) => {
    console.log("Error Updating Profile");
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

      <Route path="/dashboard" element={ localStorage.getItem('organization_id')!=null ? <Dashboard userData={userData} logout={onLogoutHandler} /> : <OrgForm addOrg={addOrg}/> }>
        <Route path="home" element={ <UserHomepage /> }></Route>
        <Route path="directory" element={ <Directory /> }></Route>
        <Route path="directory/detail" element={ <DirectoryDetail /> }></Route>
        <Route path="directory/member" element={ <MemberDetail /> }></Route>
        <Route path="benefits" element={ <Benefits /> }></Route>
        <Route path="events" element={ <Events /> }></Route>
        <Route path="" element={ <OrgForm addOrg={addOrg}/> }></Route>
        <Route path="pending" element={ <OrgApprovalWait /> }></Route>
        <Route path="benefit/add" element={ <BenefitAdd /> }></Route>
      </Route>

      {/* <Route path="/dash" element={ <UserHomepage/> }></Route> */}
      <Route path="/benefits" element={ <Benefits/> }></Route>
      {/* <Route path="/OrgForm" element={ <OrgForm addOrg={addOrg}/> }></Route> */}
      <Route path="/profile" element={ <UserEditForm setUser={setUser}/> }></Route>
    </Routes>
    
    </>
  );
}

export default App;
