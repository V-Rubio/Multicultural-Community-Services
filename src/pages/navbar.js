import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";

const navbar = function () {
  return (
    <>
      <div class='logo'>Multicultural Community Services</div>
      <div class='smallLogo'>a 501(c)3 private non-profit</div>
      <Navbar bg="light" data-bs-theme="light" sticky="top">
        {/* <a class="nav-item nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a> */}
        <Container class="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* <Navbar.Brand href="/">Home</Navbar.Brand> This should be Logo*/}
          <Nav>
            <ul class='ulNone'> 
              <li>
                <Nav.Link class="nav-item nav-link" href="./">
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link class="nav-item nav-link" href="./about">
                  About
                </Nav.Link>
              </li>
              <li>
                <Nav.Link class="nav-item nav-link" href="./youth">
                  Youth
                </Nav.Link>
              </li>
              <li>
                <Nav.Link class="nav-item nav-link" href="./families">
                  Families
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  class="nav-item nav-link"
                  href="./professional-development"
                >
                  Professional Development
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="./donate">Donate</Nav.Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
