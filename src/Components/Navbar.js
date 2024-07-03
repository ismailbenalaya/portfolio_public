import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import logo from '../Assets/img/logo1.svg';
import navIcon from '../Assets/img/nav-icon1.svg';
import navIcon2 from '../Assets/img/nav-icon2.svg';
import navIcon3 from '../Assets/img/nav-icon3.svg';
import projects from './Projects';
import skills from './Skills';
import contact from './Contact';

import { Navbar , Container, Nav } from 'react-bootstrap';

export function NavBar() {
    const [activateLink, setActivateLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActivateLink(value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activateLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohamed-ismail-ben-alaya-851898222" target="_blank" rel="noopener noreferrer">
    <img src={navIcon} alt="LinkedIn" />
</a>

                <a href="https://www.facebook.com/profile.php?id=100069476391733&mibextid=ZbWKwL" target='_blank' rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/ismailbenalaya/"><img src={navIcon3} alt="" /></a>
              </div>
         
              <button className="vvd" onClick={() => window.location.href = '#connect'}>
  <span>Let’s Connect</span>
</button>

          
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
