import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import sample from "./image/Sample.jpg";
function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header>
        <div className="header-text">
          Hello and welcome to{" "}
          <span className="different_color"> R.Ghazi </span> Protfolio webpage
        </div>
      </header>

      <section className="about  container ">
        <div className=" width">
          <div className=" container">
            <i class="fas fa-address-card fa-2x"></i>
          </div>
          <div className="text">
            <div className="title">About me</div>I am a full stack software
            deveoper. I'm passan ation about programming and learning new
            technologies. Other than programming my main hobby is hiking.
          </div>
        </div>
      </section>

      <section className="skills  container  ">
        <div className=" width2 ">
          <div className=" container">
            <i class="fas fa-laptop fa-2x"></i>
            <div></div>
          </div>
          <div className="text  ">
            <div className="title">Skills</div>
            <Container fluid>
              <Row className="height1">
                <Col md={4}>HTML</Col>
                <Col md={4}>CSS</Col>
                <Col md={4}>Git & Github</Col>
              </Row>
              <Row className="height1">
                <Col md={4}>Python</Col>
                <Col md={4}>Djnago</Col>
                <Col md={4}>React</Col>
              </Row>
              <Row className="height1">
                <Col md={4}>TypeScript</Col>
                <Col md={4}>Node.js</Col>
                <Col md={4}>REST API</Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <section className="sample_project_start  container  ">
        <div className="text ">
          <div className="sample_project_start ">
            Sample Projects
            <div b>
              <i class="fas fa-chevron-down fa-2x"></i>
            </div>
          </div>
          <div className="container"></div>
        </div>
      </section>

      <section className="container width ">
        <div className="text   samle_project">
          <Container className=" height100  ">
            <Row className="height100  width100 ">
              <Col md={6} className="r">
                <img src={sample} alt="" />
              </Col>
              <Col md={6} className="r">
                <h5>Ecommerce Website</h5>
                Technologies:
                <Row className="justify-content-md-center">React</Row>
                <Row className="justify-content-md-center">Node.js</Row>
                <Row>
                  <Col>
                    <a
                      href="https://www.onlineshopsample.ca/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button> Website</Button>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://github.com/Ross-Ghazi/eCommerce-React-Nodejs"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button> GitHub Link</Button>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default App;
