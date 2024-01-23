import React from 'react'
import {useState, useEffect} from "react";
import Axios from 'axios';
// import UserNav from './UserNav'
// import Menu from '../home/Menu'
// import Default from '../home/Default'
// import Benefits from './Benefits'

export default function DashboardTwo() {

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

  // const [allBenefits, setAllBenefits] = useState([]);

  // useEffect(() => {
  //   if (props.benefits && props.benefits.length > 0) {
  //     const benefitsList = props.benefits.map((benefit, index) => (
  //       <p key={index}>{index}. {benefit}</p>
  //     ));
  //     setAllBenefits(benefitsList);
  //   }
  // }, [props.benefits]);

  console.log(allBenefits);

  return (

    

    // <>
    // <Menu/>
    // <Default/>
    // <UserNav/>
<>
<div className='container-fluid py-4'>
   

<div class="container-fluid py-2">
      <section class="py-3">
        <div class="row">
          <div class="col-md-8 me-auto text-left">
            <h5>Welcome [ First Name ] [ Last Name ],</h5>
            <p className="text-primary">Last login: January 23, 2024</p>
          </div>
        </div>
        <div class="row mt-lg-4 mt-2">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="d-flex">
                  <div class="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                    <img src="/assets/img/small-logos/root-directory.png" alt="directory"/>
                  </div>
                  <div class="ms-3 my-auto">
                    <h6>Directory</h6>
                    <div class="avatar-group">

                      <a href="#" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Audrey Love">
                        <img alt="Image placeholder" src="http://localhost:8000/static/uploads/falcon.jpg" class="rounded-circle"/>
                      </a>
                      <a href="#" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Audrey Love">
                        <img alt="Image placeholder" src="http://localhost:8000/static/uploads/parrot.jpg" class="rounded-circle"/>
                      </a>
                      <a href="#" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Audrey Love">
                        <img alt="Image placeholder" src="http://localhost:8000/static/uploads/cat1.jpg" class="rounded-circle"/>
                      </a>

                    </div>
                  </div>
                  {/* <div class="ms-auto">
                    <div class="dropdown">
                      <button class="btn btn-link text-secondary ps-0 pe-2" id="navbarDropdownMenuLink2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v text-lg"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3" aria-labelledby="navbarDropdownMenuLink2">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div> */}
                </div>
                <p class="text-sm mt-3">Find organizations and members contact details. Start connecting and networking with our community. </p>
                <hr class="horizontal dark"/>
                <div class="row">
                  <div class="col-6">
                    <h6 class="text-sm mb-0">5</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Members</p>
                  </div>
                  <div class="col-6 text-end">
                    <h6 class="text-sm mb-0">25/01/2024</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Last Updated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="d-flex">
                  <div class="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                    <img src="/assets/img/small-logos/responsibility.png" alt="benefits"/>
                  </div>
                  <div class="ms-3 my-auto">
                    <h6>Benefits</h6>
                    <div class="avatar-group">
                      {/* <a href="#" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Jessica Rowland">
                        <img alt="Image placeholder" src="/assets/img/team-3.jpg" class=""/>
                      </a>
                      <a href="#" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Audrey Love">
                        <img alt="Image placeholder" src="/assets/img/team-4.jpg" class="rounded-circle"/>
                      </a>
                      <a href="#" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Michael Lewis">
                        <img alt="Image placeholder" src="/assets/img/team-2.jpg" class="rounded-circle"/>
                      </a>
                      <a href="#" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Jessica Rowland">
                        <img alt="Image placeholder" src="/assets/img/team-3.jpg" class=""/>
                      </a>
                      <a href="#" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Audrey Love">
                        <img alt="Image placeholder" src="/assets/img/team-4.jpg" class="rounded-circle"/>
                      </a> */}
                    </div>
                  </div>
                  {/* <div class="ms-auto">
                    <div class="dropdown">
                      <button class="btn btn-link text-secondary ps-0 pe-2" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v text-lg"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div> */}
                </div>
                <p class="text-sm mt-3"> Enjoy membership benefits from discounts and perks provided by other member Organizations. </p>
                <hr class="horizontal dark"/>
                <div class="row">
                  <div class="col-6">
                    <h6 class="text-sm mb-0">2</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Benefits</p>
                  </div>
                  <div class="col-6 text-end">
                    <h6 class="text-sm mb-0">23/01/2024</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Last Update</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="d-flex">
                  <div class="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                    <img src="/assets/img/small-logos/conference.png" alt="events"/>
                  </div>
                  <div class="ms-3 my-auto">
                    <h6>Events</h6>
                    <div class="avatar-group">
                      
                    </div>
                  </div>
                  <div class="ms-auto">
                    
                  </div>
                </div>
                <p class="text-sm mt-3"> Business Networking. Join Conferneces, Events, Lunch Meetings and discussion talks. </p>
                <hr class="horizontal dark"/>
                <div class="row">
                  <div class="col-6">
                    <h6 class="text-sm mb-0">1</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Upcoming</p>
                  </div>
                  <div class="col-6 text-end">
                    <h6 class="text-sm mb-0">25/01/2024</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Next Event</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="d-flex">
                  <div class="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                    <img src="/assets/img/small-logos/office.png" alt="newsletter"/>
                  </div>
                  <div class="ms-3 my-auto">
                    <h6>Newsletter</h6>
                    <div class="avatar-group">
                      
                    </div>
                  </div>
                  <div class="ms-auto">
                    
                  </div>
                </div>
                <h5 class="text-sm mt-3 text-primary"> Coming Soon! </h5>
                <p class="text-sm mt-3">Stay tuned for our next feature</p>
                <hr class="horizontal dark"/>
                <div class="row">
                  <div class="col-6">
                    <h6 class="text-sm mb-0">0</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Archived</p>
                  </div>
                  <div class="col-6 text-end">
                    <h6 class="text-sm mb-0">01/03/2024</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Next Edition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>


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
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                  </tr>
                </thead>
                <tbody>

                {allBenefits.map(benefit => (
                <tr key={benefit.id}>
                  <td class="align-middle text-center text-sm"><p class="text-sm text-secondary mb-0">{benefit.organization_name}</p></td>
                  <td class="align-middle text-sm"><p class="text-secondary mb-0 text-sm">{benefit.title}</p></td>
                  <td class="align-middle text-sm"><p class="text-secondary mb-0 text-sm">{benefit.description}</p></td>
                  <td class="align-middle text-center text-sm"><span class="text-secondary text-sm">{benefit.created_date}</span></td>
                  <td class="align-middle text-center text-sm"><span class="text-secondary text-sm">{benefit.expiry_date}</span></td>
                  <td class="align-middle text-center text-sm">
                      <span class="badge badge-dot me-4">
                      {benefit.status == 1 ? <i class="bg-success"></i> : <i class="bg-danger"></i>}
                        <span class="text-dark text-xs">Status: {benefit.status} & {benefit.used_by_user}</span>
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

<div class="row my-4">
    <div class="col col-md-6 col-xl-4 mt-md-0 mt-4">
          <div class="card">
            <div class="card-header pb-0 p-3">
              <div class="row">
                <div class="col-md-8 d-flex align-items-center">
                  <h6 class="mb-0">Company Information</h6>
                </div>
                <div class="col-md-4 text-end">
                  <a href="#">
                    <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body p-3">
              <p class="text-sm">
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
              </p>
              <hr class="horizontal gray-light my-4"/>
              <ul class="list-group">
                <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Location:</strong> &nbsp; USA</li>
                <li class="list-group-item border-0 ps-0 pb-0">
                  <strong class="text-dark text-sm">Social:</strong> &nbsp;
                  <a class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="#">
                    <i class="fab fa-facebook fa-lg"></i>
                  </a>
                  <a class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="#">
                    <i class="fab fa-twitter fa-lg"></i>
                  </a>
                  <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="#">
                    <i class="fab fa-instagram fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    
    
    </div>
    </>

  )
}
