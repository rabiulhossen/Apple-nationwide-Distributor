import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
            <Navbar bg="info" expand="lg">
  <Container>
    <Navbar.Brand to="/home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link to="/home">Home</Nav.Link>
        <Nav.Link to="/login">Login</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item to="/about">About</NavDropdown.Item>
          <NavDropdown.Item to="/action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item to="/action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item to="/action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
    );
};

export default Header;