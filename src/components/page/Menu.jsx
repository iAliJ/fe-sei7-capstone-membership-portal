import React from 'react'

export default function Menu(){
  return (
    
<>
<nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
    <div className="container">
      <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white" href="/">
        Membership Portal
      </a>
      <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon mt-2">
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul className="navbar-nav navbar-nav-hover mx-auto">
          <li className="nav-item dropdown dropdown-hover mx-2">
            <a role="button" href="/about" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center " id="dropdownMenuPages" aria-expanded="false">
              About
            </a>
          </li>
        </ul>
        <ul className="navbar-nav d-lg-block">
          <li className="nav-item">
            <a href="/login" className="btn btn-sm bg-white btn-round mb-0 me-1" onclick="smoothToPricing('pricing-soft-ui')">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    {/* <div className="row mt-4">
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <img className="w-100 opacity-9" src="/assets/img/logos/gray-logos/logo-coinbase.svg" alt="logo_coinbase" />
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <img className="w-100 opacity-9" src="/assets/img/logos/gray-logos/logo-nasa.svg" alt="logo_nasa" />
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <img className="w-100 opacity-9" src="/assets/img/logos/gray-logos/logo-netflix.svg" alt="logo_netflix" />
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <img className="w-100 opacity-9" src="/assets/img/logos/gray-logos/logo-pinterest.svg" alt="logo_pinterest" />
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <img className="w-100 opacity-9" src="/assets/img/logos/gray-logos/logo-spotify.svg" alt="logo_spotify" />
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <img className="w-100 opacity-9" src="/assets/img/logos/gray-logos/logo-vodafone.svg" alt="logo_vodafone" />
      </div>
    </div> */}
</>

  )
}
