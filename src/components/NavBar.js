import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/Logo.png'
import { ArrowDownCircleFill } from 'react-bootstrap-icons';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

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

    useEffect(() => {
    const handleOutsideClick = (event) => {
        const navbarNav = document.getElementById('basic-navbar-nav');
        const navbarToggle = document.getElementById('navbar-toggle');
  
        if (expanded && navbarNav && !navbarNav.contains(event.target) && !navbarToggle.contains(event.target)) {
            setExpanded(false);
        }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
}, [expanded]); 


    return (
        <Navbar expand="md" expanded={expanded} className={scrolled ? "scrolled" : ""}>
    <Container>
        <Navbar.Brand href="#home">
            <img src={logo} className="brand-logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} id="navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto" onSelect={() => setExpanded(false)}>
        <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
        <Nav.Link href="#about" className="navbar-link">About</Nav.Link>
        <Nav.Link href="#skills" className="navbar-link">Skills</Nav.Link>
        <Nav.Link href="#projects" className="navbar-link">Project</Nav.Link>
        <Nav.Link href="/Vaishavi_Vijayakandan_SDE.pdf" className="navbar-link">Resume</Nav.Link>
    </Nav>
    <Nav onSelect={() => setExpanded(false)}>
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
