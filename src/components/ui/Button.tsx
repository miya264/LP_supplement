import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  large?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = false, 
  large = false, 
  className = '',
  onClick
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = large 
    ? 'px-8 py-4 text-lg'
    : 'px-6 py-3 text-base';
  
  const colorClasses = primary
    ? 'bg-natural-500 text-white hover:bg-natural-600 focus:ring-natural-400'
    : 'bg-white text-natural-500 border border-natural-200 hover:bg-natural-50 focus:ring-natural-200';

  return (
    <button 
      className={`${baseClasses} ${sizeClasses} ${colorClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};