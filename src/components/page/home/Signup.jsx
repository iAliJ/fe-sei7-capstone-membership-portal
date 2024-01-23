import React, { useState } from 'react'
// import { useState } from 'react';
import Axios from 'axios';


// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

import MenuTrans from './MenuTrans';
import SignupForm from './SignupForm';

export default function Signup() {

  const [emailExist,setEmailExist] = useState(false)
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const addUser = (user) => {
    // API path from the BE
    // user.passwordConfirm = ""
  
    // user.passwordConfirm = ""
    // console.log(user);
    setEmailExist(false)
    Axios.post("api/user/create/", user)
    .then(res => {
    if (res.data.response){
      setEmailExist(true)
    }
    else{
      console.log("User Signed Up Successfully");
      console.log(res);
      window.location.href = '/login'
    }
    })
    .catch(err => {
    console.log("Error Signing Up User");
    console.log(err);
    })
  }

  return (
    <>
    <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
            <div className="col-12">
                <MenuTrans />
                <SignupForm addUser={addUser} emailExist={emailExist} />


      {/* <Button variant="primary" onClick={handleShow}>
        Terms & Conditions
      </Button> */}

      {/* <Modal show={show} onHide={handleClose}>
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
      </Modal> */}



            </div>
        </div>
    </div>
    </>

  )
}
