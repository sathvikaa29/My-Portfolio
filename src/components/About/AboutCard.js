import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sathvika Kondamadugu </span>
            from <span className="purple"> Chicago, USA</span>
            <br />
            I am currently pursuing my Masters in Computer Sciene at University of Illinois at Chicago
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing strategic games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Strive for progress, not perfection. Every step forward, no matter how small, is a step towards your goals."{" "}
          </p>
          <footer className="blockquote-footer">Sathvika</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
