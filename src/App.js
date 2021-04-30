import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Symptoms from "./Components/Symptoms";
import Contact from "./Components/Contact";
import TrackerSection from "./Components/TrackerComponents/TrackerSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      Data: {}
    };
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }
  getData() {
    $.ajax({
      url: "./Data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ Data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="App">
        <Header data={this.state.Data.main} />
        <About data={this.state.Data.main} />
        <Symptoms />
        <TrackerSection />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
