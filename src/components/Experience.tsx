import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      description: 'Leading development of enterprise-level web applications using React and Node.js. Managing a team of 5 developers.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple client projects using various technologies including Vue.js and Django.',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2016 - 2018',
      description: 'Worked on frontend development using React and collaborated with the backend team on API integration.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 relative pl-8"
            >
              <div className="absolute left-0 top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{experience.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{experience.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;