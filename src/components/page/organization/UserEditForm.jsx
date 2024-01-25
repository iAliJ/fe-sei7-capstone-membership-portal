import React from 'react'
import {useState} from "react";
import Axios from 'axios';

export default function UserEditForm(props) {
    const preparedFormData = new FormData();

  const [formInput, setFormInput] = useState({
    first_name: '',
    last_name: '',
    email: '',
    // dob: '2000-01-01',
    // martial:'Single',
    // phoneNumber:'00000000'
  });

  const [formError, setFormError] = useState({
    first_name: '',
    last_name: '',
    email: '',
    // dob: '2000-01-01',
    // martial:'Single',
    // phoneNumber:'00000000'
    });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });   
  };

console.log(`Handle Input: ${formInput}`);
console.log(formInput);

  const validateFormInput = async (event) => {
    event.preventDefault();
    let inputError = {
    first_name: '',
    last_name: '',
    email: '',
    // dob: '2000-01-01',
    // martial:'Single',
    // phoneNumber:'00000000'
    };
    
    if (!formInput.first_name) {
      setFormError({
        ...inputError,
        name: "Enter valid first_name",
      });
      return
    }

    if (!formInput.last_name) {
      setFormError({
        ...inputError,
        cr_number: "Enter valid last_name",
      });
      return
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        phone_number: "Enter valid email",
      });
      return
    }

    // if (!formInput.dob) {
    //   setFormError({
    //     ...inputError,
    //     email_address: "Enter valid dob",
    //   });
    //   return
    // }

    // if (!formInput.martial) {
    //   setFormError({
    //     ...inputError,
    //     sector: "Enter valid martial",
    //   });
    //   return
    // }

    // if (!formInput.phoneNumber) {
    //       setFormError({
    //         ...inputError,
    //         address_one: "Enter valid phoneNumber   ",
    //       });
    //       return
    //     }
    
        setFormError(inputError);
        console.log(`FORM INPUT!! ${formInput}`);

        Object.keys(formInput).forEach (key =>{
          // preparedFormData.append(key, combinedData[key]);
          if(Array.isArray(formInput[key])){
            // for(let i=0; i < formInput[key].length;i++){
            //   preparedFormData.append(key, formInput[key][i]);
            // }
            preparedFormData.append('first_name', formInput.first_name);
            preparedFormData.append('last_name', formInput.last_name);
            preparedFormData.append('email', formInput.email);
          }else{
            preparedFormData.append(key, formInput[key]);
          }
        })
        
        // preparedFormData.append('user_id',localStorage.getItem('user_id'))


        Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
        // Axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        console.log(Axios.defaults.headers.common)
        console.log("id",localStorage.getItem('user_id'));
        const result = await Axios.post(`api/user/update?id=${localStorage.getItem('user_id')}`, preparedFormData);
        console.log(result.data)
        if(result){
          window.location.href = '/dashboard/home'
        }
    // props.setUser(formInput)
  };

  return (
    <>
    <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
            <div className="col-12">
    <main className="main-content mt-0">
    <section>
        <div className="page-header min-vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="card card-plain">
                            <div className="card-header pb-0 text-start mt-6">
                                <h4 className="font-weight-bolder">User Profile</h4>
                                <p className="mb-0">You can update your personal information here.</p>
                            </div>
                            <div className="card-body pb-3">
                                <form className='needs-validation' noValidate role="form" autoComplete="off" onSubmit={validateFormInput} action='' method='POST' >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="validationCustom01">First Name</label>
                                            <div className="mb-3">
                                                <input id="validationCustom01" type="text"
                                                value={formInput.first_name} 
                                                onChange={({ target }) => {
                                                  handleUserInput(target.name, target.value);
                                                }} 
                                                className="form-control" name="first_name" placeholder={localStorage.getItem('first_name')} aria-label="First Name" required />
                                            </div>
                                            <label htmlFor="validationCustom02">Last Name</label>
                                            <div className="mb-3">
                                            <input id='validationCustom02' type="text" 
                                            value={formInput.last_name} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="last_name" placeholder={localStorage.getItem('last_name')} aria-label="Last Name" required/>
                                            </div>
                                            <label htmlFor="validationCustom03">Email</label>
                                            <div className="mb-3">
                                            <input id='validationCustom03' type="email" 
                                            value={formInput.email} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="email" placeholder={localStorage.getItem('email')} aria-label="Email" required/>
                                            </div>
                                            {/* <input type='hidden' value={localStorage.getItem('user_id')}/> */}
                                            {/* <label htmlFor="validationCustom06">Phone Number</label>
                                            <div className="mb-3">
                                            <input id='validationCustom06' type="tel" 
                                            value={formInput.phoneNumber} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="phoneNumber" placeholder="Phone Number" aria-label="Phone Number" required/>
                                            </div>
                                            <label htmlFor="validationCustom04">Date of Birth</label>
                                            <div className="mb-3">
                                            <input id='validationCustom04' type="date" 
                                            value={formInput.dob} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="dob" placeholder="Date of Birth" aria-label="Date of Birth" required/>
                                            </div>
                                            <label htmlFor="validationCustom04">Marital Status</label>
                                            <div className="mb-3">
                                            <input id='validationCustom04' type="text" 
                                            value={formInput.martial} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="martial" placeholder="Marital Status" aria-label="Marital Status" required/>
                                            </div> */}
                                            </div>
                                            <div className="col-md-6 text-center">
                                            <img className='profile-pic' src='/assets/img/profile.png'/>
                                            {/* change this! */}
                                            <h5 className='mt-2'>{localStorage.getItem('first_name')} {localStorage.getItem('last_name')}</h5>
                                        </div>
                                        </div>
                                    <div className="col-md-3 text-center">
                                        <input type="submit" className="btn bg-gradient-primary w-100 mt-4 mb-0" value="Update Profile" />
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

            </div>
        </div>
    </div>
    <script>
  {
  (() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
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
