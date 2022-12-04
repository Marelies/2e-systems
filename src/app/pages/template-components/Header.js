import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { auth, db } from '../../context/Config';
import { Component } from 'react'
import Logo from '../../../lib/images/plane.png';
import { render } from 'react-dom';

export class Header extends Component {


  state = {
    user: null,
}

componentDidMount() {
    // getting user info for navigation bar
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                this.setState({
                    user: snapshot.data().Name
                });
            });
        }
        else {
            this.setState({
                user: null
            })
        }
    })

  }
  render(){
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
            <Nav.Link href="/add-airport" className='navigacija'>Add Airport</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/weather-list">World Weather</NavDropdown.Item>
              <NavDropdown.Item href="/airline-list">
                Airline Informations
              </NavDropdown.Item>
         
        
            
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/" className='navigacija'>Login</Nav.Link>
  <Nav.Link href="#deets" className='navigacija'>{this.state.user}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
}

export default Header;