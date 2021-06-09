import React, { useState } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../../img/logo-uiuxiwhite.png';
import './TopMenu.css';


const TopMenu = () => {

const [navbar, setNavbar] = useState(false);
const changeBackground = () => {
  if(window.scrollY >= 80) {
    setNavbar(true)
  } else{
    setNavbar(false);
  }
};

window.addEventListener("scroll", changeBackground);

return (

<Navbar className={navbar ? "navbar-main active" : "navbar-main"} expand="lg">
  <Container>
    <Navbar.Brand className="text-start" href="#home"><img className="img-fluid" src={logo} alt="" /></Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" className={"text-center"}/>
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="ms-auto text-center">
        <Nav.Link className="nav-link-custom" href="#home">Home</Nav.Link>
        <Nav.Link className="nav-link-custom" href="#about">About</Nav.Link>
        <Nav.Link className="nav-link-custom" href="#services">Services</Nav.Link>
        <Nav.Link className="nav-link-custom" href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link className="nav-link-custom" href="#team">Team</Nav.Link>
        <Nav.Link className="nav-link-custom" href="#testimonial">Testimonial</Nav.Link>
        <Nav.Link className="nav-link-custom" href="#contact">Contact</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default TopMenu;