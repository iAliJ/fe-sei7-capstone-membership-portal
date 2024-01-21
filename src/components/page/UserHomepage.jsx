import React from 'react'
import UserNav from './UserNav'
import Menu from './Menu'
import Default from './Default'
import Benefits from './Benefits'

export default function DashboardTwo() {
  return (
    <>
    <Menu/>
    <Default/>
    <UserNav/>
    <>
    <div className='container-fluid py-4'>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card overflow-scroll">
            <div class="card-body d-flex">
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg border-1 rounded-circle bg-gradient-primary">
                  <i class="fas fa-plus text-white"></i>
                </a>
                <p class="mb-0 text-sm mt-2">Invite members</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-primary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/team-1.jpg"/>
                </a>
                <p class="mb-0 text-sm">Abbie W</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-primary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/team-2.jpg"/>
                </a>
                <p class="mb-0 text-sm">Boris U</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-primary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/team-3.jpg"/>
                </a>
                <p class="mb-0 text-sm">Kay R</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-primary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/team-4.jpg"/>
                </a>
                <p class="mb-0 text-sm">Tom M</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-primary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/team-5.jpg"/>
                </a>
                <p class="mb-0 text-sm">Nicole N</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-primary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/marie.jpg"/>
                </a>
                <p class="mb-0 text-sm">Marie P</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-primary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/bruce-mars.jpg"/>
                </a>
                <p class="mb-0 text-sm">Bruce M</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-secondary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/ivana-squares.jpg"/>
                </a>
                <p class="mb-0 text-sm">Sandra A</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-secondary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/kal-visuals-square.jpg"/>
                </a>
                <p class="mb-0 text-sm">Katty L</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-secondary">
                  <img alt="Image placeholder" class="p-1" src="/assets/img/ivana-square.jpg"/>
                </a>
                <p class="mb-0 text-sm">Emma O</p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-3 col-4 text-center">
                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-secondary">
                  <img alt="Image placeholder" class="p-1" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-9.jpg"/>
                </a>
                <p class="mb-0 text-sm">Tao G</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <div class="row my-4">
        <div class="col">
          <div class="card">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Review</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">John Michael</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-secondary mb-0">Manager</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">positive</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">john@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">23/04/18</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">43431</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../../../assets/img/team-3.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Alexa Liras</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-secondary mb-0">Programator</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">positive</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">alexa@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">93021</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../../../assets/img/team-4.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-secondary mb-0">Executive</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-dark"></i>
                        <span class="text-dark text-xs">neutral</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">laurent@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">10392</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../../../assets/img/team-3.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Michael Levi</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-secondary mb-0">Backend developer</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">positive</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">michael@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">24/12/08</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">34002</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Richard Gran</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-secondary mb-0">Manager</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-danger"></i>
                        <span class="text-dark text-xs">negative</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">richard@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">04/10/21</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">91879</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../../../assets/img/team-4.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Miriam Eric</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm text-secondary mb-0">Programtor</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">positive</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">miriam@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">23042</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    <div class="col col-md-6 col-xl-4 mt-md-0 mt-4">
          <div class="card">
            <div class="card-header pb-0 p-3">
              <div class="row">
                <div class="col-md-8 d-flex align-items-center">
                  <h6 class="mb-0">Company Information</h6>
                </div>
                <div class="col-md-4 text-end">
                  <a href="javascript:;">
                    <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body p-3">
              <p class="text-sm">
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
              </p>
              <hr class="horizontal gray-light my-4"/>
              <ul class="list-group">
                <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Location:</strong> &nbsp; USA</li>
                <li class="list-group-item border-0 ps-0 pb-0">
                  <strong class="text-dark text-sm">Social:</strong> &nbsp;
                  <a class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                    <i class="fab fa-facebook fa-lg"></i>
                  </a>
                  <a class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                    <i class="fab fa-twitter fa-lg"></i>
                  </a>
                  <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                    <i class="fab fa-instagram fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    
    
    <div class="container-fluid py-4">
      <section class="py-3">
        <div class="row">
          <div class="col-md-8 me-auto text-left">
            <h5>Some of Our Awesome Perks</h5>
            <p>This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</p>
          </div>
        </div>
        <div class="row mt-lg-4 mt-2">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="d-flex">
                  <div class="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                    <img src="/assets/img/small-logos/logo-slack.svg" alt="slack_logo"/>
                  </div>
                  <div class="ms-3 my-auto">
                    <h6>Benefits</h6>
                    <div class="avatar-group">
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Jessica Rowland">
                        <img alt="Image placeholder" src="/assets/img/team-3.jpg" class=""/>
                      </a>
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Audrey Love">
                        <img alt="Image placeholder" src="/assets/img/team-4.jpg" class="rounded-circle"/>
                      </a>
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Michael Lewis">
                        <img alt="Image placeholder" src="/assets/img/team-2.jpg" class="rounded-circle"/>
                      </a>
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Jessica Rowland">
                        <img alt="Image placeholder" src="/assets/img/team-3.jpg" class=""/>
                      </a>
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Audrey Love">
                        <img alt="Image placeholder" src="/assets/img/team-4.jpg" class="rounded-circle"/>
                      </a>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <div class="dropdown">
                      <button class="btn btn-link text-secondary ps-0 pe-2" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v text-lg"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="javascript:;">Action</a>
                        <a class="dropdown-item" href="javascript:;">Another action</a>
                        <a class="dropdown-item" href="javascript:;">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-sm mt-3"> If everything I did failed - which it doesn&#39;t, I think that it actually succeeds. </p>
                <hr class="horizontal dark"/>
                <div class="row">
                  <div class="col-6">
                    <h6 class="text-sm mb-0">5</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Participants</p>
                  </div>
                  <div class="col-6 text-end">
                    <h6 class="text-sm mb-0">02.03.22</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Due date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="d-flex">
                  <div class="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                    <img src="/assets/img/small-logos/logo-spotify.svg" alt="spotify_logo"/>
                  </div>
                  <div class="ms-3 my-auto">
                    <h6>Events</h6>
                    <div class="avatar-group">
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Audrey Love">
                        <img alt="Image placeholder" src="/assets/img/team-4.jpg" class="rounded-circle"/>
                      </a>
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Jessica Rowland">
                        <img alt="Image placeholder" src="/assets/img/team-3.jpg" class=""/>
                      </a>
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Michael Lewis">
                        <img alt="Image placeholder" src="/assets/img/team-2.jpg" class="rounded-circle"/>
                      </a>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <div class="dropdown">
                      <button class="btn btn-link text-secondary ps-0 pe-2" id="navbarDropdownMenuLink1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v text-lg"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3" aria-labelledby="navbarDropdownMenuLink1">
                        <a class="dropdown-item" href="javascript:;">Action</a>
                        <a class="dropdown-item" href="javascript:;">Another action</a>
                        <a class="dropdown-item" href="javascript:;">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-sm mt-3"> Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you. </p>
                <hr class="horizontal dark"/>
                <div class="row">
                  <div class="col-6">
                    <h6 class="text-sm mb-0">3</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Participants</p>
                  </div>
                  <div class="col-6 text-end">
                    <h6 class="text-sm mb-0">22.11.21</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Due date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="d-flex">
                  <div class="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                    <img src="/assets/img/small-logos/logo-xd.svg" alt="xd_logo"/>
                  </div>
                  <div class="ms-3 my-auto">
                    <h6>Newsletter</h6>
                    <div class="avatar-group">
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Audrey Love">
                        <img alt="Image placeholder" src="/assets/img/team-4.jpg" class="rounded-circle"/>
                      </a>
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Michael Lewis">
                        <img alt="Image placeholder" src="/assets/img/team-2.jpg" class="rounded-circle"/>
                      </a>
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Jessica Rowland">
                        <img alt="Image placeholder" src="/assets/img/team-3.jpg" class=""/>
                      </a>
                      <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-original-title="Jessica Rowland">
                        <img alt="Image placeholder" src="/assets/img/team-4.jpg" class=""/>
                      </a>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <div class="dropdown">
                      <button class="btn btn-link text-secondary ps-0 pe-2" id="navbarDropdownMenuLink2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v text-lg"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3" aria-labelledby="navbarDropdownMenuLink2">
                        <a class="dropdown-item" href="javascript:;">Action</a>
                        <a class="dropdown-item" href="javascript:;">Another action</a>
                        <a class="dropdown-item" href="javascript:;">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-sm mt-3"> Constantly growing. We’re constantly making mistakes from which we learn and improve. </p>
                <hr class="horizontal dark"/>
                <div class="row">
                  <div class="col-6">
                    <h6 class="text-sm mb-0">4</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Participants</p>
                  </div>
                  <div class="col-6 text-end">
                    <h6 class="text-sm mb-0">06.03.20</h6>
                    <p class="text-secondary text-sm font-weight-bold mb-0">Due date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    </div>
    </>
    </>
  )
}
