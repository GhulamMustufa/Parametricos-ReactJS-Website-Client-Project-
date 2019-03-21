import React, { Component } from 'react'
import Background from './index/assets/main/observatory1.jpg';
import Artwork_66 from './index/assets/logo/Artwork 66.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
      className="p-3 d-flex flex-column"
      style={{backgroundImage: `url(${Background})`, backgroundPosition: "fixed-centre",	backgroundSize: "cover",	
                backgroundRepeat: "no-repeat",height:"600px",	boxShadow: "0px 0px 4px  black, 0px 0px 4px  black"}}
    >
      <div className="container mb-auto"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img
              className="img-fluid d-block mx-auto"
              src={Artwork_66}
              width="100"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <i className="fa fa-5x"></i>
            <h2 style={{color:"white"}}>
              <b>ORGANISING AND OPTIMISING THE WORLD'S CONSTRUCTION INDUSTRY</b>
            </h2>
          </div>
        </div>
      </div>
      <div className="container mt-auto">
        <div className="row">
          <div className="col-md-12">
            <p className="mt-auto text-secondary">
              Copyrights Parametricos Ltd, Cyprus
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
