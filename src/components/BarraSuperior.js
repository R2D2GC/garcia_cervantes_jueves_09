import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom";

function BarraSuperior() {
  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Practica Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="mapa" >Mapa</Nav.Link>
              <Nav.Link as={Link} to="carrusel" >Carrusel</Nav.Link>
              <Nav.Link as={Link} to="logo" >Logo</Nav.Link>
              <Nav.Link as={Link} to="Curriculum" >Curriculum</Nav.Link>
              <Nav.Link as={Link} to="Inicio" >inicio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraSuperior;