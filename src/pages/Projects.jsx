import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import globaleat from "../assets/projects/globaleat.png";
import cardio from "../assets/projects/cardio.png";
import remainderTheorem from "../assets/projects/remainder-theorem.png";
import warehouseSimulation from "../assets/projects/warehouse-simulation.png";
import mnist from "../assets/projects/mnist.png";
import hospitalManagement from "../assets/projects/hospital-management-java.png";
import restaurantManagementDb from "../assets/projects/restaurant-management-db.png";
import cpuMonitoring from "../assets/projects/cpu-monitoring.png";
import simpleOperations from "../assets/projects/simple-operations.png";
import studentCourseManagement from "../assets/projects/student-course-management.png";
import studentLinkedList from "../assets/projects/student-linked-list.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remainderTheorem}
              isBlog={false}
              title="Chinese Remainder Theorem"
              description="A minimal command-line program that reads three remainders and three moduli from standard input and computes a solution to the corresponding system of congruences (modulo the product of the moduli)."
              ghLink="https://github.com/MK-0406/Chinese_Remainder_Theorem.git"
              demoLink="https://onlinegdb.com/zcHwXMmH1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warehouseSimulation}
              isBlog={false}
              title="Warehouse Simulation"
              description="A small, single-file concurrency simulation that models a warehouse receiving trailers, performing security checks, unloading containers into loading bays, and moving those containers into storage with forklifts."
              ghLink="https://github.com/MK-0406/Warehouse_Simulation.git"
              demoLink="https://onlinegdb.com/cdLHVt7QB"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mnist}
              isBlog={false}
              title="MNIST Digit Classification"
              description="A Jupyter Notebook for classifying MNIST handwritten digits and evaluating model performance with common machine learning metrics and visualizations."
              ghLink="https://github.com/MK-0406/MNIST-Digit-Classification.git"
              demoLink="https://colab.research.google.com/drive/1_5QiXmAeciktFxoG9xPDDZg8cntztEfl?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospitalManagement}
              isBlog={false}
              title="Hospital Management System"
              description="Simple Java demo of hospital roles and entities."
              ghLink="https://github.com/MK-0406/Hospital_Management_System.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurantManagementDb}
              isBlog={false}
              title="Restaurant Management System"
              description="A relational database schema and sample data for a restaurant management system, implemented for Oracle Database using SQL and PL/SQL. It models customers, staff, branches, menu items, orders, payments, and operational workflows, and provides stored procedures/functions for common actions."
              ghLink="https://github.com/MK-0406/Restaurant_Management_System.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cpuMonitoring}
              isBlog={false}
              title="CPU Resource Monitoring Program"
              description="A simple Bash-based utility that logs the highest CPU-consuming process on your system at a fixed interval. Each sample records the current time, the process name, and its %CPU into a CSV file."
              ghLink="https://github.com/MK-0406/CPU_Resource_Monitoring_Program.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simpleOperations}
              isBlog={false}
              title="Simple Operations using Assembly"
              description="MIPS assembly project for the ICOA assignment. This repository contains MIPS source you can run with MIPS simulators such as QtSpim."
              ghLink="https://github.com/MK-0406/Simple_Operations_using_Assembly.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentCourseManagement}
              isBlog={false}
              title="Student & Course Management System"
              description="A small command-line application to manage students, courses, assessments, and grades using simple text files as storage."
              ghLink="https://github.com/MK-0406/Student_and_Course_Management_System_py.git"
              demoLink="https://onlinegdb.com/4DaH0fiuc"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentLinkedList}
              isBlog={false}
              title="Student Management System using Linked List"
              description="Simple console application implementing a student records management system using singly linked lists in C++."
              ghLink="https://github.com/MK-0406/Student_Records_Management_System_using_Linked_List_cpp.git"
              demoLink="https://onlinegdb.com/I5ikk5W5y"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects