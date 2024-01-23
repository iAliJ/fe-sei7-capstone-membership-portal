import React from 'react'
import Axios from 'axios';

import MenuTrans from './MenuTrans';
import SignupForm from './user/SignupForm';

export default function Signup() {

  const addUser = (user) => {
    // API path from the BE
    Axios.post("user/add", user)
    .then(res => {
    console.log("User Signed Up Successfully");
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
                <SignupForm addUser={addUser} />
            </div>
        </div>
    </div>
    </>

  )
}
