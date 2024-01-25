import React from 'react'
import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

export default function MemberDetail(props) {

    const [memberDetail, setMemberDetail] = useState();

    const location = useLocation();
    const { email, org } = location.state;
    // const [profile,setProfile] = useState()

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{

            (async () => {
                try {
                 Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
                 Axios.defaults.headers.common['Content-Type'] = 'application/json';
     
                 const {data} = await Axios.get('/api/user?email='+email); 
                 setMemberDetail(data);
       
               } catch (e) {
                 console.log('Error Not Authorized: ' + e)
               }
              })()};
          }, []);

  return (
  <>
  <div>{memberDetail ? <>{
    
    
   
<div class="container-fluid py-4">
<div class="row mt-3">
    <div class="col-12 mt-md-0 mt-4">

          <div class="card h-100">
            <div class="card-header pb-0 p-3">
              <div class="row">
                <div class="col-md-8 d-flex align-items-center">
                  <h2 class="mb-0">{memberDetail.profile['first_name']} {memberDetail.profile['last_name']}</h2>
                </div>
                <div class="col-md-4 text-end">
                  
                  <img src={ memberDetail.profile['image'] ? memberDetail.profile['image'].replace("/membership_portal/media/fs_business_mvt","http://localhost:8000/") : "/assets/img/no-pictures.png" } alt={memberDetail.profile['username']} className="img-fluid shadow border-radius-xl" />
                </div>
              </div>
            </div>

            <div class="card-body p-3">
              <p class="text-sm">
                Job Title: {memberDetail.profile['job_title']}<br />
                Organization: {memberDetail.profile['organization_id']} - {org}
                {/* {orgDetail.content_info} */}
              </p>
              <hr class="horizontal gray-light my-4" />
              <ul class="list-group">
 
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Phone:</strong> &nbsp; {memberDetail.profile['phoneNumber']}</li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Email:</strong> &nbsp; {memberDetail.profile['email']}</li>

                {/* <li class="list-group-item border-0 ps-0 pt-0"><strong class="text-dark">Address:</strong> &nbsp; {orgDetail.address_one}, {orgDetail.address_two}</li> */}
                {/* <li class="list-group-item border-0 ps-0"><strong class="text-dark">Zip Code:</strong> &nbsp; {orgDetail.zip_code}</li> */}
                {/* <li class="list-group-item border-0 ps-0"><strong class="text-dark">City:</strong> &nbsp; {orgDetail.city}</li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Country:</strong> &nbsp; {orgDetail.country_name} <img src={orgDetail.country_flag} alt={orgDetail.country_short_name} height="15px" /></li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Phone:</strong> &nbsp; {orgDetail.phone_number}</li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Email:</strong> &nbsp; {orgDetail.email_address}</li>
                <li class="list-group-item border-0 ps-0"><strong class="text-dark">Website:</strong> &nbsp; {orgDetail.phone_number}</li>
                <li class="list-group-item border-0 ps-0 pb-0"> */}

                  
              </ul>

            </div>
          </div>

        </div>
  </div>
  </div>

    }</>
    
    : "" } </div>



  </>

  )
}

