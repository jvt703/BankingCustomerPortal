
import { Link} from 'react-router-dom';
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const NavBar = ({pageName, pageDescription})=>{
    const [state, setState] = useState("test");

    const onClickHandler = (e)=>{
        localStorage.removeItem("UserToken")

    } 
  
    return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">NineTen Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={onClickHandler}>
                Logout  
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

}

export default NavBar;