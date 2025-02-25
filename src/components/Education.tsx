import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science and Informatics",
      school: "Zagazig University",
      year: "2020 - 2024",
      description: "Specialized in Software and programming",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 relative pl-8"
            >
              <div className="absolute left-0 top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{item.school}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{item.year}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;