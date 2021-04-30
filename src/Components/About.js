import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;
    const about = this.props.data.about;
    
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <h2>WHO ARE WE ?</h2>
              <p>{about}</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
