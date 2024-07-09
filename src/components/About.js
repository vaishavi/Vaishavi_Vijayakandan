import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp3.png";


const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <h2>About Me</h2>
          <Col>
            <p>
              👋 Hello World!
              <br /><br />
              I'm a Computer Science grad student at The George Washington University, specializing in Machine Learning.
              <br /><br />
              My tech journey began at Larsen & Toubro InfoTech, but it really took off at The George Washington University. I've been deep in designing, developing, debugging, deploying, and documenting some cool software solutions, fully immersing myself in the magical software lifecycle.
              <br /><br />
              As an Oracle Certified Professional JAVA 11 Developer, I speak fluent Java (the programming language, not the coffee... though I love that too!). I thrive in agile environments, ensuring cross-platform compatibility and rapid rollout.
              <br /><br />
              Let's connect and create some tech magic together. Whether it's brainstorming the next big thing or diving into the code, I'm all in!
            </p>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default About;
