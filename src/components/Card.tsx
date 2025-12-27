import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 p-8 transition-all duration-300 ease-in-out ${
        hoverEffect ? 'hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(21,224,251,0.2)] hover:border-[#15E0FB]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
