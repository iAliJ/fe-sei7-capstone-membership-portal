import React from 'react'
import {useState, useEffect} from "react";
import Axios from 'axios';

export default function EventsTable() {

    const [message, setMessage] = useState([]);

    const [allEvents, setAllEvents] = useState([]);
  
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

            const {data} = await Axios.get('/api/event/list'); 
             setMessage(data);
             setAllEvents(data);
  
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
    <h5>List of Events</h5>
    
    </div>
</div>

<div class="row">
<div class="col">
  <div class="card">
    <div class="table-responsive">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Location</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Sponsor</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Start</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">End</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Attendees</th>
          </tr>
        </thead>
        <tbody>

        {allEvents.map(event => ( 
        <tr key={event.id}>
          <td class="align-middle text-sm"><p class="text-sm text-secondary mb-0">{event.title}</p></td>
          <td class="align-middle text-sm"><p class="text-secondary mb-0">{event.location}</p></td>
          <td class="align-middle text-sm"><p class="text-secondary mb-0">{event.sponsor}</p></td>
          <td class="align-middle text-center text-sm"><span class="text-secondary text-sm">{event.start_date}</span></td>
          <td class="align-middle text-sm"><span class="text-secondary text-sm">{event.end_date}</span></td>
          <td class="align-middle text-center text-sm">
              <span class="badge badge-dot me-4">
              {event.attendees > 0 ? <><span class="text-dark text-xs">{event.attendees} Attendees<i class="bg-success"></i></span></>  : <><span class="text-dark text-xs">Non Registered <i class="bg-danger"></i></span></> }
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
