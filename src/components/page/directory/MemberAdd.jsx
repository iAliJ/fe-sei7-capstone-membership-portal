import React from 'react'
import { useState } from 'react';
import Axios from 'axios';

export default function MemberAdd() {

const [newRecord , setnewRecord] = useState({});

const handleChange = (event) => { 
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const record = {...newRecord};
    record[attributeToChange] = newValue;
    console.log(record);
    setnewRecord(record);
} 

const onhandleSubmit = (event) => {
    event.preventDefault();

    const record = {...newRecord};

    record['organization_id']=localStorage.getItem('organization_id');
    record['status']=1;
    record['dob']="2000-01-01";
    record['martial']="";
    record['gender']="Male";
    record['image']="/membership_portal/media/fs_business_mvt/static/uploads/def-user_VqFJ7Ce.jpg";

    console.log(record);

Axios.post('/api/user/invite/', record)
.then(res =>{
    console.log(res.data);
    window.location.href = '/dashboard/home'
})
.catch(e => {
    console.log(e);
})

}

// password = request.data.get('password')
// email = request.data.get('email')
// role = 4
// dob = request.data.get('dob')
// martial = request.data.get('martial')
// gender = request.data.get('gender')
// first_name = request.data.get('first_name')
// last_name = request.data.get('last_name')
// image = ""
// job_title = ""
// phoneNumber = request.data.get('phoneNumber')

    return (

<div className="container-fluid py-4">
    <div className="row">
    <div className="col-lg-9 col-12 mx-auto">
        <div className="card card-body mt-4">
        <form onSubmit={onhandleSubmit} autoComplete="off">
        <h6 className="mb-0">Add a New Member</h6>
        <p className="text-sm mb-0">Please the details and share password to the new Member to reset and Login</p>
        <hr className="horizontal dark my-3" />
        <label htmlFor="first_name" className="form-label">First Name</label>
        <input type="text" className="form-control" id="first_name" name="first_name" onChange={handleChange} required />

        <label htmlFor="last_name" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="last_name" name="last_name" onChange={handleChange} required />

        <label htmlFor="job_title" className="form-label">Job Role</label>
        <input type="text" className="form-control" id="job_title" name="job_title" onChange={handleChange} required />

        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" onChange={handleChange} required />

        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="text" className="form-control" id="email" name="email" onChange={handleChange} required autoComplete="off" />

        <label htmlFor="password" className="form-label">Temporary Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={handleChange} required autoComplete="off" />
                    
            
        <div className="d-flex justify-content-end mt-4">
            
        <input type="hidden" name="organization_id" value={localStorage.getItem('organization_id')} /> 
        <input type="hidden" name="martial" value="Single" /> 

            <button type="submit" name="button" className="btn bg-gradient-primary m-0 ms-2">Invite Member</button>
            
        </div>
        </form>
        </div>
    </div>
    </div>
    
</div>


    )
}
    