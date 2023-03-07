
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = ({pageName, pageDescription})=>{
    const [state, setState] = useState("test");
  
    const onClickHandler = (e)=>{
        localStorage.removeItem("UserToken")
        console.log("here")

    } 
  
    return (
    <Navbar className='NavBar' bg="primary" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">NineTen Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >
              <Link to={"/"}>Home</Link>
              </Nav.Link>
            <Nav.Link href="/Transactions">Transactions</Nav.Link>
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