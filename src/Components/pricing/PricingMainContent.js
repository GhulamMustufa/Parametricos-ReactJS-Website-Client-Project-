import React from 'react'
import "./wireframe.css";

import Asset_6 from './assets/images/job icons/Asset 6.png'
import Asset_10 from './assets/images/job icons/Asset 10.png'
import Asset_11 from './assets/images/job icons/Asset 11.png'
function PricingMainContent() {
  return (
    <div>
      <div className="py-5 bg-primary" style={{}}>
          <div className="container">
            <div className="row">
              <div className="text-center mx-auto col-md-12">
                <h1>
                  <b>A PLAN ​THAT FITS YOU!&nbsp;</b><br />SIGN UP NOW WITH OUR
                  ​EARLY BIRD PRICING
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" />
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 p-1">
                <div className="card bg-light text-center">
                  <div className="card-body p-4 bg-primary shadow" style={{}}>
                    <img className="img-fluid d-block bg-primary" src={Asset_6} alt="asset6" />
                    <h3><b>Classic</b></h3>
                    <h4>per user/per month</h4>
                    <h2>Free</h2>
                    <a className="btn btn-lg btn-block btn-light" href="#">Get started</a>
                   
                    <ul className="list-unstyled my-3">
                      <li className="mb-1 py-2">View Project</li>
                      <li className="mb-1 py-2">Invited by Architect</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 p-1">
                <div className="card bg-light text-center">
                  <div className="card-body p-4 bg-primary shadow" style={{}}>
                    <img className="img-fluid d-block bg-primary" src={Asset_6} alt="asset6" />
                    <h3><b>Medio</b></h3>
                    <h4>per user/per month</h4>
                    <h2><strike>€50</strike>&nbsp;<b>€30</b></h2>
                    <button className="btn btn-lg btn-block btn-light" id="medio-get-started" role="link">
                      Get started
                    </button>
                   
                    <ul className="list-unstyled my-3">
                      <li className="mb-1 py-2">BIM IFC Model Upload</li>
                      <li className="mb-1 py-2">5 View Invites / Project</li>
                      <li className="mb-1 py-2">5 Project Locations</li>
                      <li className="mb-1 py-2">
                        1 Library / Project
                      </li>
                      <li className="mb-1 py-2">10 Versions / Library</li>
                      <li className="mb-1 py-2">
                        10GB Storage
                      </li>
                      <li className="mb-1 py-2">Supported 3D Digital Maps</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 p-1">
                <div className="card bg-light text-center">
                  <div className="card-body p-4 bg-primary shadow">
                    <img className="d-block img-fluid bg-primary" src={Asset_10} />
                    <h3><b>Advanced</b></h3>
                    <h4>per user/per month</h4>
                    <h2><strike>€90</strike> <b>€50</b></h2>
                    <a className="btn btn-lg btn-block btn-warning" href="#" id="advanced-get-started">Get started</a>
                    
                    <ul className="list-unstyled my-3">
                      <li className="mb-1 py-2">BIM IFC Model Upload</li>
                      <li className="mb-1 py-2">10 View Invites / Project</li>
                      <li className="mb-1 py-2">10 Project Locations</li>
                      <li className="mb-1 py-2" >
                        2 Library / Project
                      </li>
                      <li className="mb-1 py-2">10 Versions / Library</li>
                      <li className="mb-1 py-2">
                        40GB Storage
                      </li>
                      <li className="mb-1 py-2">Supported 3D Digital Maps</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 p-1">
                <div className="card bg-light text-center">
                  <div className="card-body p-4 bg-primary shadow-lg">
                    <img className="img-fluid d-block bg-primary" src={Asset_11} />
                    <h3><b>Professional</b></h3>
                    <h4>per user/per month</h4>
                    <h2><strike>€150</strike> <b>€75</b></h2>
                    <a className="btn btn-lg btn-block btn-success" href="#" id="professional-get-started">Get started</a>
                    
                    <ul className="list-unstyled my-3">
                      <li className="mb-1 py-2">BIM IFC Model Upload</li>
                      <li className="mb-1 py-2">20 View Invites / Project</li>
                      <li className="mb-1 py-2">20 Project Locations</li>
                      <li className="mb-1 py-2">
                        3 Library / Project
                      </li>
                      <li className="mb-1 py-2">10 Versions / Library</li>
                      <li className="mb-1 py-2">
                        120GB Storage
                      </li>
                      <li className="mb-1 py-2">Supported 3D Digital Maps</li>
                    </ul>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="py-5 bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="lead text-center">
                  Early Bird is available until May 2019 only.&nbsp;<br />​Secure a
                  lifetime discount on your subscription and activate it when we go
                  online.<br />
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PricingMainContent
