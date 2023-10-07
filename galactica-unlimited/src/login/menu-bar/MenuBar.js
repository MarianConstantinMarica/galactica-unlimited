import './MenuBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo-full_darkbg.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MenuBar() {
    return (
        <Navbar className="navbar-default" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="160.5" height="76.5"/>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#latestoffers">Latest offers</Nav.Link>
                    <Nav.Link href="#aboutus">About us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MenuBar;