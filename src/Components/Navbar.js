import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <button
          className="navbar-toggler navbar-toggler-right border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbar13"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar13">
          <a className="navbar-brand d-none d-md-block" href="#">
            <b> PARAMETRICOS</b>
          </a>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <Link
                className="nav-link"
                activeClass="active"
                to="whatwedo"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Whatwedo
              </Link>
            </li>
            <li className="nav-item">
            <Link
                className="nav-link"
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
            <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://twitter.com/parametricoscom">
                <i className="fa fa-twitter fa-fw"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.facebook.com/parametricoscompany/"
              >
                <i className="fa fa-facebook fa-fw"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/company/parametricos/"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}
