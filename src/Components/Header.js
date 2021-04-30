import React, { Component } from "react";
import corona from "../assets/corona.jpg";
import Fade from "react-reveal";
import "../Components/Styling/Header.css"

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <img src={corona} alt="" className="full-page-image"/>
  	    <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#symptoms">
              Symptoms 
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#tracker">
                COVID Tracker
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">   
            <br /><br /><br /><br /><br />
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <hr />
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
