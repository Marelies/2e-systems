import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Desk from  '../../../lib/images/Desk.png'

import Logo from '../../../lib/images/plane.png';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} width='120' class="d-inline-block align-text-top"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='navigacija'>Home</Nav.Link>
            <Nav.Link href="/user" className='navigacija'>Airports</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/weather-list">World Weather</NavDropdown.Item>
              <NavDropdown.Item href="/airline-list">
                Airline Informations
              </NavDropdown.Item>
         
        
            
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='navigacija'>Login</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;