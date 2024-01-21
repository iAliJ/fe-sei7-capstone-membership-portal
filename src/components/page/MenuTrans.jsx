import React from 'react'

export default function MenuTrans() {
  return (
    <>
<nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
    <div className="container">
      <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3" href="/">
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
            <a href="/login" className="btn btn-sm  bg-gradient-primary btn-round mb-0 me-1">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}
