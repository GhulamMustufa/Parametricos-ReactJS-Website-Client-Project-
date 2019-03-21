import React from 'react'
import "./wireframe.css";

import Asset_55 from '../common assets/logo/Asset 55.png'

const ContactFooter=() => {
  return (
    <div>
      <div className="py-5 bg-secondary">
          <div className="container">
            <div className="row pt-5 border-top">
              <div className="col-12 col-md">
                <img className="img-fluid d-block mx-auto" src={Asset_55} width={100} /><small className="d-block text-muted mb-3 mt-2">Copyrights&nbsp;© Parametricos Ltd&nbsp;<br />, Cyprus&nbsp;
                  2018-2019</small>
              </div>
              <div className="col-6 col-md">
                <h5><b>Features</b></h5>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-muted" href="#">Cool stuff</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Random feature</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Team feature</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Stuff for developers</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Another one</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Last time</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5><b>Resources</b></h5>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-muted" href="#">Resource</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Resource name</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Another resource</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Final resource</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5><b>About</b></h5>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-muted" href="#">Team</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Locations</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Privacy</a>
                  </li>
                  <li>
                    <a className="text-muted" href="#">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactFooter;
