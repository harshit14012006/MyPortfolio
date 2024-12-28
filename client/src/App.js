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
import canva from './images/canva.png'
const App = () => {
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
    <div className=" text-gray-100 font-sans">
      {/* Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-20 bg-gray-800 flex flex-col items-center py-8 shadow-lg">
        {[
          { href: "#home", icon: "fa-home", label: "HOME" },
          { href: "#skills", icon: "fa-cogs", label: "SKILLS" },
          { href: "#projects", icon: "fa-briefcase", label: "PROJECTS" },
          { href: "#contact", icon: "fa-envelope", label: "CONTACT" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-center mb-6 w-full hover:bg-gray-700 rounded-md p-2 transition"
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
      <div className="ml-20">
        {/* HOME Section */}
        <header
          id="home"
          className="flex flex-col items-center text-center py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
        >
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Hello, I'm <span className="text-indigo-400">Harshit Singla</span>
              .
            </h1>
            <p className="text-lg md:text-xl mt-6 font-light text-gray-300">
              Passionate about crafting visually stunning and user-friendly web
              applications.
            </p>
            <p className="text-md md:text-lg mt-4 text-gray-400">
              Combining creativity with functionality to deliver impactful
              solutions for real-world challenges.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full  shadow-md hover:bg-indigo-500 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-10 text-indigo-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-400">3</p>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-400">5+</p>
              <p className="text-sm text-gray-400">Years of Experience</p>
            </div>
          </div>
        </header>

        {/* SKILLS Section */}
        <section
          id="skills"
          className="px-8 py-16 bg-gradient-to-b from-gray-800 to-black text-center"
        >
          <h2 className="text-4xl font-bold text-indigo-400">Skills</h2>
          <p className="text-gray-400 mt-4 text-lg">
            A showcase of my technical expertise and tools.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
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
                ],
              },
              {
                title: "Tools & Technologies",
                items: [
                  { img: netbeans, name: "NetBeans" },
                  { img: github, name: "GitHub" },
                  { img: mongodb, name: "MongoDB" },
                  { img: canva, name: "Canva" }, // Added Canva
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
                <h3 className="text-2xl font-semibold text-white mb-6">
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
                        className="h-12 w-12 object-contain mb-3"
                      />
                      <p className="text-md font-medium text-gray-300">
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
        <section id="projects" class="px-6 py-20 bg-gray-900">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-white mb-8">My Projects</h2>
            <div class="bg-gray-800 flex flex-col md:flex-row items-center rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project Thumbnail"
                class="w-full md:w-1/3"
              />
              <div class="p-6 flex flex-col justify-between">
                <h3 class="text-xl font-semibold text-white">Project Title</h3>
                <p class="text-gray-400 mt-2">
                  Brief description of the project goes here. Highlight the main
                  features and what makes this project unique.
                </p>
                <div class="mt-4">
                  <a
                    href="#"
                    class="text-sm font-medium text-indigo-500 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT Section */}
        <section id="contact" className="px-8 py-16 bg-gray-800 text-center">
          <h2 className="text-4xl font-semibold text-indigo-400">Contact Me</h2>
          <form
            action="#"
            method="POST"
            className="mt-8 max-w-md mx-auto space-y-4"
          >
            {[
              { placeholder: "Name", type: "text" },
              { placeholder: "Email", type: "email" },
              { placeholder: "Subject", type: "text" },
              { placeholder: "Message", type: "textarea" },
            ].map(({ placeholder, type }, index) =>
              type === "textarea" ? (
                <textarea
                  key={index}
                  placeholder={placeholder}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
                  rows={5}
                  required
                />
              ) : (
                <input
                  key={index}
                  type={type}
                  placeholder={placeholder}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
                  required
                />
              )
            )}
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default App;
