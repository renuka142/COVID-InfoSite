import React, { Component,useState, useEffect } from "react";
import { Fade, Slide } from "react-reveal";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              Contact
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required"></span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required"></span>
                  </label>
                  <input
                    type="text"
                    value={email}
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required"></span>
                  </label>
                  <textarea
                    value={message}
                    cols="50"
                    rows="3"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    style={{ background: loader ? "#ccc" : " rgb(255,69,0)" }}
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
export default Contact;
