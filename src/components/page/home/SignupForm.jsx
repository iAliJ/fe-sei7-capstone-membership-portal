import React from 'react'
import {useState} from "react";

import Footer from './Footer'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SignupForm(props) {

  const [formInput, setFormInput] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [formError, setFormError] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirm: '',
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
    if( (formInput.passwordConfirm === formInput.password) && formInput.email ){
      props.addUser(formInput);
    }
  };

  // const [formData, setFormData] = useState({
  //   // username: '',
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   password: '',
  //   passwordConfirm: ''
  // });
  // const [passwordConfirm, setPasswordConfirm] = useState('');

  // const [passwordMatch, setPasswordMatch] = useState(true);

//   const handleChange = (e)=>{
//     // const user = {...newUser}
//     // user[e.target.name] = e.target.value;
//     // console.log(user);
//     // setNewUser(user);
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // if (name == 'password') {
//     //   setPasswordConfirm(value);
//     // }
//     // console.log(passwordConfirm);
//     console.log(formData.password);
//     console.log(formData.passwordConfirm);
//     if (formData.password !== formData.passwordConfirm) {
//       setPasswordMatch(false);
//       return;
//     }
//     setPasswordMatch(true);
//   }
//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     // props.addUser(newUser);
//     // Check if passwords match
//     // console.log(passwordConfirm);
//     // console.log(passwordConfirm.passwordConfirm);
//     // if (formData.password !== formData.passwordConfirm) {
//     //   setPasswordMatch(false);
//     //   return;
//     // }
//     // setPasswordMatch(true);
//     props.addUser(formData);
//  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <form className='needs-validation' noValidate role="form" autoComplete="off" onSubmit={validateFormInput}>
                    {/* <label htmlFor="validationCustom01">Username</label>
                    <div className="mb-3">
                      <input id="validationCustom01" onChange={handleChange} type="text" className="form-control" name="username" placeholder="First Name" aria-label="First Name" required/>
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div> */}
                    <label htmlFor="validationCustom02">First Name</label>
                    <div className="mb-3">
                      <input id='validationCustom02' value={formInput.first_name} 
                      onChange={({ target }) => {
                        handleUserInput(target.name, target.value);
                      }} 
                      type="text" className="form-control" name="first_name" placeholder="First Name" aria-label="First Name" required/>
                      <p className="error-message">{formError.first_name}</p>
                      <div className="invalid-feedback">                        
                        Please write your first name.
                      </div>
                    </div>
                    <label htmlFor="validationCustom03">Last Name</label>
                    <div className="mb-3">
                      <input id='validationCustom03' value={formInput.last_name} 
                      onChange={({ target }) => {
                        handleUserInput(target.name, target.value);
                      }} 
                      type="text" className="form-control" name="last_name" placeholder="Last Name" aria-label="Last Name" required/>
                      <p className="error-message">{formError.last_name}</p>
                      <div className="invalid-feedback">                        
                        Please write your last name.
                      </div>
                    </div>
                    <label htmlFor="validationCustom04">Email Address</label>
                    <div className="mb-3">
                      <input id='validationCustom04' value={formInput.email} 
                      onChange={({ target }) => {
                        handleUserInput(target.name, target.value);
                      }} 
                      type="email" className="form-control" name="email" placeholder="Email" aria-label="Email" required/>
                      <p className="error-message">{formError.email}</p>
                      <div className="invalid-feedback">
                        Please enter a valid email address.
                      </div>
                    </div>
                    <label htmlFor="validationCustom05">Password</label>
                    <div className="mb-3">
                      <input id='validationCustom05' value={formInput.password} 
                      onChange={({ target }) => {
                        handleUserInput(target.name, target.value);
                      }} 
                      type="password" className="form-control" name="password" placeholder="Password" aria-label="Password" minlength="8" pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})" required/>
                      <p className="error-message">{formError.password}</p>
                      <div className="invalid-feedback">
                        Password must be at least 8 characters long & contains uppercase, lowercase, number & special character
                      </div>
                    </div>
                    <label htmlFor="validationCustom06">Confirm Password</label>
                    <div className="mb-3">
                      <input id='validationCustom06' value={formInput.passwordConfirm} 
                      onChange={({ target }) => {
                        handleUserInput(target.name, target.value);
                      }} 
                      type="password" className="form-control" name="passwordConfirm" placeholder="Confirm Password" aria-label="Confirm Password" required/>
                      <p className="error-message">{formError.passwordConfirm}</p>
                      <div className="invalid-feedback">
                        Passwords does not match.
                      </div>
                    </div>
                    <div className="form-check form-check-info text-left">
                      <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" required />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree to the <a className="text-dark font-weight-bolder" onClick={handleShow}>Terms and Conditions</a>
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
<Footer />

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>

  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</div>
<script>
  {(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      let isValid = true;

      // Check each input field for emptiness
      form.querySelectorAll('input').forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
        }
      });

      if (!form.checkValidity() || !isValid) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
}
</script>
    </>
  )
}
