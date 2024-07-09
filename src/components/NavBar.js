import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/Logo.png'
import { ArrowDownCircleFill } from 'react-bootstrap-icons';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home"> 
                    <img src={logo} className="brand-logo" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
                        <Nav.Link href="#about" className="navbar-link">About</Nav.Link>
                        <Nav.Link href="#skills" className="navbar-link">Skills</Nav.Link>
                        <Nav.Link href="#projects" className="navbar-link">Project</Nav.Link>
                        <Nav.Link href="/Vaishavi_Vijayakandan_SDE.pdf" className="navbar-link">Resume</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#connect" className="navbar-link">
                            Let's connect 
                            <ArrowDownCircleFill size={25} style={{ marginLeft: '0.5rem' }} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
