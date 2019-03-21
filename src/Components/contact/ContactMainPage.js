import React from 'react'
import "./wireframe.css";

import Asset_55 from '../common assets/logo/Asset 55.png'


const ContactMainPage= () => {
  return (
    <div>
      <div className="p-3 h-100 bg-dark py-4">
    
    <div className="container mb-auto" style={{width:"100%",height:"150px"}}></div>
    <div className="container">
      <div className="row ">
        <div className="col-md-10 mx-auto" style={{width:"100%",height:"200px", alignContent:"center"}}>
          <h1 className="cover-heading"><b>Contact Us</b></h1>
          <div className="row" style={{width:"100%",height:"140px", paddingLeft:"70px"}}>
            <div className="col-md-4" style={{width:"100%",height:"40px"}}>
              <p className="lead text-right"><b>email</b></p>
              <p className="lead text-right"><b>facebook</b></p>
              <p className="lead text-right"><b>linkedIn</b></p>
            </div>
            <div className="col-md-8" style={{width:"100%",height:"40px"}}>
              <p className="lead text-left" >
                info@parametricos.com
              </p>
              <p className="lead text-left">@parametricoscompany</p>
              <p className="lead text-left">linkedin.com/company/parametricos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ContactMainPage;