import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import globaleat from "../assets/projects/globaleat.png";

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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects