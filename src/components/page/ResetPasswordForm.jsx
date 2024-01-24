import React, { useState } from 'react';
import Axios from 'axios';

export default function ResetPasswordForm() {
    const [email, setEmail] = useState('');

    const initiatePasswordReset = async () => {
      try {
        const csrftoken = getCookie('csrftoken');  // Implement getCookie function
         const headers = {
      'X-CSRFToken': csrftoken,
    };
        const response = await Axios.post('api/user/password_reset/', {
          email: email,
        }, { headers });
        console.log(response.data);  // Handle the response as needed
      } catch (error) {
        console.error('Error initiating password reset:', error);
      }
    };
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
  
    return (
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={initiatePasswordReset}>Reset Password</button>
      </div>
    );
}
