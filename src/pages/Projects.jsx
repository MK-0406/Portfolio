import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import globaleat from "../assets/projects/globaleat.png";
import cardio from "../assets/projects/cardio.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={globaleat}
              isBlog={false}
              title="Food Website (GlobalEat)"
              description="A small static multi-page website project containing content pages for cuisine, country information, a blog, contact page, and shared header/footer components. Built with plain HTML, CSS and a little JavaScript."
              ghLink="https://github.com/MK-0406/Food_Website_GlobalEat"
              demoLink="https://globaleat.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cardio}
              isBlog={false}
              title="Cardiovascular Risk Prediction"
              description="A Jupyter notebook that demonstrates building and evaluating models to predict cardiovascular risk using the provided dataset."
              ghLink="https://github.com/MK-0406/Cardiovascular_Risk_Prediction.git"
              demoLink="https://colab.research.google.com/drive/17ujh34a_xm8BrzaAny3eBhkUSq3HzzUo?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects