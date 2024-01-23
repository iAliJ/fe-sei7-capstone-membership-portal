import React from 'react'
import MenuTrans from './home/MenuTrans'
import {useState} from "react";

import Footer from './home/Footer'

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

export default function OrgForm() {

  const [formInput, setFormInput] = useState({
    name: '',
    cr_number: '',
    phone_number: '',
    email_address: '',
    sector: '',
    address_one: '',
    address_two: '',
    city: '',
    country: '',
    logo: '',
    zip_code: '',
    website: '',
    content_info: '',
    interest1: '',
    interest2: '',
    interest3: '',
    interest4: '',
    interest5: '',
    interest6: '',
    interest7: '',
    interest8: '',
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
    // console.log(formInput.password);
    // console.log(formInput.passwordConfirm);
    // console.log(inputError);

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
      });
      return
    }
    // console.log(`EMAIL: ${formInput.email}`);

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return
    }
    // console.log(`INPUT ERROR: ${inputError}`);
    // console.log(`CONFIRM: ${formInput.passwordConfirm}`);
    // console.log(`PASS: ${formInput.password}`);
    if (formInput.passwordConfirm !== formInput.password) {
      setFormError({
        ...inputError,
        passwordConfirm: "Password and confirm password should be the same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return
    }

    setFormError(inputError);
    // console.log(formInput);
    props.addUser(formInput);
  };
  
  

  return (
    <>
    <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
            <div className="col-12">
                <MenuTrans />
            
    <main className="main-content mt-0">
    <section>
        <div className="page-header min-vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="card card-plain">
                            <div className="card-header pb-0 text-start mt-6">
                                <h4 className="font-weight-bolder">Organization Application Form</h4>
                                <p className="mb-0">Enter your organization details below</p>
                            </div>
                            <div className="card-body pb-3">
                                <form className='needs-validation' noValidate role="form" autoComplete="off" onSubmit={validateFormInput}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="validationCustom01">Organization Name</label>
                                            <div className="mb-3">
                                                <input id="validationCustom01" type="text"
                                                value={formInput.name} 
                                                onChange={({ target }) => {
                                                  handleUserInput(target.name, target.value);
                                                }} 
                                                className="form-control" name="name" placeholder="Organization Name" aria-label="Organization Name" required />
                                            </div>
                                            <label htmlFor="validationCustom02">CR Number</label>
                                            <div className="mb-3">
                                            <input id='validationCustom02' type="text" 
                                            value={formInput.cr_number} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="cr_number" placeholder="CR Number" aria-label="CR Number" required/>
                                            </div>
                                            <label htmlFor="validationCustom03">Phone Number</label>
                                            <div className="mb-3">
                                            <input id='validationCustom03' type="tel" 
                                            value={formInput.phone_number} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="phone_number" placeholder="Phone Number" aria-label="Phone Number" required/>
                                            </div>
                                            <label htmlFor="validationCustom04">Email Address</label>
                                            <div className="mb-3">
                                            <input id='validationCustom04' type="email" 
                                            value={formInput.email_address} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="email_address" placeholder="Email Address" aria-label="Email Address" required/>
                                            </div>
                                            <label htmlFor="validationCustom04">Sector</label>
                                            <div className="mb-3">
                                            <input id='validationCustom04' type="text" 
                                            value={formInput.sector} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="sector" placeholder="Sector" aria-label="Sector" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Address Line 1</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="text" 
                                            value={formInput.address_one} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="address_one" placeholder="Address Line 1" aria-label="Address Line 1" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Address Line 2</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="text" 
                                            value={formInput.address_two} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="address_two" placeholder="Address Line 2" aria-label="Address Line 2"/>
                                            </div>
                                            <label htmlFor="validationCustom05">City</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="text" 
                                            value={formInput.city} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="city" placeholder="City" aria-label="City" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Country</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="text" 
                                            value={formInput.country} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="country" placeholder="Country" aria-label="Country" required/>
                                            </div>
                                            </div>
                                        <div className="col-md-6">
                                            <label htmlFor="validationCustom05">Organization Logo</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="file" accept="image/png, image/jpeg" 
                                            value={formInput.logo} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="logo" placeholder="logo" aria-label="logo" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Zip Code</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="number" 
                                            value={formInput.zip_code} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="zip_code" placeholder="Zip Code" aria-label="Zip Code" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Website (Optional)</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="url" 
                                            value={formInput.website} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="website" placeholder="https://example.com" aria-label="Website"/>
                                            </div>
                                            <label htmlFor="validationCustom05">Organization Content Information</label>
                                            <div className="mb-3">
                                                <textarea id='validationCustom05' type="text" 
                                                value={formInput.content_info} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                                className="form-control" name="content_info" placeholder="Products & Services offered" aria-label="Content Information" required></textarea>
                                            </div>
                                            <label htmlFor="validationCustom05">Interest Groups</label>
                                            <div className="mb-3">
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest1" name="interest1" value="1"/>
                                                <label htmlFor="interest1"> Organization & Effectiveness</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest2" name="interest2" value="2"/>
                                                <label htmlFor="interest2"> Projects & Construction</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest3" name="interest3" value="3"/>
                                                <label htmlFor="interest3"> Banking & Finance</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest4" name="interest4" value="4"/>
                                                <label htmlFor="interest4"> Hospitality, Leisure & Tourism</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest5" name="interest5" value="5"/>
                                                <label htmlFor="interest5"> ICT</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest6" name="interest6" value="6"/>
                                                <label htmlFor="interest6"> Legal</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest7" name="interest7" value="7"/>
                                                <label htmlFor="interest7"> Women in Business</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest8" name="interest8" value="8"/>
                                                <label htmlFor="interest8"> Young Professionals</label>
                                                </div>
                                            {/* <input id='validationCustom05' type="text" className="form-control" name="interests" placeholder="Interest Groups" aria-label="Interest Groups" required/> */}
                                            </div>
                                        </div>
                                        </div>
                                    {/* <div className="form-check form-check-info text-left">
                                        <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" required />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I agree to the <a className="text-dark font-weight-bolder" data-bs-toggle="modal" data-bs-target="#exampleModal">Terms and Conditions</a>
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div> */}
                                    <div className="col-md-3 text-center">
                                        <input type="submit" className="btn bg-gradient-primary w-100 mt-4 mb-0" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

            
    {/* <main className="main-content mt-0">
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-9 d-flex flex-column mx-lg-0 mx-auto">
              <div className="card card-plain">
                <div className="card-header pb-0 text-start mt-6">
                  <h4 className="font-weight-bolder">Organization From</h4>
                  <p className="mb-0">Enter your organization details bellow</p>
                </div>
                <div className="card-body pb-3">
                  <form className='needs-validation' noValidate role="form" autoComplete="off">
                    <label htmlFor="validationCustom01">Organization Name</label>
                    <div className="mb-3">
                      <input id="validationCustom01" type="text" className="form-control" name="name" placeholder="Organization Name" aria-label="Organization Name" required/>
                    </div>
                    <label htmlFor="validationCustom02">CR Number</label>
                    <div className="mb-3">
                      <input id='validationCustom02' type="text" className="form-control" name="cr_number" placeholder="CR Number" aria-label="CR Number" required/>
                    </div>
                    <label htmlFor="validationCustom03">Phone Number</label>
                    <div className="mb-3">
                      <input id='validationCustom03' type="tel" className="form-control" name="phone_number" placeholder="Phone Number" aria-label="Phone Number" required/>
                    </div>
                    <label htmlFor="validationCustom04">Email Address</label>
                    <div className="mb-3">
                      <input id='validationCustom04' type="email" className="form-control" name="email_address" placeholder="Email" aria-label="Email" required/>
                    </div>
                    <label htmlFor="validationCustom05">Organization Logo</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="file" className="form-control" name="logo" placeholder="logo" aria-label="logo" required/>
                    </div>
                    <label htmlFor="validationCustom04">Sector</label>
                    <div className="mb-3">
                      <input id='validationCustom04' type="text" className="form-control" name="sector" placeholder="Sector" aria-label="Sector" required/>
                    </div>
                    <label htmlFor="validationCustom05">Address Line 1</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="text" className="form-control" name="address_one" placeholder="Address Line 1" aria-label="Address Line 1" required/>
                    </div>
                    <label htmlFor="validationCustom05">Address Line 2</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="text" className="form-control" name="address_two" placeholder="Address Line 2" aria-label="Address Line 2" required/>
                    </div>
                    <label htmlFor="validationCustom05">City</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="text" className="form-control" name="city" placeholder="City" aria-label="City" required/>
                    </div>
                    <label htmlFor="validationCustom05">Country</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="text" className="form-control" name="country" placeholder="Country" aria-label="Country" required/>
                    </div>
                    <label htmlFor="validationCustom05">Zip Code</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="number" className="form-control" name="zip_code" placeholder="Zip Code" aria-label="Zip Code" required/>
                    </div>
                    <label htmlFor="validationCustom05">Website</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="url" className="form-control" name="website" placeholder="Website" aria-label="Website" required/>
                    </div>
                    <label htmlFor="validationCustom05">Content Information</label>
                    <div className="mb-3">
                        <textarea id='validationCustom05' type="text" className="form-control" name="content_info" placeholder="Content Information" aria-label="Content Information" required></textarea>
                    </div>
                    <label htmlFor="validationCustom05">Interest Groups</label>
                    <div className="mb-3">

                      <input id='validationCustom05' type="text" className="form-control" name="interests" placeholder="Interest Groups" aria-label="Interest Groups" required/>
                    </div>
                    <div className="form-check form-check-info text-left">
                      <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" required />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree to the <a className="text-dark font-weight-bolder" data-bs-toggle="modal" data-bs-target="#exampleModal">Terms and Conditions</a>
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                    <div className="text-center">
                      <input type="submit" className="btn bg-gradient-primary w-100 mt-4 mb-0" value="Sign up"/>
                    </div>
                  
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main> */}

  {/* <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn bg-gradient-success" data-bs-dismiss="modal">Accept</button>
      </div>
    </div>
  </div>
</div> */}

<Footer />

            </div>
        </div>
    </div>
    </>
  )
}
