import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-4 font-medium tracking-wide transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]';

  const variants = {
    primary: 'bg-[#15E0FB] text-black hover:shadow-[0_0_20px_rgba(21,224,251,0.5)] hover:scale-105',
    secondary: 'border-2 border-black text-black hover:bg-black hover:text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
