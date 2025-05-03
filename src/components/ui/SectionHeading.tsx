import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = ''
}) => {
  const alignment = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};