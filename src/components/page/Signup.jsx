import React from 'react'

import MenuTrans from './MenuTrans';
import SignupForm from './user/SignupForm';

export default function Signup() {
  return (
    <>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div className="col-12">
                <MenuTrans />
                <SignupForm />
            </div>
        </div>
    </div>
    </>

  )
}
