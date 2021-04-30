import React, { Component } from "react";
import "../Components/Styling/Symptoms.css"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'react-bootstrap';


class Symptoms extends Component {
 render() {
    return (
      <div>
        <h3>SYMPTOMS</h3>
        <div className="card">
          <section id="symptoms">
            <div className="row education">
              <Card style={{ width: '18rem' }} className="content">
                <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/medical-filled-outline-10/128/avatar_people_patient_boy_fever_sick_illness-512.png" />
                <Card.Body>
                  <Card.Title className="title">FEVER</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="content">
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/sick-woman-cough-cold-vector-illustration-isolated-white-background-sick-woman-cough-cold-vector-illustration-145325982.jpg" />
                <Card.Body>
                  <Card.Title className="title">DRY COUGH</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="content">
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/chronic-tired-man-exhausted-person-male-character-feeling-weak-low-energy-state-physical-emotional-burnout-mental-fatigue-176683136.jpg" />
                <Card.Body>
                  <Card.Title className="title">FATIGUE</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="content">
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/sick-young-man-no-appetite-front-meal-colorful-flat-vector-illustration-isolated-white-background-128116535.jpg" />
                <Card.Body>
                  <Card.Title className="title">LOSS OF APETITE</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="content">
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/girl-sneezing-runny-nose-sweet-little-holding-handkerchief-green-mucus-161760945.jpg" />
                <Card.Body>
                  <Card.Title className="title">RUNNY NOSE</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </section>
        </div>
        <h3>COVID-19 TRACKER</h3>
      </div>
    );
  }
}

export default Symptoms;