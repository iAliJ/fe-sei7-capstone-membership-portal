import React from 'react'
import Axios from 'axios';
import {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import Dashboardmenu from './Dashboardmenu';
import Sidebar from './Sidebar';
// import Board from './Board';
// import UserHomepage from './UserHomepage'
// import Orgtable from '../organization/Orgtable'

import { Outlet } from 'react-router-dom';

export default function Dashboard(props) {

//useState for different view in React
const [isOrgs, setIsOrgs] = useState(false);



    //  const allRecord = message.map((record, index) => (
    //   <p>{index}. {record}</p>
    //   ))

//console.log(JSON.stringify(message));

  return (
    <>

<Sidebar />


<div className="main-content position-relative max-height-vh-100 h-100">
<Dashboardmenu logout={props.logout} />

<Outlet />

{/* <Routes>

  <Route path="/dashboard" element={ <UserHomepage benefits={allBenefits} /> }>
  <Route path="orgs" element={ <Orgtable /> }></Route>
  
  </Route>
  
</Routes> */}


</div>

    {/* <p>{allRecord}</p> */}
    {/* {JSON.stringify(message)} */}
    {/* <Scripts /> */}

    </>
  )
}
