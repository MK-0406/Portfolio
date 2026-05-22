import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import attendance1 from "../assets/projects/attendance-1.png";
import attendance2 from "../assets/projects/attendance-2.png";
import attendance3 from "../assets/projects/attendance-3.png";
import attendance4 from "../assets/projects/attendance-4.png";
import attendance5 from "../assets/projects/attendance-5.png";
import globaleat1 from "../assets/projects/globaleat-1.png";
import globaleat2 from "../assets/projects/globaleat-2.png";
import globaleat3 from "../assets/projects/globaleat-3.png";
import globaleat4 from "../assets/projects/globaleat-4.png";
import globaleat5 from "../assets/projects/globaleat-5.png";
import globaleat6 from "../assets/projects/globaleat-6.png";
import globaleat7 from "../assets/projects/globaleat-7.png";
import cardio from "../assets/projects/cardio.png";
import remainderTheorem from "../assets/projects/remainder-theorem.png";
import warehouseSimulation from "../assets/projects/warehouse-simulation.png";
import mnist from "../assets/projects/mnist.png";
import hospital1 from "../assets/projects/hospital-1.png";
import hospital2 from "../assets/projects/hospital-2.png";
import hospital3 from "../assets/projects/hospital-3.png";
import hospital4 from "../assets/projects/hospital-4.png";
import hospital5 from "../assets/projects/hospital-5.png";
import hospital6 from "../assets/projects/hospital-6.png";
import hospital7 from "../assets/projects/hospital-7.png";
import hospital8 from "../assets/projects/hospital-8.png";
import hospital9 from "../assets/projects/hospital-9.png";
import hospital10 from "../assets/projects/hospital-10.png";
import hospital11 from "../assets/projects/hospital-11.png";
import hospital12 from "../assets/projects/hospital-12.png";
import hospital13 from "../assets/projects/hospital-13.png";
import hospital14 from "../assets/projects/hospital-14.png";
import hospital15 from "../assets/projects/hospital-15.png";
import hospital16 from "../assets/projects/hospital-16.png";
import hospital17 from "../assets/projects/hospital-17.png";
import hospital18 from "../assets/projects/hospital-18.png";
import hospital19 from "../assets/projects/hospital-19.png";
import hospital20 from "../assets/projects/hospital-20.png";
import hospital21 from "../assets/projects/hospital-21.png";
import hospital22 from "../assets/projects/hospital-22.png";
import hospital23 from "../assets/projects/hospital-23.png";
import hospital24 from "../assets/projects/hospital-24.png";
import hospital25 from "../assets/projects/hospital-25.png";
import hospital26 from "../assets/projects/hospital-26.png";
import restaurantManagementDb from "../assets/projects/restaurant-management-db.png";
import cpuMonitoring from "../assets/projects/cpu-monitoring.png";
import simpleOperations from "../assets/projects/simple-operations.png";
import studentCourseManagement from "../assets/projects/student-course-management.png";
import studentLinkedList from "../assets/projects/student-linked-list.png";
import studentBinaryTree from "../assets/projects/student-binary-tree.png";
import restaurantOrdering from "../assets/projects/restaurant-ordering.png";
import memorise1 from "../assets/projects/memorise-1.png";
import memorise2 from "../assets/projects/memorise-2.png";
import memorise3 from "../assets/projects/memorise-3.png";
import memorise4 from "../assets/projects/memorise-4.png";
import memorise5 from "../assets/projects/memorise-5.png";
import memorise6 from "../assets/projects/memorise-6.png";
import navigation1 from "../assets/projects/navigation-1.png";
import navigation2 from "../assets/projects/navigation-2.png";
import navigation3 from "../assets/projects/navigation-3.png";
import navigation4 from "../assets/projects/navigation-4.png";
import navigation5 from "../assets/projects/navigation-5.png";
import navigation6 from "../assets/projects/navigation-6.png";
import luminote1 from "../assets/projects/luminote-1.png";
import luminote2 from "../assets/projects/luminote-2.png";
import luminote3 from "../assets/projects/luminote-3.png";
import luminote4 from "../assets/projects/luminote-4.png";
import snapaiMac from "../assets/projects/snapai-mac.png";
import snapaiWindows from "../assets/projects/snapai-windows.png";
import foodwise1 from "../assets/projects/foodwise-1.png";
import foodwise2 from "../assets/projects/foodwise-2.png";
import foodwise3 from "../assets/projects/foodwise-3.png";
import foodwise4 from "../assets/projects/foodwise-4.png";
import foodwise5 from "../assets/projects/foodwise-5.png";
import foodwise6 from "../assets/projects/foodwise-6.png";
import foodwise7 from "../assets/projects/foodwise-7.png";
import foodwise8 from "../assets/projects/foodwise-8.png";
import foodwise9 from "../assets/projects/foodwise-9.png";
import foodwise10 from "../assets/projects/foodwise-10.png";
import foodwise11 from "../assets/projects/foodwise-11.png";
import foodwise12 from "../assets/projects/foodwise-12.png";
import foodwise13 from "../assets/projects/foodwise-13.png";
import portfolio1 from "../assets/projects/portfolio-1.png";
import portfolio2 from "../assets/projects/portfolio-2.png";
import portfolio3 from "../assets/projects/portfolio-3.png";
import portfolio4 from "../assets/projects/portfolio-4.png";
import portfolio5 from "../assets/projects/portfolio-5.png";
import portfolio6 from "../assets/projects/portfolio-6.png";
import mealRecommendationAPI from "../assets/projects/meal-recommendation-api.png";

