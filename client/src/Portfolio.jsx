import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaFileCode,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import htmllogo from "./images/htmllogo.png";
import cssImg from "./images/css.png";
import javascriptImg from "./images/javascript.webp";
import reactImg from "./images/react.webp";
import nodejsImg from "./images/nodejs.webp";
import javaImg from "./images/java.webp";
import netbeansImg from "./images/netbeans.jpeg";
import mongodbImg from "./images/mongodb.png";
import gitImg from "./images/git.webp";
import githubImg from "./images/github.webp";
import windowsImg from "./images/windows.webp";
import vscodeImg from "./images/vscode.webp";
import cImg from "./images/c.webp";
import cppImg from "./images/cpp.webp";
import postmanImg from "./images/postman.png";

const styles = {
  container: {
    backgroundColor: "#343a40",
    color: "#ffffff",
    padding: "5rem 0",
    overflowX: "hidden",
  },
  heroSection: {
    backgroundImage: "url(path/to/hero-background.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffff",
    padding: "10rem 0",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
  },
  techList: {
    listStyleType: "none",
    padding: "0",
    margin: "0 0 1rem 0",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  techItem: {
    backgroundColor: "#2a2a2a",
    color: "#f0f0f0",
    borderRadius: "0.5rem",
    padding: "0.25rem 0.75rem",
    fontSize: "0.875rem",
  },
  sectionTitle: {
    marginBottom: "2rem",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ffffff",
  },
  skillCard: {
    transition:
      "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#495057",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#ffffff",
    width: "120px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  skillCardHover: {
    transform: "scale(1.1)",
    backgroundColor: "#6c757d",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  },
  skillImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  sectionCard: {
    backgroundColor: "#495057",
    color: "#ffffff",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "2rem",
    marginBottom: "2rem",
  },
  aboutMeSection: {
    maxWidth: "700px",
    margin: "auto",
    padding: "2rem",
    backgroundColor: "#495057",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  projectSection: {
    padding: "2rem",
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardImage: {
    height: "200px",
    objectFit: "cover",
    borderRadius: "0.5rem",
  },
  projectButton: {
    margin: "0.5rem",
  },
  buttonPrimary: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  buttonSecondary: {
    backgroundColor: "#6c757d",
    borderColor: "#6c757d",
  },
};
const footerStyles = {
  container: {
    backgroundColor: "#212529",
    color: "#ffffff",
    padding: "2rem 0",
    textAlign: "center",
  },
  socialIcons: {
    fontSize: "1.5rem",
    margin: "0 10px",
    color: "#ffffff",
    transition: "color 0.3s",
  },
  socialIconsHover: {
    color: "#17a2b8",
  },
  footerText: {
    margin: "1rem 0",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#17a2b8",
  },
};

const projects = [
  {
    title: "Real Estate Management System",
    description:
      "A comprehensive Real Estate Management System that allows users to list, search, and manage property listings. Built with React, Node.js, Express, and MongoDB.",
    link: "https://github.com/your-repo/real-estate-management-system",
    gitLink: "https://github.com/harshit14012006/projectrealestate",
    buttonColor: "#28a745",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Static IT Website Layout",
    description:
      "A modern and responsive static website layout designed for an IT company. Built using React and Tailwind CSS with a focus on clean design and smooth user experience.",
    link: "https://it-website-layout-static.vercel.app/",
    gitLink: "https://github.com/harshit14012006/ItWebsiteLayoutStatic",
    buttonColor: "#28a745",
    technologies: ["React", "Tailwind CSS"],
  },
];

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <Container fluid style={styles.container}>
        {/* Hero Section */}
        <Row style={styles.heroSection}>
          <Col style={{ textAlign: "center" }}>
            <h1 className="display-4">Harshit Singla</h1>
            <p className="lead">
              Web Developer | Frontend & Backend
              <br />
              <span style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                MERN Stack Developer
              </span>
            </p>

            {/* Logo and Social Links */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="https://github.com/harshit14012006"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginRight: "15px",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#f5f5f5",
                  }}
                >
                  <FaGithub
                    size={20}
                    style={{ marginRight: "5px", color: "#4078c0" }}
                  />
                  GitHub
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#0077b5",
                  }}
                >
                  <FaLinkedin size={20} style={{ marginRight: "5px" }} />
                  LinkedIn
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* About Me Section */}
        <Row className="mb-5" data-aos="fade-up">
          <Col xs={12} style={styles.aboutMeSection}>
            <h2 style={styles.sectionTitle}>About Me</h2>
            <Card
              className="bg-dark text-light mx-auto"
              style={styles.sectionCard}
            >
              <Card.Body>
                <Card.Text>
                  I am a passionate web developer with a strong foundation in
                  both frontend and backend technologies. My expertise lies in
                  crafting seamless user experiences, and I am always eager to
                  learn new tools and techniques to enhance my skills. I believe
                  in clean, maintainable code and strive to follow best
                  practices in all my projects. Let's connect and build
                  something great together!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 style={styles.sectionTitle}>Skills</h2>
            <Row>
              {[
                { image: htmllogo, label: "HTML" },
                { image: cssImg, label: "CSS" },
                { image: javascriptImg, label: "JavaScript" },
                { image: reactImg, label: "ReactJS" },
                { image: nodejsImg, label: "Node.js" },
                { image: javaImg, label: "Java" },
                { image: netbeansImg, label: "NetBeans IDE" },
                { image: mongodbImg, label: "MongoDB" },
                { image: gitImg, label: "Git" },
                { image: githubImg, label: "GitHub" },
                { image: windowsImg, label: "Windows" },
                { image: vscodeImg, label: "VS Code" },
                { image: cImg, label: "C" },
                { image: cppImg, label: "C++" },
                { image: postmanImg, label: "Postman" },
              ].map((skill, index) => (
                <Col
                  xs={4}
                  sm={3}
                  md={2}
                  lg={2}
                  className="mb-4 d-flex justify-content-center"
                  key={index}
                >
                  <motion.div
                    style={styles.skillCard}
                    whileHover={styles.skillCardHover}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="skill-card"
                  >
                    <img
                      src={skill.image}
                      alt={skill.label}
                      style={styles.skillImage}
                    />
                    <p className="mt-2">{skill.label}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Projects section */}
        <Row className="mb-5 text-center" data-aos="fade-up">
          <Col style={styles.projectSection}>
            <h2 style={styles.sectionTitle}>Projects</h2>
            <Row className="text-center">
              {projects.map((project, index) => (
                <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
                  <Card className="bg-dark text-light">
                    {/* Removed the Card.Img to eliminate the picture */}
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>

                      {/* Technologies List */}
                      <ul style={styles.techList}>
                        {project.technologies.map((tech, i) => (
                          <li key={i} style={styles.techItem}>
                            {tech}
                          </li>
                        ))}
                      </ul>

                      <Row className="text-center">
                        <Col>
                          <Button
                            variant="primary"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-2"
                            style={{
                              backgroundColor: project.buttonColor,
                              borderColor: project.buttonColor,
                              transition:
                                "background-color 0.3s, border-color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#218838";
                              e.currentTarget.style.borderColor = "#218838";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                project.buttonColor;
                              e.currentTarget.style.borderColor =
                                project.buttonColor;
                            }}
                          >
                            <FaExternalLinkAlt /> View Project
                          </Button>
                          <Button
                            variant="secondary"
                            href={project.gitLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-2"
                            style={{
                              backgroundColor: "#6c757d",
                              borderColor: "#6c757d",
                              transition:
                                "background-color 0.3s, border-color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#5a6268";
                              e.currentTarget.style.borderColor = "#5a6268";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#6c757d";
                              e.currentTarget.style.borderColor = "#6c757d";
                            }}
                          >
                            <FaGithub /> View Git
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="mb-58 text-center" data-aos="fade-up">
          <Col style={styles.projectSection}>
            <h2 style={styles.sectionTitle}>Experience</h2>
            <Row className="justify-content-center">
              {[
                {
                  title: "Learning and Development Journey",
                  company: "Self-Learning Projects",
                  description:
                    "Engaged in continuous learning to develop a strong foundation in web development. Created and maintained projects using React and Node.js. Focused on building scalable, efficient, and user-friendly web applications.",
                  timeSpan: "2023 July - Present",
                },
              ].map((experience, index) => (
                <Col xs={12} md={8} className="mb-4" key={index}>
                  <Card
                    className="bg-dark text-light"
                    style={styles.sectionCard}
                  >
                    <Card.Body className="d-flex flex-column flex-md-row align-items-center">
                      <FaFileCode
                        size={50}
                        style={{ marginRight: "1rem", color: "#007bff" }}
                      />
                      <div>
                        <Card.Title
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        >
                          {experience.title}
                        </Card.Title>
                        <Card.Subtitle
                          className="mb-2"
                          style={{ color: "#6c757d", fontStyle: "italic" }}
                        >
                          {experience.company}
                        </Card.Subtitle>
                        <Card.Text
                          style={{ fontSize: "1rem", marginBottom: "0.5rem" }}
                        >
                          {experience.description}
                        </Card.Text>
                        <Card.Text>
                          <small style={{ color: "#adb5bd" }}>
                            {experience.timeSpan}
                          </small>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        {/* Contact Section */}
        <Row className="mb-5 text-center" data-aos="fade-up">
          <Col>
            <h2 style={styles.sectionTitle}>Contact</h2>
            <p>
              If you are interested in collaborating or just want to say hi,
              feel free to reach out to me through any of the platforms below.
            </p>
            <Button
              href="mailto:harshitemail2006@gmail.com"
              style={{
                backgroundColor: "#28a745",
                borderColor: "#28a745",
                transition: "background-color 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#218838";
                e.currentTarget.style.borderColor = "#218838";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#28a745";
                e.currentTarget.style.borderColor = "#28a745";
              }}
            >
              Email Me
            </Button>
          </Col>
        </Row>
      </Container>
      <Container fluid style={footerStyles.container}>
        <Row>
          <Col>
            <h5 style={footerStyles.footerText}>Connect with Me</h5>
            <div>
              <a
                href="https://github.com/harshit14012006"
                target="_blank"
                rel="noopener noreferrer"
                style={footerStyles.link}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    footerStyles.socialIconsHover.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = footerStyles.socialIcons.color)
                }
              >
                <FaGithub style={footerStyles.socialIcons} />
              </a>
              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                style={footerStyles.link}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    footerStyles.socialIconsHover.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = footerStyles.socialIcons.color)
                }
              >
                <FaLinkedin style={footerStyles.socialIcons} />
              </Link>
              <a
                href="mailto:harshitemail2006@gmail.com"
                style={footerStyles.link}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    footerStyles.socialIconsHover.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = footerStyles.socialIcons.color)
                }
              >
                <FaEnvelope style={footerStyles.socialIcons} />
              </a>
              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                style={footerStyles.link}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    footerStyles.socialIconsHover.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = footerStyles.socialIcons.color)
                }
              >
                <FaFacebook style={footerStyles.socialIcons} />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={footerStyles.footerText}>
              &copy; {new Date().getFullYear()} Harshit Singla. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
