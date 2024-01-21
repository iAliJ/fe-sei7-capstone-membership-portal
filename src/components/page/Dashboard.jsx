import React from 'react'
import Axios from 'axios';
import {useState, useEffect} from "react";

export default function Dashboard() {

    const [message, setMessage] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{
          console.log(localStorage.getItem('access_token'));
         (async () => {
           try {
            Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
            Axios.defaults.headers.common['Content-Type'] = 'application/json';
            console.log(Axios.defaults.headers);
            const {data} = await Axios.get('/api/benefit/list'); //, {headers: {"Authorization": "Bearer " + localStorage.getItem('access_token')}}
             setMessage(data);

             

             console.log(data);
            //  alert("Benefit List")
          } catch (e) {
            console.log('not auth')
          }
         })()};
     }, []);

    //  const allRecord = message.map((record, index) => (
    //   <p>{index}. {record}</p>
    //   ))

  return (
    <>
    <div>Dashboard</div>
    {/* <p>{allRecord}</p> */}
    {JSON.stringify(message)}
    </>
  )
}
