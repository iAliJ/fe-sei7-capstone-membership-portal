import React from 'react'
import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

import MembersList from './MembersList';

export default function DirectoryDetail(props) {

    // const [message, setMessage] = useState([]);

    const [orgDetail, setOrgDetail] = useState([]);

    const location = useLocation();
    //console.log(location);
    const { id } = location.state;

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{

            (async () => {
                try {
                 Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
                 Axios.defaults.headers.common['Content-Type'] = 'application/json';
     
                 const {data} = await Axios.get('/api/organization/detail?id='+id); 
                //  setMessage(data);
                 setOrgDetail(data);
       
               } catch (e) {
                 console.log('Error Not Authorized: ' + e)
               }
              })()};
          }, []);
        

  return (
    <>
    {/* <div>Directory Detail for {id}, name: {name}</div> */}
<div class="container-fluid py-4">
<div class="row mt-3">
    <div class="col-12 col-xl-8 mt-md-0 mt-4">
        {/* {orgDetail.map(org => (  */}
          <div class="card h-100">
            <div class="card-header pb-0 p-3">
              <div class="row">
                <div class="col-md-8 d-flex align-items-center">
                  <h2 class="mb-0">{orgDetail.name}</h2>
                </div>
                <div class="col-md-4 text-end">
                  {/* <a href="#">
                    <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-hidden="true" aria-label="Edit Profile" data-bs-original-title="Edit Profile"></i><span class="sr-only">Edit Profile</span>
                  </a> */}
                  <img src={ orgDetail.logo ? (orgDetail.logo).replace("/membership_portal/media/fs_business_mvt","http://localhost:8000/") : "/assets/img/no-pictures.png" } alt={orgDetail.name} className="img-fluid shadow border-radius-xl" />
                </div>
              </div>
            </div>
            <div class="card-body p-3">
              <p class="text-sm">
                Description: <br />
                {orgDetail.content_info}
              </p>
              <hr class="horizontal gray-light my-4" />
              <ul class="list-group">
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Commercial Registry No.:</strong> &nbsp; {orgDetail.cr_number}</li>
                <li class="list-group-item border-0 ps-0 pt-0"><strong class="text-dark">Address:</strong> &nbsp; {orgDetail.address_one}, {orgDetail.address_two}</li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Zip Code:</strong> &nbsp; {orgDetail.zip_code}</li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">City:</strong> &nbsp; {orgDetail.city}</li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Country:</strong> &nbsp; {orgDetail.country_name} <img src={orgDetail.country_flag} alt={orgDetail.country_short_name} height="15px" /></li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Phone:</strong> &nbsp; {orgDetail.phone_number}</li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Email:</strong> &nbsp; {orgDetail.email_address}</li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Website:</strong> &nbsp; {orgDetail.phone_number}</li>
                <li class="list-group-item border-0 ps-0 pb-0">
                  <strong class="text-dark text-sm">Social:</strong> &nbsp;
                  <a class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="#">
                    <i class="fab fa-facebook fa-lg" aria-hidden="true"></i>
                  </a>
                  <a class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="#">
                    <i class="fab fa-twitter fa-lg" aria-hidden="true"></i>
                  </a>
                  <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="#">
                    <i class="fab fa-instagram fa-lg" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        {/* ))}  */}
        </div>

    <div class="col-12 col-xl-4 mt-xl-0 mt-4">
          <MembersList id={id} org={orgDetail.name} />
        </div>
</div>
</div>
    </>

  )
}
