import React, { Component } from 'react'
import "./whatwedo/wireframe.css";
import Asset_44 from './common assets/logo/Asset 44.png'


import WhatwedoIntro from './whatwedo/WhatwedoIntro';
import WhatwedoFeatures from './whatwedo/WhatwedoFeatures';
import WhatwedoFooter from './whatwedo/WhatwedoFooter';


export default class Whatwedo extends Component {
  render() {
    const {dark, id}=this.props;
    return (
        <div className={"section" + (dark ? " section-dark" : "")} style={{width:"100%"}}>
        <div className="section-content"  id={id}>
      <div>
       
        <WhatwedoIntro/>
        <WhatwedoFeatures/>
        <WhatwedoFooter/>
       
      </div>
      </div>
      </div>
    )
  }
}
