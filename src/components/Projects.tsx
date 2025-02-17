import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import queenLogo from "../assets/images/3.png";
import aiLogo from "../assets/images/ai_face.jpeg";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Queen For Mental Health",
      description:
        "A full-stack system with different roles and admin dashboard.",
      image: queenLogo,
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TypeScript",
        "Socket.io",
      ],
      features: [
        "Role-based authentication system",
        "Real-time chat between therapist and patient",
        "Filtering and searching for therapists",
        "Appointment scheduling system",
        "Comprehensive admin dashboard",
      ],
      liveUrl: "https://queenmentalhealth.com/",
    },
    {
      title: "Ersa Real Estate",
      description:
        "A real estate website & panel with advanced search and filtering.",
      image:
        "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TypeScript",
      ],
      features: [
        "Advanced search and filtering",
        "Implemented tracking for maintenance and finance requests, for facilitating admin and client tasks",
        "Developed a role-based permission system, enhancing admin control.",
      ],
      liveUrl: "#",
    },
    {
      title: "Easymerch AI",
      description: "An AI-powered multi-featured app with advanced features.",
      image: aiLogo,
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TypeScript",
      ],
      features: [
        "Dealing with chatgpt models",
        "Turn concepts into professional visuals",
        "Turn images into professional prompts",
        "Removing background from images",
        "Advanced prompt engineering",
      ],
      liveUrl: "https://easymerch.ai",
      githubUrl: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="bg-white w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-6 h-6 text-gray-900" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
