import React, { useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    scroll.scrollTo(id, {
      containerId: id,
      duration: 50,
      smooth: 'easeInOutCubic',
      offset: 0,
    });
  };

  useEffect(() => {
    scrollToSection('home');
  }, []); 

  return (
    <header className="fixed-header">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Item>
              <ScrollLink
                className="nav-link"
                to="home"
                activeClass="active"
                spy={true}
                smooth="easeInOutQuart"
                offset={-100}
                duration={50}
                onClick={(event) => {
                  event.preventDefault(); 
                  scrollToSection('home');
                }}
              >
                Home
              </ScrollLink>
            </Nav.Item>
            <Nav.Item>
              <ScrollLink
                className="nav-link"
                to="about"
                activeClass="active"
                spy={true}
                smooth="easeInOutQuart"
                offset={-55}
                duration={50}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </ScrollLink>
            </Nav.Item>
            <Nav.Item>
              <ScrollLink
                className="nav-link"
                to="process"
                activeClass="active"
                spy={true}
                smooth="easeInOutQuart"
                offset={0}
                duration={50}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('process');
                }}
              >
                Process
              </ScrollLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;

