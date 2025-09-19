import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiFlask, SiNextdotjs, SiPostgresql, SiMongodb } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";
import { TbApi, TbBinaryTree } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";



function App() {
    const [status, setStatus] = useState(""); // success | error | loading
    const skills = [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-800" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Version Control", icon: <FaGitAlt className="text-red-500" /> },
      { name: "DSA", icon: <TbBinaryTree className="text-green-600" /> },
      { name: "OOPs", icon: <TbApi className="text-indigo-600" /> },
      { name: "APIs", icon: <TbApi className="text-blue-500" /> },
      { name: "System Design", icon: <MdArchitecture className="text-purple-600" /> },
      { name: "Unit Testing", icon: <VscDebug className="text-pink-600" /> },
      { name: "Debugging", icon: <VscDebug className="text-red-600" /> },
      { name: "MySQL", icon: <FaDatabase className="text-blue-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ];

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("loading");

      const formData = new FormData(e.target);

      try {
        const response = await fetch("https://formspree.io/f/mgvlgkzr", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          setStatus("success");
          e.target.reset();
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
        console.error("Error submitting form:", error);
      }
    };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">My PortFolio</h1>
          <div className="space-x-6">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize hover:text-indigo-600"
              >
                {section.charAt(0).toUpperCase() + section.slice(1).toLowerCase()}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero / Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Suraj Gupta 👋</h1>
        <p className="text-lg max-w-xl ">
          Software Engineer | Web Developer | Tech Enthusiast
        </p>
        <div className="mt-6 flex justify-center space-x-6 text-3xl">
          <a
            href="https://github.com/SurajGuptaDA"
            target="_blank"
            className="text-white hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-gupta-here/"
            target="_blank"
            className="text-white hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/SurajGuptaHere/"
            target="_blank"
            className="text-white hover:text-gray-300 transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          I'm a detail-oriented Software Engineer with a foundation in web and
          application development. Skilled in Python, JavaScript, React,
          Next.js, Flask, and databases, I enjoy building efficient and
          user-friendly solutions. With hands-on experience in full-stack
          development, I love solving problems and learning new technologies.
        </p>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <span className="text-5xl">{skill.icon}</span>
                <p className="mt-2 text-sm font-medium text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Blogging Platform",
                desc: "Full-stack blog with Flask, MySQL, user authentication, and comments.",
              },
              {
                title: "Teacher-Student Questionnaire",
                desc: "Real-time Q&A with Next.js, WebSockets, and MongoDB.",
              },
              {
                title: "Discord Soundboard Bot",
                desc: "Music bot using Discord API to play audio in real-time.",
              },
              {
                title: "Remote Server-Client",
                desc: "Python system for executing server commands with real-time output.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-lg mb-8">
          Let's connect! Fill out the form below and I'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="mt-4 text-green-600 font-semibold">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 font-semibold">
            ❌ Oops! Something went wrong. Please try again.
          </p>
        )}
      </section>


      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-4">
        <p>© 2025 Suraj Gupta — Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
