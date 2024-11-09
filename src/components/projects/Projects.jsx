import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../../assets/img/firmos.png";
import projImg2 from "../../assets/img/umroh.png";
import projImg3 from "../../assets/img/gajiapp.png";
import projImg4 from "../../assets/img/logspk.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "CUSTOMER ARCHIVE AND MONITOR ORDER DELIVERY SYSTEM",
      description: "CV FIRMOS",
      imgUrl: projImg1,
    },
    {
      title: "UMROH AND TRAVELING",
      description: "PT TRANS RETAIL INDONESIA",
      imgUrl: projImg2,
    },
  ];

  const projects2 = [
    {
      title: "SALARY SYSTEM",
      description: "PT COLUMBUS",
      imgUrl: projImg3,
    },
    {
      title: "DECISION SUPPORT SYSTEMS",
      description: "PT COLUMBUS",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p
                          style={{
                            textAlign: "justify",
                            width: "75%",
                          }}
                        >
                          Here, I showcase some of the work I have developed
                          throughout my career as a web developer. Each project
                          represents my dedication, creativity, and continuous
                          effort to learn and adapt to the latest technologies.
                          I believe that every project reflects my ability to
                          solve problems, design innovative solutions, and
                          collaborate effectively in a team. <br></br> <br></br>
                          You can visit my github on: https://github.com/dekaroyanto
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
