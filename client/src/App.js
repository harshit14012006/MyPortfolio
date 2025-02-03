import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  ExternalLink,
  Code,
  Star,
} from "lucide-react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import realEstateImage from "./images/realestateimg.png";
import shrisatyaitimg from "./images/shrisatyaitimg.png";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    quote:
      "The React-based UI is incredibly smooth, and the performance is top-notch. I love how scalable it is!",
    author: "Sarah Thompson",
    role: "Frontend Developer",
    rating: 5,
  },
  {
    quote:
      "Integrating Node.js and Express with this framework has been seamless. The backend runs efficiently!",
    author: "Michael Johnson",
    role: "Backend Engineer",
    rating: 4,
  },
  {
    quote:
      "As a DevOps engineer, I appreciate the ease of deployment. The system is well-optimized for CI/CD.",
    author: "Emily Carter",
    role: "DevOps Engineer",
    rating: 5,
  },
  {
    quote:
      "The real-time data processing capabilities with WebSockets are impressive. A great tool for modern web apps!",
    author: "David Kim",
    role: "Full-Stack Developer",
    rating: 4,
  },
  {
    quote:
      "The modularity and component-based structure make development fast and efficient. Highly recommended!",
    author: "Lisa Rodriguez",
    role: "Software Architect",
    rating: 5,
  },
];

