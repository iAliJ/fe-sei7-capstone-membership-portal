import React from 'react'
import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

export default function MemberDetail() {

    const [memberDetail, setMemberDetail] = useState();

    const location = useLocation();
    const { email } = location.state;
    // const [profile,setProfile] = useState()

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{

            (async () => {
                try {
                 Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
                 Axios.defaults.headers.common['Content-Type'] = 'application/json';
     
                 const {data} = await Axios.get('/api/user?email='+email); 
                 setMemberDetail(data);
       
               } catch (e) {
                 console.log('Error Not Authorized: ' + e)
               }
              })()};
          }, []);

  return (
    <div>Email: {memberDetail ? <span>{memberDetail.profile['email']}</span>:""} or { email }</div>
  )
}
