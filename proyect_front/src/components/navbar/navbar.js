import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Reposteria jose<span id= "usuario-sub-bram"></span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>*/}
              <DropdownButton
                id="dropdown-basic-button"
                title="Usuario" >
             
                <Dropdown.Item href="#/action-1">Cerrar sesion</Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
