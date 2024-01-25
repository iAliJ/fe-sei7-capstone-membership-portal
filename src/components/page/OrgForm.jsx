import React from 'react'
import MenuTrans from './home/MenuTrans'
import {useState ,useEffect} from "react";
import Axios from 'axios';

import Footer from './home/Footer'

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

export default function OrgForm(props) {

  const preparedFormData = new FormData();
  let file = '';

  const [countryList,setCountryList] = useState();
  
  const [planList,setPlanList] = useState();

  useEffect(() => {
    
    Axios.get('http://localhost:8000/api/country/list')
    .then(res=>{
      console.log(res.data);
      setCountryList(res.data)
    })
    .catch(err=>{
      console.log("error fetching country list");
    })
  
    Axios.get('http://localhost:8000/api/plan/list')
    .then(res=>{
      console.log(res.data);
      setPlanList(res.data)
    })
    .catch(err=>{
      console.log("error fetching plan list");
    })

    
  }, [])

  

  const [formInput, setFormInput] = useState({
    name: '',
    cr_number: '',
    phone_number: '',
    email_address: '',
    sector: '',
    address_one: '',
    address_two: '',
    city: '',
    country_id: '837',
    logo: '',
    zip_code: '',
    website: '',
    content_info: '',
    interests: [],
    plan_id: ''
    // interest1: '',
    // interest2: '',
    // interest3: '',
    // interest4: '',
    // interest5: '',
    // interest6: '',
    // interest7: '',
    // interest8: '',
  });

  const [formError, setFormError] = useState({
    name: '',
    cr_number: '',
    phone_number: '',
    email_address: '',
    sector: '',
    address_one: '',
    address_two: '',
    city: '',
    country_id: '',
    logo: '',
    zip_code: '',
    website: '',
    content_info: '',
    // interest: ''
    });

  const [selectedInterest, setSelectedInterest] = useState([]);
  const [membership, setMembership] = useState(1);

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
    console.log(`Handle Input: ${formInput}`);
  };

  const checkboxHandler = (value) => {
    if (selectedInterest.includes(value)) {
      // If the value is already in the array, remove it
      setSelectedInterest(selectedInterest.filter((interest) => interest !== value));
    } else {
      // If the value is not in the array, add it
      setSelectedInterest([...selectedInterest, value]);
    }
    console.log(`checkbox Handler: ${selectedInterest}`);
  };

  const combinedData = {
    ...formInput,
    interests: [...formInput.interests, ...selectedInterest],
    plan_id: parseInt(membership)
  };
  
  const handleFileChange = (e) => {
    e.preventDefault();
    if(e.target.files) {
        file = e.target.files[0];
        console.log('==============FILE CHANGES============')
        console.log(file)
    }
  }

  const handlePlan = e => {
    setMembership(e.target.value)
  }

  const validateFormInput = async (event) => {
    event.preventDefault();
    let inputError = {
      name: '',
      cr_number: '',
      phone_number: '',
      email_address: '',
      sector: '',
      address_one: '',
      address_two: '',
      city: '',
      country_id: '',
      logo: '',
      zip_code: '',
      website: '',
      content_info: '',
      // interest: ''
    };
    
    if (!formInput.name) {
      setFormError({
        ...inputError,
        name: "Enter valid name",
      });
      return
    }

    if (!formInput.cr_number) {
      setFormError({
        ...inputError,
        cr_number: "Enter valid cr_number",
      });
      return
    }

    if (!formInput.phone_number) {
      setFormError({
        ...inputError,
        phone_number: "Enter valid phone_number",
      });
      return
    }

    if (!formInput.email_address) {
      setFormError({
        ...inputError,
        email_address: "Enter valid email address",
      });
      return
    }

    if (!formInput.sector) {
      setFormError({
        ...inputError,
        sector: "Enter valid sector",
      });
      return
    }

    if (!formInput.address_one) {
          setFormError({
            ...inputError,
            address_one: "Enter valid address_one",
          });
          return
        }
    
        if (!formInput.city) {
          setFormError({
            ...inputError,
            city: "Enter valid city",
          });
          return
        }

        if (!formInput.country_id) {
          setFormError({
            ...inputError,
            country_id: "Enter valid country_id",
          });
          return
        }

        if (!formInput.zip_code) {
          setFormError({
            ...inputError,
            zip_code: "Enter valid zip_code",
          });
          return
        }

        if (!formInput.content_info) {
          setFormError({
            ...inputError,
            content_info: "Enter valid content_info",
          });
          return
        }

        setFormError(inputError);
        console.log(`FORM INPUT!! ${formInput}`);
        console.log(`INTEREST!!! ${selectedInterest}`);


        Object.keys(combinedData).forEach (key =>{
          // preparedFormData.append(key, combinedData[key]);
          if(Array.isArray(combinedData[key])){
            for(let i=0; i < combinedData[key].length;i++){
              preparedFormData.append(key, combinedData[key][i]);
            }
          }else{
            preparedFormData.append(key, combinedData[key]);
          }
        })

        preparedFormData.append('user_id',localStorage.getItem('user_id'))
        // preparedFormData.append('plan', combinedData.plan)
        
        // props.addOrg(preparedFormData);
        // props.addOrg(selectedInterest);
        Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
        Axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        console.log(Axios.defaults.headers.common)
        const result = await Axios.post('http://127.0.0.1:8000/api/organization/create', preparedFormData);
        console.log(result.data)
        if(result){
           window.location.href = '/dashboard/pending'
        }
  };
  // console.log(membership);
  console.log(combinedData);
  // console.log(selectedInterest);
  // console.log(preparedFormData);

  return (
    <>
    <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
            <div className="col-12">
                {/* <MenuTrans /> */}
            
    <main className="main-content mt-0">
    <section>
        <div className="page-header min-vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="card card-plain">
                            <div className="card-header pb-0 text-start mt-6">
                                <h4 className="font-weight-bolder">Organization Application Form</h4>
                                <p className="mb-0">Enter your organization details below</p>
                            </div>
                            <div className="card-body pb-3">
                                <form className='needs-validation' noValidate role="form" autoComplete="off" onSubmit={validateFormInput} encType='multipart/form-data' action='' method='POST'>
                                    <div className="row">
                                    <label htmlFor="plan">Membership Plans</label>
                                          <div className="mb-3">
                                          { planList && 
                                          <>
                                          <div className="mb-3">
                                          {planList.map((plan)=>(
                                            <div className="form-check">
                                              <input className="form-check-input" value={plan.id} type="radio" name="plan_id" id="flexRadioDefault1"  
                                              onChange={handlePlan} />
                                              <label className="form-check-label" htmlFor="flexRadioDefault1">{plan.name}</label>
                                            </div>
                                          ))} </div>
                                          </>
                                          }
                                            {/* <div className="form-check">
                                              <input className="form-check-input" value="2" type="radio" name="plan" id="flexRadioDefault2"
                                              onChange={handlePlan}/>
                                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Corporate Membership
                                              </label>
                                            </div> */}

                                          </div>
                                        <div className="col-md-6">
                                            <label htmlFor="validationCustom01">Organization Name</label>
                                            <div className="mb-3">
                                                <input id="validationCustom01" type="text"
                                                value={formInput.name} 
                                                onChange={({ target }) => {
                                                  handleUserInput(target.name, target.value);
                                                }} 
                                                className="form-control" name="name" placeholder="Organization Name" aria-label="Organization Name" required />
                                            </div>
                                            <label htmlFor="validationCustom02">CR Number</label>
                                            <div className="mb-3">
                                            <input id='validationCustom02' type="text" 
                                            value={formInput.cr_number} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="cr_number" placeholder="CR Number" aria-label="CR Number" required/>
                                            </div>
                                            <label htmlFor="validationCustom03">Phone Number</label>
                                            <div className="mb-3">
                                            <input id='validationCustom03' type="tel" 
                                            value={formInput.phone_number} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="phone_number" placeholder="Phone Number" aria-label="Phone Number" required/>
                                            </div>
                                            <label htmlFor="validationCustom04">Email Address</label>
                                            <div className="mb-3">
                                            <input id='validationCustom04' type="email" 
                                            value={formInput.email_address} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="email_address" placeholder="Email Address" aria-label="Email Address" required/>
                                            </div>
                                            <label htmlFor="validationCustom04">Sector</label>
                                            <div className="mb-3">
                                            <input id='validationCustom04' type="text" 
                                            value={formInput.sector} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="sector" placeholder="Sector" aria-label="Sector" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Address Line 1</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="text" 
                                            value={formInput.address_one} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="address_one" placeholder="Address Line 1" aria-label="Address Line 1" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Address Line 2 (Optional)</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="text" 
                                            value={formInput.address_two} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="address_two" placeholder="Address Line 2" aria-label="Address Line 2"/>
                                            </div>
                                            <label htmlFor="validationCustom05">City</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="text" 
                                            value={formInput.city} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="city" placeholder="City" aria-label="City" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Country</label>
                                            {/* <div className="mb-3">
                                            <input id='validationCustom05' type="text" 
                                            value={formInput.country_id} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="country_id" placeholder="Country" aria-label="Country" required/>
                                            </div> */}
                                            <div className='mb-3'>{ countryList &&
                                            <select value={formInput.country_id} 
                                             onChange={({ target }) => {
                                            handleUserInput(target.name, target.value);
                                            }}
                                            className="form-control" name="country_id" placeholder="Country" aria-label="Country" required
                                            >
                                              {countryList.map((country)=>(
                                                
                                                <option key={country.id} value={country.id} className="form-control">
                                                  {country.name}
                                                </option>
                                              ))}
                                            </select>}
                                            </div>
                                            </div>
                                        <div className="col-md-6">
                                            <label htmlFor="validationCustom05">Organization Logo</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="file" accept=".png,.jpg,.jpeg" onChange={handleFileChange} className="form-control" name="logo" aria-label="logo" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Zip Code</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="number" 
                                            value={formInput.zip_code} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="zip_code" placeholder="Zip Code" aria-label="Zip Code" required/>
                                            </div>
                                            <label htmlFor="validationCustom05">Website (Optional)</label>
                                            <div className="mb-3">
                                            <input id='validationCustom05' type="url" 
                                            value={formInput.website} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                            className="form-control" name="website" placeholder="https://example.com" aria-label="Website"/>
                                            </div>
                                            <label htmlFor="validationCustom05">Organization Content Information</label>
                                            <div className="mb-3">
                                                <textarea id='validationCustom05'
                                                value={formInput.content_info} 
                                            onChange={({ target }) => {
                                              handleUserInput(target.name, target.value);
                                            }} 
                                                className="form-control" name="content_info" placeholder="Products & Services offered" aria-label="Content Information" required></textarea>
                                            </div>
                                            <label htmlFor="validationCustom05">Interest Groups</label>
                                            <div className="mb-3">
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest1" name="interest[]" value="1"
                                                onChange={({ target }) => {
                                                  checkboxHandler(target.value);
                                                }}
                                                />
                                                <label htmlFor="interest1"> Organization & Effectiveness</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest2" name="interest[]" value="2"
                                                onChange={({ target }) => {
                                                  checkboxHandler(target.value);
                                                }}
                                                />
                                                <label htmlFor="interest2"> Projects & Construction</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest3" name="interest[]" value="3"
                                                onChange={({ target }) => {
                                                  checkboxHandler(target.value);
                                                }}
                                                />
                                                <label htmlFor="interest3"> Banking & Finance</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest4" name="interest[]" value="4"
                                                onChange={({ target }) => {
                                                  checkboxHandler(target.value);
                                                }}
                                                />
                                                <label htmlFor="interest4"> Hospitality, Leisure & Tourism</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest5" name="interest[]" value="5"
                                                onChange={({ target }) => {
                                                  checkboxHandler(target.value);
                                                }}
                                                />
                                                <label htmlFor="interest5"> ICT</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest6" name="interest[]" value="6"
                                                onChange={({ target }) => {
                                                  checkboxHandler(target.value);
                                                }}
                                                />
                                                <label htmlFor="interest6"> Legal</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest7" name="interest[]" value="7"
                                                onChange={({ target }) => {
                                                  checkboxHandler(target.value);
                                                }}
                                                />
                                                <label htmlFor="interest7"> Women in Business</label>
                                                </div>
                                                <div className="form-check form-check-info text-left">
                                                <input className="form-check-input" type="checkbox" id="interest8" name="interest[]" value="8"
                                                onChange={({ target }) => {
                                                  checkboxHandler(target.value);
                                                }}
                                                />
                                                <label htmlFor="interest8"> Young Professionals</label>
                                                </div>
                                            {/* <input id='validationCustom05' type="text" className="form-control" name="interests" placeholder="Interest Groups" aria-label="Interest Groups" required/> */}
                                            </div>
                                        </div>
                                        </div>
                                    {/* <div className="form-check form-check-info text-left">
                                        <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" required />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I agree to the <a className="text-dark font-weight-bolder" data-bs-toggle="modal" data-bs-target="#exampleModal">Terms and Conditions</a>
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div> */}
                                    <div className="col-md-3 text-center">
                                        <input type="submit" className="btn bg-gradient-primary w-100 mt-4 mb-0" value="Submit" />
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

            
    {/* <main className="main-content mt-0">
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-9 d-flex flex-column mx-lg-0 mx-auto">
              <div className="card card-plain">
                <div className="card-header pb-0 text-start mt-6">
                  <h4 className="font-weight-bolder">Organization From</h4>
                  <p className="mb-0">Enter your organization details bellow</p>
                </div>
                <div className="card-body pb-3">
                  <form className='needs-validation' noValidate role="form" autoComplete="off">
                    <label htmlFor="validationCustom01">Organization Name</label>
                    <div className="mb-3">
                      <input id="validationCustom01" type="text" className="form-control" name="name" placeholder="Organization Name" aria-label="Organization Name" required/>
                    </div>
                    <label htmlFor="validationCustom02">CR Number</label>
                    <div className="mb-3">
                      <input id='validationCustom02' type="text" className="form-control" name="cr_number" placeholder="CR Number" aria-label="CR Number" required/>
                    </div>
                    <label htmlFor="validationCustom03">Phone Number</label>
                    <div className="mb-3">
                      <input id='validationCustom03' type="tel" className="form-control" name="phone_number" placeholder="Phone Number" aria-label="Phone Number" required/>
                    </div>
                    <label htmlFor="validationCustom04">Email Address</label>
                    <div className="mb-3">
                      <input id='validationCustom04' type="email" className="form-control" name="email_address" placeholder="Email" aria-label="Email" required/>
                    </div>
                    <label htmlFor="validationCustom05">Organization Logo</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="file" className="form-control" name="logo" placeholder="logo" aria-label="logo" required/>
                    </div>
                    <label htmlFor="validationCustom04">Sector</label>
                    <div className="mb-3">
                      <input id='validationCustom04' type="text" className="form-control" name="sector" placeholder="Sector" aria-label="Sector" required/>
                    </div>
                    <label htmlFor="validationCustom05">Address Line 1</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="text" className="form-control" name="address_one" placeholder="Address Line 1" aria-label="Address Line 1" required/>
                    </div>
                    <label htmlFor="validationCustom05">Address Line 2</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="text" className="form-control" name="address_two" placeholder="Address Line 2" aria-label="Address Line 2" required/>
                    </div>
                    <label htmlFor="validationCustom05">City</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="text" className="form-control" name="city" placeholder="City" aria-label="City" required/>
                    </div>
                    <label htmlFor="validationCustom05">Country</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="text" className="form-control" name="country" placeholder="Country" aria-label="Country" required/>
                    </div>
                    <label htmlFor="validationCustom05">Zip Code</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="number" className="form-control" name="zip_code" placeholder="Zip Code" aria-label="Zip Code" required/>
                    </div>
                    <label htmlFor="validationCustom05">Website</label>
                    <div className="mb-3">
                      <input id='validationCustom05' type="url" className="form-control" name="website" placeholder="Website" aria-label="Website" required/>
                    </div>
                    <label htmlFor="validationCustom05">Content Information</label>
                    <div className="mb-3">
                        <textarea id='validationCustom05' type="text" className="form-control" name="content_info" placeholder="Content Information" aria-label="Content Information" required></textarea>
                    </div>
                    <label htmlFor="validationCustom05">Interest Groups</label>
                    <div className="mb-3">

                      <input id='validationCustom05' type="text" className="form-control" name="interests" placeholder="Interest Groups" aria-label="Interest Groups" required/>
                    </div>
                    <div className="form-check form-check-info text-left">
                      <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" required />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree to the <a className="text-dark font-weight-bolder" data-bs-toggle="modal" data-bs-target="#exampleModal">Terms and Conditions</a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main> */}

  {/* <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</div> */}

{/* <Footer /> */}

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
