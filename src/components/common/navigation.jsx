import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
/**
 * Render navigation bar with using Link component from library react-router-dom
 * @param {*} props 
 * @returns <Navbar> component
 */
const Navigation=(props)=>{
    return(
        <Navbar expend="lg" bg="dark" variant="dark" sticky="top">
          <Container fluid>
            <Navbar.Brand href="/automat/"> 
              <img src={logo} width="40" height="40"  alt="React logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link  as={Link} to="/automat">Automat</Nav.Link>
                <Nav.Link  as={Link} to="/documents">Docs</Nav.Link>
                <NavDropdown title="Templates" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/templates/turnstile">Turnstile</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link  as={Link} to="/contactUs">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}
export default Navigation