const projects = [
  {
    images: [foodwise1, foodwise2, foodwise3, foodwise4, foodwise5, foodwise6, foodwise7, foodwise8, foodwise9, foodwise10, foodwise11, foodwise12, foodwise13],
    isBlog: false,
    title: "Meal Logging and Nutrient Tracking Application (FoodWise)",
    description:
      "FoodWise is a modern, AI-powered meal logging and nutritional tracking application designed to help users achieve their health goals through personalized insights and community support.",
    skills: "Full-Stack Development, AI Features, Product Design",
    ghLink: "https://github.com/MK-0406/meal_logging.git",
  },
  {
    imgPath: mealRecommendationAPI,
    isBlog: false,
    title: "Meal Recommendation Model API",
    description:
      "Simple FastAPI service for meal recommendation inference using a pre-trained scikit-learn model.",
    skills: "Python, FastAPI, Machine Learning, API Development",
    ghLink: "https://github.com/MK-0406/meal_recommender_model.git",
  },
  {
    images: [attendance1, attendance2, attendance3, attendance4, attendance5],
    isBlog: false,
    title: "University Student Attendance System using Face Recognition",
    description:
      "A React web application for automated classroom attendance using AWS face recognition services.",
    skills: "React, AWS",
    ghLink: "https://github.com/MK-0406/university-student-attendance-system-using-face-recognition.git",
    demoLink: "https://main.d3savsd531obwl.amplifyapp.com"
  },
  {
    imgPath: snapaiMac,
    isBlog: false,
    title: "SnapAI for Mac",
    description:
      "SnapAI is a lightweight floating panel app for macOS that monitors your screenshots, extracts text using OCR, and sends it to the Gemini 2.5 Flash API to generate intelligent answers.",
    skills: "macOS App Development, OCR, API Integration",
    ghLink: "https://github.com/MK-0406/SnapAI_Mac.git",
  },
  {
    imgPath: snapaiWindows,
    isBlog: false,
    title: "SnapAI for Windows",
    description:
      "SnapAI is a lightweight floating panel app for Windows that monitors your screenshot folder, extracts text using OCR, and sends it to the Gemini 2.5 Flash API to generate intelligent answers.",
    skills: "Windows App Development, OCR, API Integration",
    ghLink: "https://github.com/MK-0406/SnapAI_Windows.git",
  },
  {
    imgPath: mnist,
    isBlog: false,
    title: "MNIST Digit Classification",
    description:
      "A Jupyter Notebook for classifying MNIST handwritten digits and evaluating model performance with common machine learning metrics and visualizations.",
    skills: "Python, Machine Learning, Data Visualization",
    ghLink: "https://github.com/MK-0406/MNIST-Digit-Classification.git",
    demoLink:
      "https://colab.research.google.com/drive/1_5QiXmAeciktFxoG9xPDDZg8cntztEfl?usp=sharing",
  },
  {
    imgPath: cardio,
    isBlog: false,
    title: "Cardiovascular Risk Prediction",
    description:
      "A Jupyter notebook that demonstrates building and evaluating models to predict cardiovascular risk using the provided dataset.",
    skills: "Python, Data Science, Predictive Modeling",
    ghLink: "https://github.com/MK-0406/Cardiovascular_Risk_Prediction.git",
    demoLink:
      "https://colab.research.google.com/drive/17ujh34a_xm8BrzaAny3eBhkUSq3HzzUo?usp=sharing",
  },
  {
    images: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6],
    isBlog: false,
    title: "My Portfolio Website",
    description:
      "A React-based personal portfolio website showcasing profile information, skills, projects, resume, and contact form.",
    skills: "React, Frontend Development, UI Design",
    ghLink: "https://github.com/MK-0406/Portfolio.git",
    demoLink: "https://portfolio-mkwong.vercel.app",
  },
  {
    images: [luminote1, luminote2, luminote3, luminote4],
    isBlog: false,
    title: "LumiNote - A Note-Taking App",
    description:
      "A powerful, feature-rich digital note-taking application inspired by GoodNotes. Built with vanilla JavaScript, HTML, and CSS - no frameworks required.",
    skills: "JavaScript, HTML, CSS, Product UI",
    ghLink: "https://github.com/MK-0406/Notes.git",
    demoLink: "https://mk-0406.github.io/Notes/",
  },
  {
    images: [globaleat1, globaleat2, globaleat3, globaleat4, globaleat5, globaleat6, globaleat7],
    isBlog: false,
    title: "Food Website (GlobalEat)",
    description:
      "A small static multi-page website project containing content pages for cuisine, country information, a blog, contact page, and shared header/footer components. Built with plain HTML, CSS and a little JavaScript.",
    skills: "HTML, CSS, JavaScript, Multi-Page Website",
    ghLink: "https://github.com/MK-0406/Food_Website_GlobalEat",
    demoLink: "https://globaleat.netlify.app/",
  },
  {
    images: [memorise1, memorise2, memorise3, memorise4, memorise5, memorise6],
    isBlog: false,
    title: "Memorising App",
    description: "A website which helps me to memorise during my uni life.",
    skills: "Frontend Development, Learning Tool Design",
    ghLink: "https://github.com/MK-0406/Memorising-App.git",
    demoLink: "https://mk-0406.github.io/Memorising-App/",
  },
  {
    images: [navigation1, navigation2, navigation3, navigation4, navigation5, navigation6],
    isBlog: false,
    title: "Navigation System using Coloured QR Code",
    description:
      "A cross-platform C++ application using OpenCV and ZBar to detect QR codes, map coordinates, and guide users to destinations in real time.",
    skills: "C++, Computer Vision, OpenCV",
    ghLink: "https://github.com/MK-0406/Navigation_System_Using_Coloured_QRCode.git",
  },
  {
    imgPath: warehouseSimulation,
    isBlog: false,
    title: "Warehouse Simulation",
    description:
      "A small, single-file concurrency simulation that models a warehouse receiving trailers, performing security checks, unloading containers into loading bays, and moving those containers into storage with forklifts.",
    skills: "C, Concurrency, Systems Simulation",
    ghLink: "https://github.com/MK-0406/Warehouse_Simulation.git",
    demoLink: "https://onlinegdb.com/cdLHVt7QB",
  },
  {
    imgPath: cpuMonitoring,
    isBlog: false,
    title: "CPU Resource Monitoring Program",
    description:
      "A simple Bash-based utility that logs the highest CPU-consuming process on your system at a fixed interval. Each sample records the current time, the process name, and its %CPU into a CSV file.",
    skills: "Bash Scripting, Linux Monitoring, Automation",
    ghLink: "https://github.com/MK-0406/CPU_Resource_Monitoring_Program.git",
  },
  {
    imgPath: restaurantManagementDb,
    isBlog: false,
    title: "Restaurant Management System",
    description:
      "A relational database schema and sample data for a restaurant management system, implemented for Oracle Database using SQL and PL/SQL. It models customers, staff, branches, menu items, orders, payments, and operational workflows, and provides stored procedures/functions for common actions.",
    skills: "SQL, PL/SQL, Database Design",
    ghLink: "https://github.com/MK-0406/Restaurant_Management_System.git",
  },
  {
    images: [hospital1, hospital2, hospital3, hospital4, hospital5, hospital6, hospital7, hospital8, hospital9, hospital10, hospital11, hospital12, hospital13, hospital14, hospital15, hospital16, hospital17, hospital18, hospital19, hospital20, hospital21, hospital22, hospital23, hospital24, hospital25, hospital26],
    isBlog: false,
    title: "Hospital Management System",
    description: "Simple Java demo of hospital roles and entities.",
    skills: "Java, OOP Fundamentals",
    ghLink: "https://github.com/MK-0406/Hospital_Management_System.git",
  },
  {
    imgPath: studentCourseManagement,
    isBlog: false,
    title: "Student & Course Management System",
    description:
      "A small command-line application to manage students, courses, assessments, and grades using simple text files as storage.",
    skills: "Python, File Handling, CLI Development",
    ghLink:
      "https://github.com/MK-0406/Student_and_Course_Management_System_py.git",
    demoLink: "https://onlinegdb.com/4DaH0fiuc",
  },
  {
    imgPath: restaurantOrdering,
    isBlog: false,
    title: "Restaurant Ordering System",
    description:
      "Simple console-based restaurant ordering system (C++). The program reads menu data from text files and provides a basic interactive ordering flow.",
    skills: "C++, File I/O, CLI Design",
    ghLink: "https://github.com/MK-0406/Restaurant_Ordering_System_cpp.git",
    demoLink: "https://onlinegdb.com/SGhyc1F0r",
  },
  {
    imgPath: studentLinkedList,
    isBlog: false,
    title: "Student Management System using Linked List",
    description:
      "Simple console application implementing a student records management system using singly linked lists in C++.",
    skills: "C++, Data Structures (Linked List)",
    ghLink:
      "https://github.com/MK-0406/Student_Records_Management_System_using_Linked_List_cpp.git",
    demoLink: "https://onlinegdb.com/I5ikk5W5y",
  },
  {
    imgPath: studentBinaryTree,
    isBlog: false,
    title: "Student Management System using Binary Tree",
    description:
      "Simple student records manager implemented using a binary search tree in C++.",
    skills: "C++, Data Structures (Binary Search Tree)",
    ghLink:
      "https://github.com/MK-0406/Student_Records_Management_System_using_Binary_Tree_cpp.git",
    demoLink: "https://onlinegdb.com/jT5xGXMLR-",
  },
  {
    imgPath: remainderTheorem,
    isBlog: false,
    title: "Chinese Remainder Theorem",
    description:
      "A minimal command-line program that reads three remainders and three moduli from standard input and computes a solution to the corresponding system of congruences (modulo the product of the moduli).",
    skills: "C, Number Theory, Algorithm Implementation",
    ghLink: "https://github.com/MK-0406/Chinese_Remainder_Theorem.git",
    demoLink: "https://onlinegdb.com/zcHwXMmH1",
  },
  {
    imgPath: simpleOperations,
    isBlog: false,
    title: "Simple Operations using Assembly",
    description:
      "MIPS assembly project for the ICOA assignment. This repository contains MIPS source you can run with MIPS simulators such as QtSpim.",
    skills: "MIPS Assembly, Low-Level Programming",
    ghLink: "https://github.com/MK-0406/Simple_Operations_using_Assembly.git",
  },
];

