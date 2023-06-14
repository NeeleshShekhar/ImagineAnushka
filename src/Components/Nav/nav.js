import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';
import logo from '../../Assets/logo.png';

function NavbarMain() {
  return (
    
    <Navbar  expand="lg" className='nav-detail' fixed='top'>
      <Container>
        <Navbar.Brand href="/">
            
        <img className='nav-image' src={logo} width={50} height={50}></img> 
            <span className='nav-brand-title'>Anushka Imagine</span>
      

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>

            <Nav.Link href="#link">Login</Nav.Link>

            {/* <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               
              </NavDropdown.Item>
            </NavDropdown> */
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavbarMain;