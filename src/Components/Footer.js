import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    return (
        <Fade>
        <footer>
        <Fade bottom>
          <h4>Information Verified By WHO</h4>
        </Fade>
          <div className="row">
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open"></i>
              </a>
            </div>
          </div>
        </footer>
      </Fade>
    );
  }
}

export default Footer;
