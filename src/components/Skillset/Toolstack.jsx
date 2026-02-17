import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAndroidstudio 
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";


const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio  />
      </Col>
    </Row>
  );
}

export default Toolstack;
