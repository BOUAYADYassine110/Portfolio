'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 sm:py-32 px-4 sm:px-6 lg:px-8 ${className} ${inView ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
