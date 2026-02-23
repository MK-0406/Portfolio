import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiJava,
  DiCss3,
} from "react-icons/di";
import {
  SiHtml5,
  SiCplusplus,
  SiFirebase,
  SiDart,
  SiFlutter,
  SiFastapi  
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>Dart</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>Flutter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>FastAPI</p>
      </Col>
    </Row>
  );
}

export default Techstack;
