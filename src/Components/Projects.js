import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import projImg1 from '../Assets/img/image1_PFE.png';
import projImg2 from '../Assets/img/image2_PERF.png';
import { ProjectCard } from './ProjectCard'; // Ensure this path is correct

export const Projects = () => {
  const projects = [
    {
      title: "Courses Online Project",
      description: "Web Development",
      imgUrl: projImg1
    },
    {
      title: "Product E-commerce",
      description: "Web Development",
      imgUrl: projImg2
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Welcome to my projects section! Here, you’ll find a showcase of my work in web development, graphic design, and video editing. Each project reflects my passion for creating impactful digital experiences and my commitment to excellence.</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">DEV WEB</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Graphic Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Video Editing</Nav.Link>
                </Nav.Item>
             
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project}></ProjectCard>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project}></ProjectCard>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project}></ProjectCard>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
