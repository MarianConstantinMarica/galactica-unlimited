import './MenuBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo-horiz_darkbg.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MenuBar() {
    return (
        <Navbar className="navbar-default" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="270.5" height="43"/>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#plan">Plan</Nav.Link>
                    <Nav.Link href="#contactus">Contact us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MenuBar;