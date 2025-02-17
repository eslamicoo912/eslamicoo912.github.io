import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Blocks,
  Braces,
  Terminal,
  Container,
  ChevronsLeftRight
} from "lucide-react";

const Skills: React.FC = () => {
  const skills = [
    { name: "JavaScript", icon: Code2, category: "Frontend" },
    { name: "React", icon: Blocks, category: "Frontend" },
    { name: "TailwindCss", icon: Terminal, category: "Frontend" },
    { name: "TypeScript", icon: Braces, category: "Language" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Express.js", icon: ChevronsLeftRight, category: "Backend" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "Docker", icon: Container, category: "DevOps" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of the technologies I work with
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-blue-50 dark:bg-gray-600 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
