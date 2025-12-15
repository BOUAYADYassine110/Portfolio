import React from 'react';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Certifications', value: '2' },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100 dark:border-gray-700"
        >
          <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