const getProjectImages = (project) => {
  if (Array.isArray(project.images) && project.images.length > 0) {
    return project.images;
  }

  return project.imgPath ? [project.imgPath] : [];
};

const Projects = () => {

  const [showGallery, setShowGallery] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const openGallery = (projectIndex, imageIndex = 0) => {
    setActiveProjectIndex(projectIndex);
    setActiveImageIndex(imageIndex);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const activeProject = projects[activeProjectIndex];
  const activeProjectImages = useMemo(
    () => getProjectImages(activeProject),
    [activeProject]
  );

  const showNextImage = useCallback(() => {
    setActiveImageIndex((current) => (current + 1) % activeProjectImages.length);
  }, [activeProjectImages.length]);

  const showPrevImage = useCallback(() => {
    setActiveImageIndex((current) =>
      (current - 1 + activeProjectImages.length) % activeProjectImages.length
    );
  }, [activeProjectImages.length]);

  useEffect(() => {
    if (!showGallery) {
      return undefined;
    }

    const handleKeydown = (event) => {
      if (event.key === "ArrowRight") {
        showNextImage();
      }
      if (event.key === "ArrowLeft") {
        showPrevImage();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [showGallery, showNextImage, showPrevImage]);

  const activeImage = activeProjectImages[activeImageIndex];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects are ordered by skill impact, with advanced AI/full-stack work first.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard
                {...project}
                previewImage={getProjectImages(project)[0]}
                onImageClick={() => openGallery(index)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={showGallery}
        onHide={closeGallery}
        centered
        size="xl"
        contentClassName="project-gallery-modal"
      >
        <Modal.Body className="project-gallery-body">
          <button
            type="button"
            className="gallery-close-btn"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <BsX />
          </button>

          <button
            type="button"
            className="gallery-nav-btn gallery-nav-left"
            onClick={showPrevImage}
            aria-label="Previous image"
          >
            <BsChevronLeft />
          </button>

          <div
            className="gallery-image-wrapper"
            onTouchStart={(event) => setTouchStartX(event.changedTouches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStartX === null) {
                return;
              }

              const touchEndX = event.changedTouches[0].clientX;
              const distance = touchStartX - touchEndX;

              if (Math.abs(distance) > 50) {
                if (distance > 0) {
                  showNextImage();
                } else {
                  showPrevImage();
                }
              }

              setTouchStartX(null);
            }}
          >
            <img
              src={activeImage}
              alt={activeProject?.title || "Project preview"}
              className="gallery-image"
            />
            <p className="gallery-image-title">
              {activeProject?.title} ({activeImageIndex + 1}/{activeProjectImages.length})
            </p>
          </div>

          <button
            type="button"
            className="gallery-nav-btn gallery-nav-right"
            onClick={showNextImage}
            aria-label="Next image"
          >
            <BsChevronRight />
          </button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Projects;
