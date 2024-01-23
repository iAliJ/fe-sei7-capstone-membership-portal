import React from 'react'
import {useState, useEffect} from "react";
import Axios from 'axios';

// import UserNav from './UserNav'
// import Menu from '../home/Menu'
// import Default from '../home/Default'

export default function Benefits() {

  const [message, setMessage] = useState([]);

  const [allBenefits, setAllBenefits] = useState([]);

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
          //console.log(Axios.defaults.headers);
          const {data} = await Axios.get('/api/benefit/list'); //, {headers: {"Authorization": "Bearer " + localStorage.getItem('access_token')}}
           setMessage(data);
           setAllBenefits(data);

          // console.log(data);
          //  alert("Benefit List")
        } catch (e) {
          console.log('Error Not Authorized: ' + e)
        }
       })()};
   }, []);

  return (
    <>
    
<div className='container-fluid py-4'>


<div class="row my-4">

<div class="col">
  <div class="card">
    <div class="table-responsive">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Organization</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Benefit</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Created</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Expiry</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Used By (temp)</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
          </tr>
        </thead>
        <tbody>

        {allBenefits.map(benefit => ( benefit.status >= 0 ?
        <tr key={benefit.id}>
          <td class="align-middle text-sm px-3"><p class="text-sm text-primary h5 mb-0">{benefit.organization_name}</p></td>
          <td class="align-middle text-sm"><p class="text-secondary mb-0 text-sm">{benefit.title}</p></td>
          <td class="align-middle text-sm"><p class="text-secondary mb-0 text-sm">{benefit.description}</p></td>
          <td class="align-middle text-center text-sm"><span class="text-secondary text-sm">{benefit.created_date}</span></td>
          <td class="align-middle text-center text-sm"><span class="text-secondary text-sm">{benefit.expiry_date}</span></td>
          <td class="align-middle text-center text-sm bg-secondary">
              <span class="badge badge-dot me-4">
              {benefit.status == 1 ? <><i class="bg-success"></i> Active</> : <><i class="bg-danger"></i>Inactive</> }
                <span class="text-dark text-xs"></span>
              </span>
          </td>
          <td class="align-middle text-center text-sm"><a class="btn btn-sm btn-success" href="#">Use</a> <br /><span class="text-danger">{benefit.used_by_user}</span></td>
        </tr>
         : "" ) )}
          
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>

    {/* <div class="row my-4">
        <div class="col-12">
          <div class="card">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Company Name</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Benefit</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Company Email</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">valid Till</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="/assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">John Michael</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-secondary mb-0">Manager</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">Not Used</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">john@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">23/04/18</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">43431</span>
                    </td>
                    <td class="align-middle text-center">
                    <a class="btn btn-primary" href="/">Use</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="/assets/img/team-4.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-secondary mb-0">Executive</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-dark"></i>
                        <span class="text-dark text-xs">Used</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">laurent@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">19/09/17</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">10392</span>
                    </td>
                    <td class="align-middle text-center">
                    <a class="btn btn-primary" href="/">Use</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="/assets/img/team-3.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Michael Levi</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-secondary mb-0">Backend developer</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">Not Used</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">michael@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">24/12/08</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">34002</span>
                    </td>
                    <td class="align-middle text-center">
                    <a class="btn btn-primary" href="/">Use</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
     */}

</div>
    </>
  )
}
