import React from 'react'
import Axios from 'axios';
import {useState} from "react";

import MenuTrans from './MenuTrans';
// import Signin from './user/Signin';

import Footer from './Footer';

export default function Login(props) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
      const user = {...newUser};
      user[e.target.name] = e.target.value;
      //console.log(user);
      setNewUser(user);
  };

  const processLogin = async (e) => {

    // Create the submit method.
    // const (submit) = async (e) => {
         e.preventDefault();
        //  const user = {
        //        username: username,
        //        password: password
        //       };
              // console.log(newUser)
              // const formData = new FormData()
              // formData.append('username',username)
              // formData.append('password',password)
              try {
                // Axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
                // Axios.defaults.xsrfCookieName = "csrftoken";
                Axios.get(`/api/user/?email=${newUser.username}`)
                        .then(async res=>{
                          console.log(res);
                          const user = {...newUser};
                          user['username'] = res.data.username
                          const {data} = await Axios.post('/api/token/',
                          user,
                          {  headers: { "Content-Type": "multipart/form-data" },
                        }
                          // {
                          //         headers: {
                          //           // 'Authorization': `Token mytoken`,
                          //           // 'Content-Type': 'application/json',
                          //           'Access-Control-Allow-Origin': '*',
                          //           // Other possible headers,
                                    
                          //         }},
                          //         // {withCredentials: true}
                                  );
                                          
                  localStorage.clear();
                  localStorage.setItem('access_token', data.access);
                  localStorage.setItem('refresh_token', data.refresh);
                  Axios.defaults.headers.common['Authorization'] = 
                                                  `Bearer ${data['access']}`;
                  window.location.href = '/dashboard/home'
                          setNewUser(user)
                        })
                        .catch(err=>{
                          console.log(err);
                        });
                console.log("new",newUser);
               


              } catch (error) {
                console.log(error);
              }
         // Create the POST requuest
         
        // Initialize the access & refresh token in localstorage.      
        // localStorage.clear();
        // localStorage.setItem('access_token', data.access);
        // localStorage.setItem('refresh_token', data.refresh);
        // Axios.defaults.headers.common['Authorization'] = 
        //                                 `Bearer ${data['access']}`;
        // window.location.href = '/dashboard'
    }

        // Axios.post('http://localhost:8000/api/token/',user)
        // .then(res=>{
        //   console.log(res);
        //   localStorage.clear();
        //   localStorage.setItem('access_token', res.access);
        //   localStorage.setItem('refresh_token', res.refresh);
        //   Axios.defaults.headers.common['Authorization'] = `Bearer ${res['access']}`;
        // })
        // .catch(err=>{
        //   console.log(err);
        // })

  

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
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
              <div className="card card-plain">
                <div className="card-header pb-0 text-start">
                  <h4 className="font-weight-bolder">Sign In</h4>
                  <p className="mb-0">Enter your email and password to sign in</p>
                </div>
                <div className="card-body">
                  <form role="form" onSubmit={processLogin} >
                    <div className="mb-3">
                      <input type="text" className="form-control form-control-lg" id="username" name="username" placeholder="Email" aria-label="Username" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control form-control-lg" id="password" name="password" placeholder="Password" aria-label="Password" onChange={handleChange} />
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Don't have an account?
                    <a href="/signup" className="text-primary text-gradient font-weight-bold">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
              <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                <img src="/assets/img/shapes/pattern-lines.svg" alt="pattern-lines" className="position-absolute opacity-4 start-0" />
                <div className="position-relative">
                  <img className="max-width-500 w-100 position-relative z-index-2" src="/assets/img/illustrations/chat.png" alt="chat-img" />
                </div>
                <h4 className="mt-5 text-white font-weight-bolder">Dev. Legends</h4>
                <p className="text-white">Experience is the name everyone gives to their mistakes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>                
                {/* <Signin login={processLogin} username={username} password={password} setUsername={setUsername} setPassword={setPassword} submit={submit}  /> */}
            <Footer />
            </div>
        </div>
    </div>
    </>

  )
}
