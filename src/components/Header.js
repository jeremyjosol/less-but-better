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
      <Navbar expand="sm" bg="light" variant="light">        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <ScrollLink
                className="nav-link"
                to="home"
                activeClass="active"
                spy={true}
                smooth="easeInOutQuart"
                offset={-200}
                duration={50}
                onClick={(event) => {
                  event.preventDefault(); 
                  scrollToSection('home');
                }}
              >
                BASE
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
                ESSENCE
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
                SEQUENCE
              </ScrollLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;

