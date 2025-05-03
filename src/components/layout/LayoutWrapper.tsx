import React from 'react';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="font-sans text-natural-600 bg-natural-50">
      <main className="overflow-hidden">
        {children}
      </main>
    </div>
  );
};