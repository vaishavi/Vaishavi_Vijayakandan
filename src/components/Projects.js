import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Proj1.webp";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/Proj3.png";
import groceryMart from "../assets/img/groceryMart.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import anamoly from "../assets/img/AircraftAnomoly.png";
import neuralNetwork from "../assets/img/neuralNetworkStudy.png";
import airBnb from "../assets/img/AirBNB.png"
import textSum from "../assets/img/textSum.png"
import portfolio from "../assets/img/portfolioImg.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCarousel from "./CarouselProjects";
import { useEffect, useState } from "react";

// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
export const Projects = () => {
  // State tab1 and tab2 // default tab1
  const [tab, setTab]=useState('first');
    const projects_SDE = [
        {
            title: "Personal Portfolio",
            description: "A sleek and personalized portfolio website built using React to showcase my professional and project profiles. This dynamic single-page application features a responsive design and interactive elements that highlight my skills, ensuring optimal viewing on various devices and demonstrating modern web development expertise.",
            imgUrl: portfolio,
        },
        {
            title: "Sorting Algorithm Visualizer",
            description: "A dynamic web application that visualizes sorting algorithms like bubble, merge, and quick sort using React for real-time comparisons on diverse datasets. It features smooth animations for clarity and a ChatGPT-powered chatbot for interactive learning, demonstrating advanced web development and AI integration skills.",
            imgUrl: projImg1,
        },
        {
            title: "Grocery Price Comparison App",
            description: "A streamlined app that compares grocery prices for budget-conscious shoppers, built with React, Python, Node.js, and MongoDB. Features an optimized interface for Android and a Selenium-based API that extracts data from two grocery websites, facilitating smart shopping decisions.",
            imgUrl: groceryMart,
        },
        {
            title: "Data Security Web App",
            description: "A Python and Django-based web application that enhances data security using RSA encryption with Mersenne Primes. Features LSB image steganography combined with XOR for secure data hiding and includes a robust two-factor verification system.",
            imgUrl: projImg3,
        }
    ];

    const projects_Data = [
        {
            title: "Aircraft Anomaly Detection",
            description: "Enhanced aviation safety by deploying AI models (Enhanced Isolation Forest and Negative Sampling Neural Network) with AUCs of 85% and 82%. Introduced explainability with LIME, SHAP, and custom methods. Developed a React dashboard for easy anomaly detection analysis.",
            imgUrl: anamoly,
        },
        {
            title: "Text Summarization Transformer",
            description: "Boosted a Transformer-based abstractive text summarizer to a 45% ROUGE-1 score through subword tokenization. Enhanced the PEGASUS architecture with sentence masking for focused learning, managing 568 million parameters.",
            imgUrl: textSum,
        },
        {
            title: "Comparative Classifier and Neural Network Efficacy Study",
            description: "Improved SVM efficiency by 20% on the MNIST dataset using PCA, also enhancing logistic regression and Random Forest classifiers. Boosted neural network performance by 25% with Keras-TensorFlow, utilizing advanced learning techniques for higher accuracy.",
            imgUrl: neuralNetwork,
        },
        {
            title: "Airbnb Data Insights",
            description: "Conducted EDA on NYC Airbnb data, improving data quality and revealing trends with Plotly. Increased model accuracy by 40% using PCA and k-means clustering with sophisticated outlier detection",
            imgUrl: airBnb,
        }

    ];

    const quotes = ["Every project is a playground, and every bug just adds to the fun.",
"Tackling projects with a coffee in one hand and a stack overflow page in the other.",
"Coding projects like cooking—sometimes it’s a recipe, sometimes it’s an experiment.",
"Each project a new adventure, every bug a plot twist.",
"Project by project, we level up—think of it as a game where you only win by learning."]

    const [quote, setQuote] = useState("");

    useEffect(()=>{
        const randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
        setQuote(randomQuote)

    },[]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    const handleSelect = (key) => {
        setTab(key);

    }

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>{quote}</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={handleSelect}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">SDE Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Data Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                            <Tab.Pane eventKey="first">
                                <ProjectCarousel data={projects_SDE} responsive={responsive} infinite={false} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ProjectCarousel data={projects_Data} responsive={responsive} infinite={false}/>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}