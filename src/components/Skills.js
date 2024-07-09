import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import python from "../assets/img/python.svg";
import css3 from "../assets/img/css3.svg";
import html from "../assets/img/html.svg";
import java from "../assets/img/java.svg";
import javascript from "../assets/img/javascript.svg";
import sql from "../assets/img/sql.png";
import react from "../assets/img/react.svg";
import angular from "../assets/img/angularJS.svg";
import nodeJS from "../assets/img/nodejs.svg";
import springBoot from "../assets/img/springboot.svg";
import hibernate from "../assets/img/hibernate.svg";
import mongoDB from "../assets/img/mongo.svg";
import django from "../assets/img/django.svg";
import spark from "../assets/img/spark.svg";
import mysql from "../assets/img/mysql.svg";
import jira from "../assets/img/jira.svg";
import aws from "../assets/img/aws.svg";
import git from "../assets/img/git.svg";
import pytorch from "../assets/img/pytorch.svg";
import tensorflow from "../assets/img/tensorflow.svg";
import scikitlearn from "../assets/img/scikit-learn.svg";
import numpy from "../assets/img/numpy.svg";
import pandas from "../assets/img/pandas.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const quotes = [
        "Every bug squashed is a new skill mastered.",
        "Stacking skills like code blocks—building higher with each line.",
        "Turning curiosity into capabilities, one skill at a time.",
        "Climbing the coder ladder, one powerful skill upgrade at a time.",
        "From tentative trials to trusted tech tactics, growing skills with every code commit."
    ];
    const [quote, setQuote] = useState("");

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }, []);

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>{quote}</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Languages</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Frameworks</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={python} alt="Python" />
                                                    <h5>Python</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={java} alt="Java" />
                                                    <h5>Java</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={sql} alt="SQL" />
                                                    <h5>SQL</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={sql} alt="C,C++" />
                                                    <h5>C,C++</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={javascript} alt="JavaScript" />
                                                    <h5>JavaScript</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={html} alt="HTML" />
                                                    <h5>HTML</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={css3} alt="CSS3" />
                                                    <h5>CSS3</h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={react} alt="React" />
                                                    <h5>React</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={angular} alt="AngularJS" />
                                                    <h5>AngularJS</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={nodeJS} alt="Node.js" />
                                                    <h5>Node.js</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={springBoot} alt="Spring Boot" />
                                                    <h5>Spring Boot</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={hibernate} alt="Hibernate" />
                                                    <h5>Hibernate</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={mongoDB} alt="MongoDB" />
                                                    <h5>MongoDB</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={django} alt="Django" />
                                                    <h5>Django</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={spark} alt="Spark" />
                                                    <h5>Spark</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={mysql} alt="MySQL" />
                                                    <h5>MySQL</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={jira} alt="Jira" />
                                                    <h5>Jira</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={aws} alt="AWS" />
                                                    <h5>AWS</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={git} alt="Git" />
                                                    <h5>Git</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={pytorch} alt="PyTorch" />
                                                    <h5>PyTorch</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={tensorflow} alt="TensorFlow" />
                                                    <h5>TensorFlow</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={scikitlearn} alt="scikit-learn" />
                                                    <h5>scikit-learn</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={numpy} alt="NumPy" />
                                                    <h5>NumPy</h5>
                                                </div>
                                            </Col>
                                            <Col className="skill-col" md={6} lg={3}>
                                                <div className="item">
                                                    <img src={pandas} alt="pandas" />
                                                    <h5>pandas</h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};
