import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
const Navigation=(props)=>{
    return(
        <Navbar expend="lg" bg="dark" variant="dark" sticky="top">
          <Container fluid>
            <Navbar.Brand href="/automat"> 
              <img src={logo} width="40" height="40"  alt="React logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/automat">Home</Nav.Link>
                <Nav.Link  as={Link} to="/automat/automat">Automat</Nav.Link>
                <Nav.Link  as={Link} to="/automat/documents">Docs</Nav.Link>
                <NavDropdown title="Templates" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/automat/templates/turnstile">Turnstile</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link  as={Link} to="/automat/contactUs">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}
export default Navigation