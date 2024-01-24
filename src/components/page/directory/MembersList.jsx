import React from 'react'
import {useState, useEffect} from "react";
import Axios from 'axios';

export default function MembersList(props) {

    const [orgMembers, setOrgMembers] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{

            (async () => {
                try {
                 Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
                 Axios.defaults.headers.common['Content-Type'] = 'application/json';
     
                 const {data} = await Axios.get('/api/organization/members?id='+props.id); 
                setOrgMembers(data);
       
               } catch (e) {
                 console.log('Error Not Authorized: ' + e)
               }
              })()};
          }, []);

  return (
   <>
   <div class="card h-100">
            <div class="card-header pb-0 p-3">
              <h6 class="mb-0">Members from Organization {props.id}</h6>
            </div>
            <div class="card-body p-3">
              <ul class="list-group">
                {orgMembers.map(member => ( 
                <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                  <div class="avatar me-3">
                  <img src={ member.image ? (member.image).replace("/membership_portal/media/fs_business_mvt","http://localhost:8000/") : "/assets/img/no-pictures.png" } alt={member.first_name} className="border-radius-lg shadow" />
                  </div>
                  <div class="d-flex align-items-start flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{member.first_name} {member.last_name}</h6>
                    <p class="mb-0 text-xs">Hi! I need more information..</p>
                  </div>
                  <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="#">Reply</a>
                </li>
                ))}
              </ul>
            </div>
          </div>
   </>
  )
}
