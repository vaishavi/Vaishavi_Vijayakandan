import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from '../assets/img/Logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { ArrowDownCircleFill } from 'react-bootstrap-icons';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home"> <img src={logo} sizes="45" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" > <span className="navbar-toggler-icon"></span></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>

                        <NavDropdown title="Resume" className={activeLink === 'resume1' || activeLink === 'resume2' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')} >
                            <NavDropdown.Item href="#resume1">SDE resume</NavDropdown.Item>
                            <NavDropdown.Item href="#resume2">
                                Data resume
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Let's connect <ArrowDownCircleFill size={25} style={{ marginLeft: '0.5rem' }}></ArrowDownCircleFill> </Nav.Link>

                    </Nav>




                    {/* <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1}></img></a>
                            <a href="#"><img src={navIcon2}></img></a>
                        </div>
                    </span> */}
                    {/* <button className="vvd" onClick={() => console.log('conect')}>
                        <span>Let's connect</span>
                    </button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}