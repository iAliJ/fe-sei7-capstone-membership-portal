import React from 'react'
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

export default function DirectoryTable() {

    const [message, setMessage] = useState([]);

    const [allDirectory, setAllDirectory] = useState([]);
  
    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{
          console.log(localStorage.getItem('access_token'));
         (async () => {
           try {
            Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
            Axios.defaults.headers.common['Content-Type'] = 'application/json';

            const {data} = await Axios.get('/api/organization/list'); 
             setMessage(data);
             setAllDirectory(data);
  
          } catch (e) {
            console.log('Error Not Authorized: ' + e)
          }
         })()};
     }, []);


  return (

<div className='container-fluid py-4'>
   
   <div class="container-fluid py-2">

<div class="row">
    <div class="col-md-8 me-auto text-left">
    <h5>Directory</h5>
    
    </div>
</div>

<div class="row">
<div class="col">
  <div class="card">
    <div class="table-responsive">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Logo</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">CR Number</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">City</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Country</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Website</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
          </tr>
        </thead>
        <tbody>

        {allDirectory.map(organization => ( 
        <tr key={organization.id}>
          <td class="align-middle text-sm px-3"><p class="text-sm text-primary h5 mb-0"><Link to="/dashboard/directory/detail" state={{id:organization.id, name:organization.name}}>{organization.name}</Link></p></td>
          <td class="align-middle text-sm"><p class="text-secondary mb-0"><img src={ organization.logo ? (organization.logo).replace("/membership_portal/media/fs_business_mvt","http://localhost:8000/") : "/assets/img/no-pictures.png" } alt={organization.name} className="avatar avatar-sm me-3" /></p></td>
          <td class="align-middle text-sm"><p class="text-secondary mb-0">{organization.cr_number}</p></td>
          <td class="align-middle text-center text-sm"><span class="text-secondary text-sm">{organization.city}</span></td>
          <td class="align-middle text-center text-sm"><span class="text-secondary text-sm">{organization.country_name} <img src={organization.country_flag} alt={organization.country_short_name} height="15px" /></span></td>
          <td class="align-middle text-sm"><span class="text-secondary text-sm">{organization.website}</span></td>
          <td class="align-middle text-center text-sm">
              <span class="badge badge-dot me-4">
              {organization.status == 1 ? <><span class="text-dark text-xs">Active <i class="bg-success"></i></span></>  : <><span class="text-dark text-xs">Pending <i class="bg-danger"></i></span></> }
              </span>
          </td>
        </tr>
        ))}
          
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>

</div>
</div>

  )
}
