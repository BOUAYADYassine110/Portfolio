import React from 'react';
import SectionWrapper from './SectionWrapper';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-white dark:bg-gray-800">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center tracking-tight">Experience</h2>
      
      <div className="max-w-5xl mx-auto space-y-12">
        {experience.map((item, index) => (
          <div key={index} className="relative pl-10 pb-12 border-l-2 border-primary-200 last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 w-5 h-5 bg-primary-600 rounded-full -translate-x-[11px] ring-4 ring-white"></div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.role}</h3>
                <span className="text-sm text-primary-600 font-semibold bg-primary-50 px-3 py-1 rounded-full">{item.dates}</span>
              </div>
              
              <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-2">{item.organization}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {item.location}
              </p>
              
              <ul className="space-y-2">
                {item.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
