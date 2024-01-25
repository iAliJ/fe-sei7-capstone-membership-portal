import React from 'react'
import {useState, useEffect} from "react";
import Axios from 'axios';

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// import UserNav from './UserNav'
// import Menu from '../home/Menu'
// import Default from '../home/Default'

export default function Benefits() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [message, setMessage] = useState([]);

  const [allBenefits, setAllBenefits] = useState([]);

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
          //console.log(Axios.defaults.headers);
          const {data} = await Axios.get('/api/benefit/list'); //, {headers: {"Authorization": "Bearer " + localStorage.getItem('access_token')}}
           setMessage(data);
           setAllBenefits(data);

          // console.log(data);
          //  alert("Benefit List")
        } catch (e) {
          console.log('Error Not Authorized: ' + e)
        }
       })()};
   }, []);

   const generateBenefitQR = (id) => {
    console.log("I am here");
    console.log(id)
    Axios.get("/api/benefit/qrcode?id="+id+"&member="+localStorage.getItem('user_id'))
    .then( ( res ) => {
        console.log("Loaded Benefit QR Code Info");
        console.log(res);
        //console.log(res.data);
        //redirect here
      
        window.open('http://localhost:8000/static/uploads/qr/'+res.data.benefit_id+"_"+res.data.member_id+".png", '_blank').focus(); 
        
    })
    .catch((error) => {
        console.log("Error loading Benefit QR Code Information: ");
        console.log(error);
    })
    }


  return (
    <>
    
<div className='container-fluid py-4'>


<div className="row my-4">

<div className="col">
  <div className="card">
    <div className="table-responsive">
      <table className="table align-items-center mb-0">
        <thead>
          <tr>
            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Organization</th>
            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Benefit</th>
            {/* <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th> */}
            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Created</th>
            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Expiry</th>
            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Used By (temp)</th>
            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
          </tr>
        </thead>
        <tbody>

        {allBenefits.map(benefit => ( benefit.status >= 0 ?
        <tr key={benefit.id} className={ benefit.organization != null ? (benefit.organization == localStorage.getItem('organization_id') ? "bg-gray-200" : "") : ""}>
          <td className="align-middle text-sm px-3"><p className="text-sm text-primary h5 mb-0">{benefit.organization_name}</p></td>
          <td className="align-middle text-sm"><p className="text-secondary mb-0 text-sm">{benefit.title}</p></td>
          {/* <td className="align-middle text-sm"><p className="text-secondary mb-0 text-sm">{benefit.description}</p></td> */}
          <td className="align-middle text-center text-sm"><span className="text-secondary text-sm">{benefit.created_date}</span></td>
          <td className="align-middle text-center text-sm"><span className="text-secondary text-sm">{benefit.expiry_date}</span></td>
          <td className="align-middle text-center text-sm bg-secondary">
              <span className="badge badge-dot me-4">
              {benefit.status == 1 ? <><i className="bg-success"></i> Active</> : <><i className="bg-danger"></i>Expired</> }
                <span className="text-dark text-xs"></span>
              </span>
          </td>
          <td className="align-middle text-center text-sm">
          {benefit.organization == localStorage.getItem('organization_id') ?
          <><a href="https://demo.mobelmedia.com/capture" className="btn btn-sm btn-primary" target="_blank">Redeem</a></> 
          // onClick={handleShow}
          :
          <><a href="#" className="btn btn-sm btn-success" onClick={() => generateBenefitQR(benefit.id)}>Use</a> </>
          // <><a href={"http://localhost:8000/api/benefit/qrcode?id="+benefit.id+"&member="+localStorage.getItem('user_id')} className="btn btn-sm btn-success" target="_blank">Use</a></>
          }

{/* <a className={benefit.organization == localStorage.getItem('organization_id') ? "btn btn-sm btn-primary" : "btn btn-sm btn-success"} onClick={handleShow} href={benefit.organization == localStorage.getItem('organization_id') ? "#" : "#"}>{benefit.organization == localStorage.getItem('organization_id') ? "Redeem" : "Use"}</a>   */}
            
            {/* <div  className="takePhoto">
              <form id="take" action="" method="POST"> 
                  <input type="file" id="userQR" name="userQR" accept="image/*" capture="camera"></input>
              </form>
            </div> */}

            <br />

          {benefit.organization === localStorage.getItem('organization_id') && benefit.used_by_user ? (
            <>
            <span className="text-danger">
            {benefit.used_by_user.map(userby => (
            <kbd className="bg-warning" key={userby}>{userby}</kbd> 
            ))}
            </span>
            </>
            ) : null}
            
          </td>
        </tr>
         : "" ) )}
          
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>

    {/* <div className="row my-4">
        <div className="col-12">
          <div className="card">
            <div className="table-responsive">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Company Name</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Benefit</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Company Email</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">valid Till</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">John Michael</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-sm text-secondary mb-0">Manager</p>
                    </td>
                    <td>
                      <span className="badge badge-dot me-4">
                        <i className="bg-info"></i>
                        <span className="text-dark text-xs">Not Used</span>
                      </span>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <p className="text-secondary mb-0 text-sm">john@user.com</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-sm">23/04/18</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-sm">43431</span>
                    </td>
                    <td className="align-middle text-center">
                    <a className="btn btn-primary" href="/">Use</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img src="/assets/img/team-4.jpg" className="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-sm text-secondary mb-0">Executive</p>
                    </td>
                    <td>
                      <span className="badge badge-dot me-4">
                        <i className="bg-dark"></i>
                        <span className="text-dark text-xs">Used</span>
                      </span>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <p className="text-secondary mb-0 text-sm">laurent@user.com</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-sm">19/09/17</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-sm">10392</span>
                    </td>
                    <td className="align-middle text-center">
                    <a className="btn btn-primary" href="/">Use</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img src="/assets/img/team-3.jpg" className="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Michael Levi</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-sm text-secondary mb-0">Backend developer</p>
                    </td>
                    <td>
                      <span className="badge badge-dot me-4">
                        <i className="bg-info"></i>
                        <span className="text-dark text-xs">Not Used</span>
                      </span>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <p className="text-secondary mb-0 text-sm">michael@user.com</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-sm">24/12/08</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-sm">34002</span>
                    </td>
                    <td className="align-middle text-center">
                    <a className="btn btn-primary" href="/">Use</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
     */}

</div>

{/* <Modal contentClassName="bd-example-modal-xl" show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Scan the QR Code</Modal.Title>
  </Modal.Header>
  <Modal.Body>

  <iframe src="https://demo.mobelmedia.com/capture/" title="iframe QR Scanner"></iframe>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal> */}

    </>
  )
}
