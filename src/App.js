import "./App.css";
import react, { useEffect } from "react";
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
import sample2 from "./image/sample2.JPG";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <header>
        <div className=" container ">
          <div className="header-text container ">
            <p>
              Hello and welcome to{" "}
              <span className="different_color">Ross Ghazi</span> porfolio
              webpage
            </p>
          </div>
        </div>
      </header>

      <section data-aos="fade-up" className="about   container ">
        <div className=" width">
          <div className=" container">
            <i class="fas fa-address-card fa-2x"></i>
          </div>
          <div className="text width20rem ">
            <div className="title ">About me</div>I am a full stack software
            developer. I'm passionate about programming and learning new
            technologies. I have a deep understanding of data structure and
            algorithm. One of my favouraite hobbies are solving leetcode
            problems. Other than programming my main hobby is hiking.
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="skills  container  ">
        <div className=" width2 ">
          <div className=" container">
            <i class="fas fa-laptop fa-2x"></i>
            <div></div>
          </div>
          <div className="text  ">
            <div className="title">Skills</div>
            <Container fluid>
              <Row className="height1">
                <Col className="height3rem" sm={12} md={4}>
                  {" "}
                  <i class="fab fa-html5"></i> HTML
                </Col>
                <Col className="height3rem" sm={12} md={4}>
                  {" "}
                  <i class="fab fa-css3-alt"></i> CSS
                </Col>
                <Col className="height3rem" sm={12} md={4}>
                  <i class="fab fa-github"></i> Git & GitHub
                </Col>
              </Row>
              <Row className="height1">
                <Col className="height3rem" sm={12} md={4}>
                  {" "}
                  <i class="fab fa-python"></i> Python
                </Col>
                <Col className="height3rem" sm={12} md={4}>
                  Django{" "}
                </Col>
                <Col className="height3rem" sm={12} md={4}>
                  JavaScript{" "}
                </Col>
              </Row>
              <Row className="height1">
                <Col className="height3rem" md={4}>
                  TypeScript
                </Col>
                <Col className="height3rem" md={4}>
                  {" "}
                  <i class="fab fa-node"></i> Node.js / express
                </Col>
                <Col className="height3rem" md={4}>
                  {" "}
                  <i class="fab fa-react"></i> React
                </Col>
              </Row>
              <Row className="height1">
                <Col className="height3rem" md={4}>
                  MongoDB
                </Col>
                <Col className="height3rem" md={4}>
                  {" "}
                  PostgreSQL
                </Col>
                <Col className="height3rem" md={4}>
                  REST API
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="sample_project_start  container  ">
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
              <Col data-aos="fade-right" md={6} className="">
                <a
                  href="https://www.onlineshopsample.ca"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={sample} alt="" />
                </a>
              </Col>
              <Col data-aos="fade-left" md={6} className="">
                <h5>E-commerce Website</h5>
                <h6>Technologies:</h6>
                <Row className="justify-content-md-center">React</Row>
                <Row className="justify-content-md-center">Django (Python)</Row>
                <Row className="justify-content-md-center">PostgreSQL</Row>
                <Row>
                  <div className="spacer5rem"></div>
                  <Col>
                    <a
                      href="https://www.onlineshopsample.ca/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button variant="warning"> Website</Button>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://github.com/Ross-Ghazi/eCommerce-React-Django"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button variant="warning"> GitHub Link</Button>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <div className="height6rem"></div>
      <section className="container width ">
        <div className="text   samle_project">
          <Container className=" height100  ">
            <Row className="height100  width100 ">
              <Col data-aos="fade-right" md={6} className="">
                <a
                  href="https://e-commerce-react-nodejs.herokuapp.com/#/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={sample2} alt="" />
                </a>
              </Col>
              <Col data-aos="fade-left" md={6} className="">
                <h5>E-commerce Website</h5>
                <h6>
                  Same frontend as above project but different backend and
                  database
                </h6>
                <h6>Technologies:</h6>
                <Row className="justify-content-md-center">React</Row>
                <Row className="justify-content-md-center">Node.js</Row>
                <Row className="justify-content-md-center">MongoDb</Row>
                <Row>
                  <div className="spacer5rem"></div>
                  <Col>
                    <a
                      href="https://e-commerce-react-nodejs.herokuapp.com/#/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button variant="warning"> Website</Button>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://github.com/Ross-Ghazi/eCommerce-React-Nodejs"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button variant="warning"> GitHub Link</Button>
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
