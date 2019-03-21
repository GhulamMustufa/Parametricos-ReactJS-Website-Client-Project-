import React from 'react'
import "./wireframe.css";
import Asset_55 from '../common assets/logo/Asset 55.png'

function PricingFooter() {
  return (
    <div>
      <div className="py-5 bg-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>FAQ</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6" style={{}}>
                <div className="list-group">
                  <a className="list-group-item list-group-item-action flex-column align-items-start active list-group-item-info">
                    <h4>What is an Early Bird Registration?&nbsp;</h4>
                  </a>
                  <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <p className="mb-1 lead text-dark">
                      An early bird registration gives you the opportunity to secure
                      a membership at discounted price for life.
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6" style={{}}>
                <div className="list-group">
                  <a className="list-group-item list-group-item-action flex-column align-items-start active list-group-item-info">
                    <h4>How does your Membership payment benefit you?</h4>
                  </a>
                  <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <p className="mb-1 lead text-dark">
                      You can see all the benefits above in the pricing structure.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="list-group">
                  <a className="list-group-item list-group-item-action flex-column align-items-start active list-group-item-info">
                    <h4>How do I activate my membership?</h4>
                  </a>
                  <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <p className="mb-1 lead text-dark">
                      You will find an Activate button in your Account Page when you
                      login to Parametricos.
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="list-group">
                  <a className="list-group-item list-group-item-action flex-column align-items-start active list-group-item-info">
                    <h4>Will you notify me when you launch Parametricos?</h4>
                  </a>
                  <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <p className="mb-1 lead text-dark">
                      Yes, we will do that by email.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bg-primary">
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

export default PricingFooter
