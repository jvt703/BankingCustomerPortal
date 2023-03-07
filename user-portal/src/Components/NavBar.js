
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({pageName, pageDescription})=>{
    const [state, setState] = useState("test");
    const Navigate = useNavigate();
    const onClickHandler = (e)=>{
        localStorage.removeItem("UserToken")
        Navigate("/")
    } 
    useEffect(
      ()=>{
        localStorage.setItem("UserToken", "Test")
      },[]

    )
  
    return (
      <Navbar className="NavBar" bg="primary" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">NineTen Bank</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link className="text-light text-decoration-none" to={"/"}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-light text-decoration-none"
                  to={"/Transaction"}
                >
                  Transaction
                </Link>
              </Nav.Link>
              <NavDropdown
                className="text-light"
                title="Link"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link
                      className="text-secondary text-decoration-none"
                      to={"/Settings"}
                    >
                      Settings
                    </Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link
                      className="text-secondary text-decoration-none"
                      to={"/Settings"}
                    >
                      Settings
                    </Link>
                  </Nav.Link>
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