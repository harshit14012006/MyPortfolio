import React from "react";
import avatarSmoke from "./avatar_smoke.jpg";
import wedding from "./wedding.jpg";
import rocks from "./rocks.jpg";
import sailboat from "./sailboat.jpg";
import underwater from "./underwater.jpg";
import chef from "./chef.jpg";

const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Sidebar */}
      <nav className=" py-8">
        <img
          src={avatarSmoke}
          alt="Avatar"
          className="w-16 h-16 rounded-full mb-8 border-4 border-gray-700"
        />
        {[
          { href: "#home", icon: "fa-home", label: "HOME" },
          { href: "#about", icon: "fa-user", label: "ABOUT" },
          { href: "#photos", icon: "fa-camera", label: "PHOTOS" },
          { href: "#contact", icon: "fa-envelope", label: "CONTACT" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-center py-4 w-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
          >
            <i className={`fa ${item.icon} text-2xl`} aria-hidden="true"></i>
            <p className="text-sm mt-1">{item.label}</p>
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <div className="ml-28">
        {/* Header */}
        <header
  id="home"
  className="flex flex-col items-center text-center py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900"
>
  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
    I'm <span className="text-gray-400">John Doe</span>.
  </h1>
  <p className="text-xl mt-4 text-gray-300">
    Photographer & Web Designer
  </p>
  <button
    className="mt-8 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-200"
  >
    View My Work
  </button>
</header>


        {/* About Section */}
        <section
          id="about"
          className="px-8 py-20 text-gray-300 bg-gray-900 text-center"
        >
          <h2 className="text-3xl font-semibold text-white">About Me</h2>
          <hr className="w-32 mx-auto my-6 border-gray-600" />
          <p className="max-w-2xl mx-auto">
            I'm a passionate photographer and web designer with a keen eye for
            detail. My goal is to create visuals that captivate and inspire.
          </p>
          <h3 className="text-2xl font-semibold text-white mt-12">
            Skills & Expertise
          </h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { skill: "Photography", percentage: "90%" },
              { skill: "Web Design", percentage: "85%" },
              { skill: "Photoshop", percentage: "80%" },
            ].map(({ skill, percentage }, index) => (
              <div key={index} className="text-left">
                <p className="text-sm font-medium">{skill}</p>
                <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                  <div
                    className="bg-gradient-to-r from-gray-400 to-gray-600 h-3 rounded-full"
                    style={{ width: percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photos Section */}
        <section
          id="photos"
          className="px-8 py-20 text-gray-300 bg-black text-center"
        >
          <h2 className="text-3xl font-semibold text-white">My Photos</h2>
          <hr className="w-32 mx-auto my-6 border-gray-600" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[wedding, rocks, sailboat, underwater, chef].map(
              (photo, index) => (
                <div key={index} className="group relative">
                  <img
                    src={photo}
                    alt={`Gallery ${index + 1}`}
                    className="rounded-lg object-cover transform transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <p className="text-white text-lg font-medium">
                      Photo {index + 1}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="px-8 py-20 text-gray-300 bg-gray-900 text-center"
        >
          <h2 className="text-3xl font-semibold text-white">Contact Me</h2>
          <hr className="w-32 mx-auto my-6 border-gray-600" />
          <form
            action="#"
            method="POST"
            className="max-w-lg mx-auto flex flex-col gap-6 mt-8"
          >
            {[
              { placeholder: "Your Name", type: "text" },
              { placeholder: "Your Email", type: "email" },
              { placeholder: "Subject", type: "text" },
            ].map(({ placeholder, type }, index) => (
              <input
                key={index}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-400"
                required
              />
            ))}
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-400 resize-none"
              rows={6}
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default App;
