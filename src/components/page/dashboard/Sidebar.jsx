import React from 'react';

// import Scripts from '../Scripts';

import { library } from "@fortawesome/fontawesome-svg-core";
// import { faHouse, faPencil, faTrash, faUserPlus, faStar, faWarning } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function sidebar() {
  return (
    <>
<aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-white" id="sidenav-main">
  <div className="sidenav-header">
    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
    <a className="navbar-brand m-0" href="/dashboard">
      <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
      <span className="ms-1 font-weight-bold">Membership Portal</span>
    </a>
  </div>
  <hr className="horizontal dark mt-0" />
  <div className="collapse navbar-collapse  w-auto h-auto" id="sidenav-collapse-main">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a data-bs-toggle="collapse" href="#dashboardsExamples" className="nav-link active" aria-controls="dashboardsExamples" role="button" aria-expanded="false">
          <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2">
              <i className="bi bi-grid-1x2-fill text-lg"></i>
          </div>
          <span className="nav-link-text ms-1">Dashboards</span>
        </a>
        <div className="collapse " id="dashboardsExamples">
          <ul className="nav ms-4 ps-3">
            <li className="nav-item ">
              <a className="nav-link " href="#">
                <span className="sidenav-mini-icon"> D </span>
                <span className="sidenav-normal"> Default </span>
              </a>
            </li>
            
          </ul>
        </div>
      </li>
      <li className="nav-item mt-3">
        <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder opacity-6">PORTAL PAGES</h6>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/directory" target="_blank">
          <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center  me-2 d-flex align-items-center justify-content-center">
              <i className="bi bi-bookmark-star-fill text-dark text-lg"></i>
          </div>
          <span className="nav-link-text ms-1">Directory</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/benefits" target="_blank">
          <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center  me-2 d-flex align-items-center justify-content-center">
              <i className="bi bi-bag-heart-fill text-dark text-lg"></i>
          </div>
          <span className="nav-link-text ms-1">Benefits</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/events" target="_blank">
          <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center  me-2 d-flex align-items-center justify-content-center">
              <i className="bi bi-calendar-week-fill text-dark text-lg"></i>
          </div>
          <span className="nav-link-text ms-1">Events</span>
        </a>
      </li>

    </ul>
  </div>
  <div className="sidenav-footer mx-3 mt-3 pt-3">
    <div className="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
      <div className="full-background"></div>
      <div className="card-body text-start p-3 w-100">
        <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
          <i className="bi bi-github text-dark text-gradient text-lg top-0" aria-hidden="true" id="sidenavCardIcon"></i>
        </div>
        <div className="docs-info">
          <h6 className="text-white up mb-0">For Help & Support</h6>
          <p className="text-xs font-weight-bold">Please check the Repo Details</p>
          <a href="https://github.com/mmaskati/fe-sei7-capstone-membership-portal" target="_blank" className="btn btn-white btn-sm w-100 mb-0">GitHub</a>
        </div>
      </div>
    </div>

  </div>
</aside>  
    </>
  )
}