const App = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 2.5,
            spacing: 32,
          },
        },
      },
    });

    document
      .getElementById("keen-slider-previous")
      .addEventListener("click", () => keenSlider.prev());
    document
      .getElementById("keen-slider-next")
      .addEventListener("click", () => keenSlider.next());

    return () => keenSlider.destroy();
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle navbar visibility
  const swiperRef = useRef(null);
  const [hoveredLive, setHoveredLive] = useState(false);
  const [hoveredSourceCode, setHoveredSourceCode] = useState(false);
  const projects = [
    {
      title: "Real Estate Catalog",
      description:
        "Designed a web application to showcase property listings with detailed information and search filters, providing a user-friendly and responsive interface for easy property discovery.",
      image: realEstateImage,
      liveLink: "realestatenetlify.netlify.app",
      sourceCode: "https://github.com/harshit14012006/projectrealestate",
      skills: ["React", "Node.js", "Tailwind CSS", "Express.js", "MongoDB"], // Skills Used
    },
    {
      title: "Shri Satya IT Solutions",
      description:
        "Created an elegant portfolio website to showcase technology solutions and services, aimed at capturing client interest and leaving a lasting impression.",
      image: shrisatyaitimg,
      liveLink: "https://shrisatyait.com/",
      sourceCode: "https://github.com/harshit14012006/ItWebsiteLayoutStatic",
      skills: ["React", "Tailwind CSS"], // Skills Used
    },
    // More projects...
  ];

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
              href="https://github.com/harshit14012006"
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
              href="https://instagram.com/h2rshit"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:text-indigo-300"
            >
              <i className="text-2xl fab fa-instagram"></i>
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
          className="px-8 py-16 text-center bg-gradient-to-b from-gray-800 to-gray-900"
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
                ],
              },
              {
                title: "Tools & Technologies",
                items: [
                  { img: netbeans, name: "NetBeans" },
                  { img: github, name: "GitHub" },
                  { img: mongodb, name: "MongoDB" },
                  { img: canva, name: "Canva" },
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
        <section
          id="projects"
          className="px-6 py-3 bg-gradient-to-b from-gray-900 to-gray-800"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-10 text-4xl font-bold text-center text-indigo-400">
              My Projects
            </h2>

            {/* Swiper Carousel */}
            <Swiper
              ref={swiperRef}
              modules={[EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              effect="fade"
              speed={800}
              className="w-full transition-all duration-700 ease-in-out"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="relative swiper-slide">
                  <div className="flex flex-col items-center overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 md:flex-row h-auto sm:h-[500px] md:h-[350px]">
                    {/* Left Side - Content */}
                    <div className="flex flex-col justify-between h-full p-6 space-y-6 bg-gray-800 rounded-xl sm:p-8 sm:w-full md:w-1/2">
                      {/* Project Title */}
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                        {project.description}
                      </p>

                      {/* Skills Used Section */}
                      <div>
                        <h4 className="text-lg font-semibold text-indigo-400">
                          Skills Used:
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.skills.map((skill, index) => {
                            // Assign different colors based on index
                            const bgColors = [
                              "bg-blue-500 text-white",
                              "bg-green-500 text-white",
                              "bg-indigo-500 text-white",
                              "bg-yellow-500 text-gray-900",
                              "bg-teal-500 text-white",
                            ];
                            const bgColorClass =
                              bgColors[index % bgColors.length]; // Cycle through colors

                            return (
                              <span
                                key={index}
                                className={`px-3 py-1.5 text-sm font-medium rounded-md shadow-md ${bgColorClass}`}
                              >
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Buttons Section */}
                      <div className="flex flex-col gap-4 mt-auto sm:flex-row sm:items-center sm:justify-start">
                        {/* View Live Button */}
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setHoveredLive(true)}
                          onMouseLeave={() => setHoveredLive(false)}
                          className="flex items-center gap-3 px-6 py-3 text-base font-bold text-white transition-all duration-300"
                        >
                          <Eye
                            size={20}
                            className={`transition-all duration-300 ${
                              hoveredLive
                                ? "opacity-100 -translate-x-1"
                                : "opacity-0 translate-x-2"
                            }`}
                          />
                          View Live
                          <ExternalLink
                            size={20}
                            className={`transition-all duration-300 ${
                              hoveredLive
                                ? "opacity-0 translate-x-2"
                                : "opacity-100 -translate-x-1"
                            }`}
                          />
                        </a>

                        {/* Source Code Button */}
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setHoveredSourceCode(true)}
                          onMouseLeave={() => setHoveredSourceCode(false)}
                          className="relative flex items-center gap-3 px-6 py-3 text-base font-bold text-white transition-all duration-300"
                        >
                          <Code
                            size={20}
                            className={`transition-all duration-300 ${
                              hoveredSourceCode
                                ? "opacity-100 -translate-x-1"
                                : "opacity-0 translate-x-2"
                            }`}
                          />
                          View Source Code
                          <ExternalLink
                            size={20}
                            className={`transition-all duration-300 ${
                              hoveredSourceCode
                                ? "opacity-0 translate-x-2"
                                : "opacity-100 -translate-x-1"
                            }`}
                          />
                        </a>
                      </div>
                    </div>

                    {/* Right - Image */}
                    <div className="relative w-full h-56 overflow-hidden sm:h-64 md:w-1/2 md:h-full">
                      <img
                        src={project.image}
                        alt="Project Thumbnail"
                        className="object-fill w-full h-full transition-transform duration-500 transform rounded-lg hover:scale-105"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => swiperRef.current.swiper.slidePrev()}
                className="p-3 transition border rounded-full border-rose-400 text-rose-400 hover:bg-rose-500 hover:text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => swiperRef.current.swiper.slideNext()}
                className="p-3 transition border rounded-full border-rose-400 text-rose-400 hover:bg-rose-500 hover:text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:me-0 lg:py-16 lg:ps-8 lg:pe-0 xl:py-24">
            <div className="items-end justify-between max-w-7xl sm:flex sm:pe-6 lg:pe-8">
              <h2 className="max-w-xl font-bold tracking-tight text-center text-indigo-400 sm:text-4xl">
                What Tech Experts Say
              </h2>

              <div className="flex gap-4 mt-8 lg:mt-0">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous"
                  className="p-3 transition border rounded-full border-rose-400 text-rose-400 hover:bg-rose-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next"
                  className="p-3 transition border rounded-full border-rose-400 text-rose-400 hover:bg-rose-500 hover:text-white"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8 -mx-6 lg:col-span-2 lg:mx-0">
              <div id="keen-slider" className="keen-slider">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="keen-slider__slide">
                    <blockquote className="flex flex-col justify-between h-full p-6 rounded-lg shadow-md bg-gray-800/90 sm:p-8 lg:p-12">
                      <p className="text-lg font-medium text-gray-200">
                        "{testimonial.quote}"
                      </p>

                      {/* Star Ratings */}
                      <div className="flex mt-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            fill={i < testimonial.rating ? "yellow" : "gray"} // Change color to yellow for filled stars
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-500"
                            }`}
                          />
                        ))}
                      </div>

                      <cite className="mt-4 text-sm font-semibold text-gray-300">
                        – {testimonial.author}, {testimonial.role}
                      </cite>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
