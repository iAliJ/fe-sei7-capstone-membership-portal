import React from 'react'
import UserNav from './UserNav'
import Menu from '../home/Menu'
import Default from '../home/Default'

export default function Benefits() {
  return (
    <>
    <Menu/>
    <Default/>
    <UserNav/>
    
    <div className='container-fluid py-4'>
    <div class="row my-4">
        <div class="col-12">
          <div class="card">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Company Name</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Benefit</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Company Email</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">valid Till</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="/assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
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
                        <span class="text-dark text-xs">Not Used</span>
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
                    <td class="align-middle text-center">
                    <a class="btn btn-primary" href="/">Use</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="/assets/img/team-4.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
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
                        <span class="text-dark text-xs">Used</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">laurent@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">19/09/17</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">10392</span>
                    </td>
                    <td class="align-middle text-center">
                    <a class="btn btn-primary" href="/">Use</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="/assets/img/team-3.jpg" class="avatar avatar-sm me-3" alt="avatar image"/>
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
                        <span class="text-dark text-xs">Not Used</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-secondary mb-0 text-sm">michael@user.com</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">24/12/08</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-sm">34002</span>
                    </td>
                    <td class="align-middle text-center">
                    <a class="btn btn-primary" href="/">Use</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}
