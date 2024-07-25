import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img1.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Banner = () => {

    const toRotate = ["Full Stack Developer", "Web Developer", "Machine Learning enthusiast" ]
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 1000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(75);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col className="banner-margin" xs={12} md={5} xl={7}>
                        <h3><span className="welcome">Welcome to my Portfolio!</span></h3>
                        <h2>{"Hi, I'm Vaishavi Vijayakandan,"}<br /><span className="wrap">{text}</span></h2>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/vaishavi-vijayakandan/"><img src={navIcon1}></img></a>
                            <a href="https://github.com/vaishavi"><img src={navIcon2}></img></a>
                        </div>
                    </Col>
                    <Col className="banner-margin" xs={12} md={5} xl={5}>
                        <img className="banner-main-img" src={headerImg} />
                    </Col>

                </Row>
            </Container>

        </section>
    );
}