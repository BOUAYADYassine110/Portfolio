import React from 'react';
import SectionWrapper from './SectionWrapper';
import Tag from './Tag';
import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center tracking-tight">Skills & Expertise</h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Tag key={skillIndex}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
