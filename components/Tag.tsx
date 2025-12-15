import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
}

export default function Tag({ children, variant = 'default' }: TagProps) {
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600',
    primary: 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800/50',
  };

  return (
    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all hover:scale-105 ${variants[variant]}`}>
      {children}
    </span>
  );
}
