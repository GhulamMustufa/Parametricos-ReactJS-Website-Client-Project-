import React, { Component } from 'react'
import "./contact/wireframe.css";

import ContactMainPage from './contact/ContactMainPage';
import ContactFooter from './contact/ContactFooter';

export default class Contact extends Component {
  render() {
      const { id}=this.props;
    return (
        <div className="section ">
        <div className="section-content" id={id}>
        <ContactMainPage/>
    </div>
    <div>
        <div className="p-3 bg-dark py-4 d-flex flex-column" style={{height:"150px"}}>
      </div>
      <div className="container"></div>
    </div>
        <ContactFooter/>
  
      </div>
    )
  }
}
