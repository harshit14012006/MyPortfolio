import React, { useState } from "react";
import clang from "./images/clang.png";
import cpluslang from "./images/cpluslang.png";
import java from "./images/java.png";
import reactjs from "./images/reactjs.png";
import tailwindcss from "./images/tailwindcss.png";
import bootstrap from "./images/bootstrap.png";
import netbeans from "./images/netbeans.png";
import github from "./images/github.png";
import mongodb from "./images/mongodb.png";
import html5 from "./images/html5.png";
import css from "./images/css.png";
import javascript from "./images/javascript.png";
import nodejs from "./images/nodejs.png";
import canva from "./images/canva.png";
import slack from './images/slack.png';
import wrike from './images/wrike.png'
const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle navbar visibility

  const projects = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio site to showcase my skills.",
      img: "portfolio.jpg",
    },
    {
      name: "E-Commerce App",
      description:
        "A fully functional e-commerce platform with payment integration.",
      img: "ecommerce.jpg",
    },
    {
      name: "Blog Platform",
      description:
        "A blog site with a custom CMS for seamless content management.",
      img: "blog.jpg",
    },
  ];

  const [scrollAmount, setScrollAmount] = useState(0);
  const cardWidth = 320; // Width of each card + margin
  const cardCount = 5; // Total number of cards in the carousel (you can adjust this)

  const handlePrevClick = () => {
    setScrollAmount((prevScroll) => prevScroll - cardWidth);
  };

  const handleNextClick = () => {
    setScrollAmount((prevScroll) => prevScroll + cardWidth);
  };

  return (
    <div className="font-sans text-gray-100">
      {/* Glassmorphism Floating Navbar */}
      <nav className="fixed z-50 px-6 py-3 transform -translate-x-1/2 rounded-full shadow-lg bottom-4 left-1/2 bg-white/10 backdrop-blur-lg md:hidden">
        <ul className="flex gap-6 text-white">
          {[
            { href: "#home", icon: "fa-home", label: "Home" },
            { href: "#skills", icon: "fa-cogs", label: "Skills" },
            { href: "#projects", icon: "fa-briefcase", label: "Projects" },
            { href: "#contact", icon: "fa-envelope", label: "Contact" },
          ].map((item, index) => (
            <li key={index} className="text-center">
              <a
                href={item.href}
                className="flex flex-col items-center text-xs transition duration-300 hover:text-indigo-400"
              >
                <i className={`fa ${item.icon} text-2xl`}></i>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar for Desktop and Mobile Navbar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 flex flex-col items-center py-8 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-20 z-40`}
      >
        {[
          { href: "#home", icon: "fa-home", label: "HOME" },
          { href: "#skills", icon: "fa-cogs", label: "SKILLS" },
          { href: "#projects", icon: "fa-briefcase", label: "PROJECTS" },
          { href: "#contact", icon: "fa-envelope", label: "CONTACT" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="w-full p-2 mb-6 text-center transition rounded-md hover:bg-gray-700"
            onClick={() => setIsNavOpen(false)} // Close navbar on link click
          >
            <i
              className={`fa ${item.icon} text-xl mb-1`}
              aria-hidden="true"
            ></i>
            <p className="text-xs">{item.label}</p>
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <div className="md:ml-20">
        {/* HOME Section */}
        <header
          id="home"
          className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-gradient-to-b from-gray-900 to-gray-800"
        >
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Hello, I'm <span className="text-indigo-400">Harshit Singla</span>
              .
            </h1>
            <p className="text-xl font-light text-gray-300 md:text-2xl">
              MERN Stack Developer & Digital Marketing Designer
            </p>
            <p className="text-lg text-gray-400 md:text-xl">
              Crafting visually stunning web applications and impactful
              marketing designs to create seamless digital experiences.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="#projects"
              className="px-8 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 text-sm font-semibold text-indigo-600 transition duration-300 ease-in-out border border-indigo-600 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12 text-indigo-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:text-indigo-300"
            >
              <i className="text-2xl fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-singla-b91a6233a/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:text-indigo-300"
            >
              <i className="text-2xl fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:text-indigo-300"
            >
              <i className="text-2xl fab fa-twitter"></i>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-400">3</p>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-400">5+</p>
              <p className="text-sm text-gray-400">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-400">10+</p>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-400">100%</p>
              <p className="text-sm text-gray-400">Satisfaction</p>
            </div>
          </div>
        </header>

        {/* SKILLS Section */}
        <section
          id="skills"
          className="px-8 py-16 text-center bg-gradient-to-b from-gray-800 to-black"
        >
          <h2 className="text-4xl font-bold text-indigo-400">Skills</h2>
          <p className="mt-4 text-lg text-gray-400">
            A showcase of my technical expertise and tools.
          </p>
          <div className="grid grid-cols-1 gap-12 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
            {/* Skill Card Template */}
            {[
              {
                title: "Programming Languages",
                items: [
                  { img: clang, name: "C" },
                  { img: cpluslang, name: "C++" },
                  { img: java, name: "Java" },
                ],
              },
              {
                title: "Frameworks & Libraries",
                items: [
                  { img: reactjs, name: "ReactJS" },
                  { img: tailwindcss, name: "Tailwind CSS" },
                  { img: bootstrap, name: "Bootstrap" },
                  { img: wrike, name: "Wrike" }, // Added Wrike here
                ],
              },
              {
                title: "Tools & Technologies",
                items: [
                  { img: netbeans, name: "NetBeans" },
                  { img: github, name: "GitHub" },
                  { img: mongodb, name: "MongoDB" },
                  { img: canva, name: "Canva" },
                  { img: slack, name: "Slack" }, // Added Slack here
                ],
              },
              {
                title: "Web Development",
                items: [
                  { img: html5, name: "HTML" },
                  { img: css, name: "CSS" },
                  { img: javascript, name: "JavaScript" },
                  { img: nodejs, name: "NodeJS" },
                ],
              },
            ].map((skillCategory, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-lg shadow-md">
                <h3 className="mb-6 text-2xl font-semibold text-white">
                  {skillCategory.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {skillCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center"
                    >
                      <img
                        src={item.img}
                        alt={`${item.name}.png`}
                        className="object-contain w-12 h-12 mb-3"
                      />
                      <p className="font-medium text-gray-300 text-md">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS Section */}
        <section id="projects" className="px-6 py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-white">My Projects</h2>
            <div className="flex flex-col items-center overflow-hidden bg-gray-800 rounded-lg shadow-lg md:flex-row">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project Thumbnail"
                className="w-full md:w-1/3"
              />
              <div className="flex flex-col justify-between p-6">
                <h3 className="text-xl font-semibold text-white">
                  Project Title
                </h3>
                <p className="mt-2 text-gray-400">
                  Brief description of the project goes here. Highlight the main
                  features and what makes this project unique.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-500 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
