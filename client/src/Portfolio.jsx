import React, { useState } from "react";
import tailwindcss from "./images/tailwindcss.png";
function Portfolio() {
  // Set darkMode to true by default for dark theme on initial load
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <div
          className={`relative min-h-screen flex items-center justify-center ${
            darkMode
              ? "bg-gradient-to-b from-gray-900 via-gray-800 to-black"
              : "bg-gradient-to-b from-white via-blue-100 to-teal-200"
          }`}
        >
          {/* Main Content */}
          <div className="text-center px-4">
            {/* Name with Animation */}
            <h1
              className={`text-5xl md:text-7xl font-extrabold mb-6 ${
                darkMode ? "text-green-400" : "text-blue-900"
              }`}
            >
              Hi, I'm Harsh
              <span className="inline-block animate-flip">i</span>t Singla
            </h1>

            {/* Subtitle */}
            <p
              className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              A passionate{" "}
              <strong className="animate-fade-in text-blue-500">
                Web Developer
              </strong>{" "}
              with expertise in{" "}
              <strong className="animate-fade-in text-green-500">
                MERN Stack
              </strong>{" "}
              and{" "}
              <strong className="animate-fade-in text-purple-500">
                Data Structures and Algorithms
              </strong>
              . I specialize in building dynamic and scalable web applications,
              delivering seamless user experiences through technologies like
              React, Node.js, Express, MongoDB, and Tailwind CSS.
            </p>

            {/* Add the styles for animation */}
            <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
          animation-delay: 0.5s; /* Optional: delay for a staggered effect */
        }

        .animate-fade-in:nth-child(1) {
          animation-delay: 0s;
        }
        .animate-fade-in:nth-child(2) {
          animation-delay: 0.3s;
        }
        .animate-fade-in:nth-child(3) {
          animation-delay: 0.6s;
        }
      `}</style>

            {/* Add the styles for animation */}
            <style>{`
            @keyframes fadeIn {
            0% {
            opacity: 0;
            transform: translateY(20px);
                               }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
    opacity: 0;
    animation-delay: 0.5s; /* Optional: delay for a staggered effect */
  }

  .animate-fade-in:nth-child(1) {
    animation-delay: 0s;
  }
  .animate-fade-in:nth-child(2) {
    animation-delay: 0.3s;
  }
  .animate-fade-in:nth-child(3) {
    animation-delay: 0.6s;
  }
