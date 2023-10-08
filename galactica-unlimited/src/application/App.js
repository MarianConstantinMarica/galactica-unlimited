import './App.css';
import HomePage from '../home/HomePage';
import LoginPage from '../login/LoginPage';
import './MenuBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo-horiz_darkbg.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomePage: true,
      showLoginPage: false
    };
  }

  toggleHomePage = () => {
    this.setState(() => ({
      showHomePage: true,
      showLoginPage: false
    }));
  };

  toggleLoginPage = () => {
    this.setState(() => ({
      showHomePage: false,
      showLoginPage: true
    }));
  };

  render() {
    return (
      <div>
        <Navbar className="navbar-default" data-bs-theme="dark" fixed="top">
          <Container>
            <button onClick={this.toggleHomePage} style={{ background: 'transparent', border: '0' }}>
              <Navbar.Brand>
                <img src={logo} width="270.5" height="43" />
              </Navbar.Brand>
            </button>
            <Nav className="ms-auto">
              <button onClick={this.toggleHomePage} style={{ background: 'transparent', border: '0' }}>
                <Nav.Link>Home</Nav.Link>
              </button>
              <button onClick={this.toggleLoginPage} style={{ background: 'transparent', border: '0' }}>
                <Nav.Link>Login</Nav.Link>
              </button>
              <button onClick={this.toggleHomePage} style={{ background: 'transparent', border: '0' }}>
                <Nav.Link>Plan</Nav.Link>
              </button>
              <button onClick={this.toggleLoginPage} style={{ background: 'transparent', border: '0' }}>
                <Nav.Link>Contact us</Nav.Link>
              </button>
            </Nav>
          </Container>
        </Navbar>
        {this.state.showHomePage ? <HomePage /> : (this.state.showLoginPage ? <LoginPage/> : <HomePage/>)}
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="navbar-default" data-bs-theme="dark" fixed="top">
          <Container>
            <Link to="/home">
              <Navbar.Brand href="#home">
                <img src={logo} width="270.5" height="43" />
              </Navbar.Brand>
            </Link>
            <Nav className="ms-auto">
              <Link to="/home">
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link to="/login">
                <Nav.Link>Login</Nav.Link>
              </Link>
              <Link to="/plan">
                <Nav.Link>Plan</Nav.Link>
              </Link>
              <Link to="/contactus">
                <Nav.Link>Contact us</Nav.Link>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/home" Component={HomePage}/>
        </Routes>
        
      </Router>
    </div>
  );
}*/

export default App;
