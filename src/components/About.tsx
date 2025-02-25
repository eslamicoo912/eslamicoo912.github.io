import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Hexagon } from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices and design patterns.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Ui Design",
      description:
        "Creating intuitive and visually appealing user interfaces with attention to detail.",
    },
    {
      icon: <Hexagon className="w-8 h-8" />,
      title: "API Development",
      description:
        "Building and maintaining RESTful APIs using Node.js and Express.js.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fast Learner",
      description:
        "Quickly adapting to new technologies and methodologies in the ever-evolving tech landscape.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate web developer who worked on different real projects for
            real clients and companies. Working with both the backend and
            frontend sides has given me great experiences and different skills.
            As a software developer, I worked with APIs and developed
            high-quality code and user-facing features. My goal is to work
            within an agile team to contribute to the team's growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
