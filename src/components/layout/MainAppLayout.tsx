import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center h-screen bg-background',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MainAppLayout;
