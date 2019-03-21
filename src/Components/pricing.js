import React, { Component } from 'react'
import "./pricing/wireframe.css";

import PricingMainContent from './pricing/PricingMainContent';
import PricingFooter from './pricing/PricingFooter';

export default class Pricing extends Component {
    render() {
        const {dark, id}=this.props;
        return (
            <div className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
      <div>
        <link rel="icon" href="./common assets/logo/Asset 55.png" />
        <title>Pricing</title>
        
        <PricingMainContent/>
       <PricingFooter/>
        
    
      </div>
 
          </div>
          </div>
    )
  }
}
