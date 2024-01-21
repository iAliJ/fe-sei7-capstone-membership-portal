import React from 'react'

import Menu from './Menu';
import Signin from './user/Signin';

export default function Login() {
  return (
    <>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div className="col-12">
                <Menu />
                <Signin />
            </div>
        </div>
    </div>
    </>

  )
}
