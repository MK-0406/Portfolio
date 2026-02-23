import { React } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiAndroidstudio,
  SiGooglecolab,
  SiGithub 
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";


const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio  />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>Visual Studio 2022</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio  />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab  />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>Google Colab</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub  />
        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>GitHub</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
