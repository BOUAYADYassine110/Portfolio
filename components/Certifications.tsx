import React from 'react';
import SectionWrapper from './SectionWrapper';
import { certifications } from '@/data/certifications';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center tracking-tight">Certifications</h2>
      
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary-600"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{cert.issuer}</p>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mt-2">{cert.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
