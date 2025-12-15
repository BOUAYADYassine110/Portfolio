import React from 'react';
import SectionWrapper from './SectionWrapper';
import { about } from '@/data/profile';

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center tracking-tight">About Me</h2>
        
        <div className="space-y-8">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center">
            {about.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {about.strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-3 p-5 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-primary-100/50 dark:border-gray-600 hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
