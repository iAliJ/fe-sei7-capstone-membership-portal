import React from 'react'
import {useState, useEffect} from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

export default function MembersList(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
              <h4 class="mb-0">Members</h4>
            </div>
            <div class="card-body p-3">
              <ul class="list-group">
                {orgMembers.map(member => ( 
                <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                  <div class="avatar me-3">
                  <img src={ member.image ? (member.image).replace("/membership_portal/media/fs_business_mvt","http://localhost:8000/") : "/assets/img/no-pictures.png" } alt={member.first_name} className="border-radius-lg shadow" />
                  </div>
                  <div class="d-flex align-items-start flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{member.user_id} - {member.first_name} {member.last_name}</h6>
                    <p class="mb-0 text-xs">{member.email}</p>
                  </div>
                  <Link to="/dashboard/directory/member" state={{email:member.email, org:props.org}} class="btn btn-link mb-0 pe-1 ps-0 ms-auto">More</Link>
                </li>
                ))}
              </ul>

{/* <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
    <Modal.Title>{member.first_name} {member.last_name}</Modal.Title>
</Modal.Header>
<Modal.Body>{member.email}</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
    Close
    </Button>
</Modal.Footer>
</Modal> */}

            </div>
          </div>
   </>
  )
}
