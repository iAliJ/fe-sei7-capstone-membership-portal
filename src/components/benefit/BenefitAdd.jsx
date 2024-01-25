import React from 'react'
import { useState } from 'react';
import Axios from 'axios';

export default function BenefitAdd(props) {

  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  const [newRecord , setnewRecord] = useState({});

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };


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

  // console.log(newRecord);

  record['expiry_date']=selectedDate;
  record['organization_id']=localStorage.getItem('organization_id');
  record['status']=1;


  console.log(record);

Axios.post('/api/benefit/create', record)
.then(res =>{
    console.log(res.data);
    window.location.href = '/dashboard/benefits'
})
.catch(e => {
  console.log(e);
})

}

    return (

<div className="container-fluid py-4">
  <div className="row">
    <div className="col-lg-9 col-12 mx-auto">
      <div className="card card-body mt-4">
        <form onSubmit={onhandleSubmit} autoComplete="off">
        <h6 className="mb-0">Add New Benefit</h6>
        <p className="text-sm mb-0">Offer Special discount offers and benefits for other members community</p>
        <hr className="horizontal dark my-3" />
        <label htmlFor="projectName" className="form-label">Benefit Title / Name</label>
        <input type="text" className="form-control" id="title" name="title" onChange={handleChange} />
        
        <label className="mt-4">Benefit Description</label>
        <p className="form-text text-muted text-xs ms-1">
          This is how others will learn about your Benefit, so make it good!
        </p>

        <div className="form-floating">
          <input className="form-control" id="description" name="description" onChange={handleChange} />
        </div>
          
          

        <div className="row">
          <div className="col">
            <label className="form-label">Expiry Date</label>
            <input className="form-control datetimepicker flatpickr-input" name="expiry_date" id="expiry_date" type="date" value={selectedDate} onChange={handleDateChange} />
          </div>
        </div>
          
        <div className="d-flex justify-content-end mt-4">
          
        <input type="hidden" name="organization_id" value={localStorage.getItem('organization_id')} /> 

          <button type="submit" name="button" className="btn bg-gradient-primary m-0 ms-2">Create New Benefit</button>
          
        </div>
        </form>
      </div>
    </div>
  </div>
  
</div>


    )
}
