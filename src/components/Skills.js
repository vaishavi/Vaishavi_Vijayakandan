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




import meter1 from "../assets/img/meter1.svg";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Programming Languages</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Frameworks/Software</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={python} alt="Python" />
                                                    <h5>Python</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={java} alt="Java" />
                                                    <h5>Java</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={sql} alt="SQL" />
                                                    <h5>SQL</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={meter1} alt="C,C++" />
                                                    <h5>C,C++</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={javascript} alt="JavaScript" />
                                                    <h5>JavaScript</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={html} alt="HTML" />
                                                    <h5>HTML</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={css3} alt="CSS3" />
                                                    <h5>CSS3</h5>
                                                </div>
                                            </Col>
                                        </Row>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={react} alt="React" />
                                                    <h5>React</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={angular} alt="AngularJS" />
                                                    <h5>AngularJS</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={nodeJS} alt="Node.js" />
                                                    <h5>Node.js</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={springBoot} alt="Spring Boot" />
                                                    <h5>Spring Boot</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={hibernate} alt="Hibernate" />
                                                    <h5>Hibernate</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={mongoDB} alt="MongoDB" />
                                                    <h5>MongoDB</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={django} alt="Django" />
                                                    <h5>Django</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={spark} alt="Spark" />
                                                    <h5>Spark</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={mysql} alt="MySQL" />
                                                    <h5>MySQL</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={jira} alt="Jira" />
                                                    <h5>Jira</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={aws} alt="AWS" />
                                                    <h5>AWS</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={git} alt="Git" />
                                                    <h5>Git</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={pytorch} alt="PyTorch" />
                                                    <h5>PyTorch</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={tensorflow} alt="TensorFlow" />
                                                    <h5>TensorFlow</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={scikitlearn} alt="scikit-learn" />
                                                    <h5>scikit-learn</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="item">
                                                    <img src={numpy} alt="NumPy" />
                                                    <h5>NumPy</h5>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
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
        </section >

    )
}