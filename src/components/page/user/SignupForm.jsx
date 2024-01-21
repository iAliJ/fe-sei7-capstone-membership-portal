import React from 'react'

export default function SignupForm() {
  return (
    <>
<main className="main-content mt-0">
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
              <div className="card card-plain">
                <div className="card-header pb-0 text-start mt-6">
                  <h4 className="font-weight-bolder">Sign Up</h4>
                  <p className="mb-0">Enter your email and password to register</p>
                </div>
                <div className="card-body pb-3">
                  <form role="form" autoComplete="off">
                    <label>First Name</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" name="first_name" placeholder="First Name" aria-label="First Name" required/>
                    </div>
                    <label>Last Name</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" name="last_name" placeholder="Last Name" aria-label="Last Name" required/>
                    </div>
                    <label>Email</label>
                    <div className="mb-3">
                      <input type="email" className="form-control" name="email" placeholder="Email" aria-label="Email" required/>
                    </div>
                    <label>Password</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" name="password" placeholder="Password" aria-label="Password" required/>
                    </div>
                    <label>Confirm Password</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" name="passwordConfirm" placeholder="Password Confirm" aria-label="Password" required/>
                    </div>
                    <div className="form-check form-check-info text-left">
                      <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" required />
                      <label className="form-check-label" for="flexCheckDefault">
                        I agree to the <a className="text-dark font-weight-bolder" data-bs-toggle="modal" data-bs-target="#exampleModal">Terms and Conditions</a>
                      </label>
                    </div>
                    <div className="text-center">
                      <button type="button" className="btn bg-gradient-primary w-100 mt-4 mb-0">Sign up</button>
                    </div>
                  
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-sm-4 px-1">
                  <p className="mb-4 mx-auto">
                    Already have an account?
                    <a href="/login" className="text-primary text-gradient font-weight-bold">Sign in</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
              <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                <img src="/assets/img/shapes/pattern-lines.svg" alt="pattern-lines" className="position-absolute opacity-4 start-0"/>
                <div className="position-relative">
                  <img className="max-width-500 w-100 position-relative z-index-2" src="/assets/img/illustrations/rocket-white.png" alt="rocket"/>
                </div>
                <h4 className="mt-5 text-white font-weight-bolder">Your journey starts here</h4>
                <p className="text-white">Anyone can write code that a computer can understand. Good developers write code that humans can understand.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Terms & Conditions</h5>
        <button type="button" className="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
        Everything you accept is your responsibility
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn bg-gradient-secondary">Close</button>
        <button type="button" className="btn bg-gradient-success" data-bs-dismiss="modal">Accept</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
