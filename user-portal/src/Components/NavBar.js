
import React from "react";
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({pageName, pageDescription})=>{

    const Navigate = useNavigate();
    const onClickHandler = (e)=>{ 
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        Navigate("/")
    } 

    const clickToSettingsHandler=()=>{
        Navigate("/Settings")
    }

  
    return (
      <Navbar className="NavBar" bg="primary" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            NineTen Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} className="text-light" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="text-light" to="/Accounts">
                Accounts
              </Nav.Link>
              <Nav.Link as={Link} className="text-light" to="/Transaction">
                Transaction
              </Nav.Link>
              <Nav.Link as={Link} className="text-light" to="/CreditCards">
                Credit Cards
              </Nav.Link>
              <Nav.Link as={Link} className="text-light" to="/Loans">
                Loans
              </Nav.Link>
              <NavDropdown
                className="text-light"
                title="User"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={clickToSettingsHandler}>
                  <Nav.Link as={Link} className="text-secondary" to="/Settings">
                    Settings
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={clickToSettingsHandler}>
                  <Nav.Link as={Link} className="text-secondary" to="/Setting">
                    Setting
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