`}</style>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex justify-center items-center gap-6">
              {/* Button 1 */}
              <button
                style={{ "--clr": "#39FF14" }}
                className="relative bg-gray-700 text-white px-6 py-3 uppercase font-bold tracking-wider shadow-lg transition-all duration-300 hover:scale-95 hover:text-[var(--clr)]"
              >
                <span>Contact Me</span>
                <i></i>
              </button>
              {/* Button 2 */}
              <button
                style={{ "--clr": "#FF44CC" }}
                className="relative bg-gray-700 text-white px-6 py-3 uppercase font-bold tracking-wider shadow-lg transition-all duration-300 hover:scale-95 hover:text-[var(--clr)]"
              >
                <span>View Projects</span>
                <i></i>
              </button>
            </div>
          </div>

          {/* Theme Toggle */}
          <label className="cursor-pointer absolute top-6 right-6">
            <input
              id="theme-toggle"
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
              className="hidden"
            />
            <div
              className={`p-3 rounded-full transition-all ${
                darkMode
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-yellow-400 text-gray-800"
              }`}
            >
              {darkMode ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </div>
          </label>

          {/* Flip Animation Styles */}
          <style>
            {`
          @keyframes flip {
            0% {
              transform: rotateX(0);
            }
            50% {
              transform: rotateX(180deg);
            }
            100% {
              transform: rotateX(360deg);
            }
          }

          .animate-flip {
            animation: flip 2s ease-in-out infinite;
          }

          button {
            position: relative;
            background: #444;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            border: none;
            letter-spacing: 0.1rem;
            font-size: 1rem;
            padding: 1rem 3rem;
            transition: 0.2s;
          }

          button:hover {
            letter-spacing: 0.2rem;
            padding: 1.1rem 3.1rem;
            background: var(--clr);
            color: var(--clr);
            animation: box 3s infinite;
            transform: scale(0.95); /* Decrease the size on hover */
          }

          button::before {
            content: "";
            position: absolute;
            inset: 2px;
            background: #272822;
          }

          button span {
            position: relative;
            z-index: 1;
          }

          button i {
            position: absolute;
            inset: 0;
            display: block;
          }

          button i::before {
            content: "";
            position: absolute;
            width: 10px;
            height: 2px;
            left: 80%;
            top: -2px;
            border: 2px solid var(--clr);
            background: #272822;
            transition: 0.2s;
          }

          button:hover i::before {
            width: 15px;
            left: 20%;
            animation: move 3s infinite;
          }

          button i::after {
            content: "";
            position: absolute;
            width: 10px;
            height: 2px;
            left: 20%;
            bottom: -2px;
            border: 2px solid var(--clr);
            background: #272822;
            transition: 0.2s;
          }

          button:hover i::after {
            width: 15px;
            left: 80%;
            animation: move 3s infinite;
          }

          @keyframes move {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(5px);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes box {
            0% {
              box-shadow: #27272c;
            }
            50% {
              box-shadow: 0 0 25px var(--clr);
            }
            100% {
              box-shadow: #27272c;
            }
          }
        `}
          </style>
        </div>

        {/* Skills Section */}
        <div className="w-full p-12 bg-gray-100">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
            Web Developer Skills
          </h2>
          <ul className="flex flex-wrap justify-center gap-6">
            {/* Skill 1 */}
            {[
              { name: "HTML5", iconClass: "fab fa-html5" },
              { name: "CSS3", iconClass: "fab fa-css3-alt" },
              { name: "JavaScript", iconClass: "fab fa-js-square" },
              { name: "Bootstrap", iconClass: "fab fa-bootstrap" },
              { name: "Tailwind CSS", iconClass: "fab fa-tailwind" },
              { name: "Git", iconClass: "fab fa-git" },
              { name: "C++", iconClass: "fab fa-cuttlefish" }, // FontAwesome doesn't have a C++ icon, using Cuttlefish as an alternative
              { name: "Java", iconClass: "fab fa-java" },
              { name: "Node.js", iconClass: "fab fa-node" },
              { name: "MongoDB", iconClass: "fab fa-database" },
            ].map((skill, index) => (
              <li
                key={index}
                className="flex items-center justify-center flex-col w-24 h-24 rounded-lg shadow-lg overflow-hidden"
              >
                <button className="relative w-full h-full flex items-center justify-center text-red-500 bg-white border border-[#18181a] text-lg font-medium cursor-pointer group transition-all duration-300 hover:scale-105">
                  {/* Icon for the skill */}
                  <i
                    className={`${skill.iconClass} text-3xl group-hover:text-transparent`}
                  ></i>
                  {/* Last Text Span */}
                  <span className="text-yellow-500 block absolute bottom-0 opacity-0 top-[50%] left-[50%] transform translate-y-[225%] translate-x-[-50%] h-[14px] leading-[13px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%]">
                    {skill.name} Skill
                  </span>
                  {/* Button Hover Effect (Black bar) */}
                  <span className="absolute inset-0 bg-black transform origin-[bottom-center] scale-y-0 group-hover:scale-y-100 group-hover:skew-y-[9.3deg] transition-all duration-600"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Projects Section */}
        <section className="py-20 bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
              <p className="text-sm leading-relaxed">
                A web application that does something amazing. Built with React
                and Tailwind CSS.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
              <p className="text-sm leading-relaxed">
                Another cool project that solves real-world problems.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project 3</h3>
              <p className="text-sm leading-relaxed">
                An innovative solution for efficient workflows.
              </p>
            </div>
          </div>
        </section>
        {/* Footer Section */}
        <footer className="py-6 bg-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Portfolio;
