import React from 'react'

// import Scripts from './Scripts';

export default function Footer() {
  return (
    <>
<footer className="footer py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mb-4 mx-auto text-center">
        <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
          Company
        </a>
        <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
          About Us
        </a>
        <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
          Team
        </a>
        <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
          Membership
        </a>
      </div>
      <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
        <a href="#" target="_blank" className="text-secondary me-xl-4 me-4">
          <span className="text-lg fab fa-github"></span>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-8 mx-auto text-center mt-1">
        <p className="mb-0 text-secondary">
          Copyright &copy; <script>
            document.write(new Date().getFullYear())
          </script> Dev legends SEI7
        </p>
      </div>
    </div>
  </div>
</footer>
{/* <Scripts /> */}
    </>
  )
}
