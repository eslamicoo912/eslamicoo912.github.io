import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profile_pic from "../assets/images/profile_pic.jpg";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <div className="mb-8">
          <img
            src={profile_pic}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Eslam Ashraf
        </h1>

        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-8">
          <TypeAnimation
            sequence={["Full-Stack Developer", 2000]}
            repeat={Infinity}
            speed={15}
          />
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Building beautiful, functional, and scalable web applications &
          dashboard with a passion for clean code and user experience.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/eslamicoo912"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/eslamicoo912/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:eslamicoo3@gmail.com"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
