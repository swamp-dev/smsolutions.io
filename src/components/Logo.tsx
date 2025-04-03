import { COLORS } from '../constants';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <svg 
      className={`${sizeClasses[size]} ${className}`} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon */}
      <path 
        d="M16 4L28 12V24L16 32L4 24V12L16 4Z" 
        stroke={COLORS.primary} 
        strokeWidth="1.5" 
        fill="none"
      />
      
      {/* Inner hexagon */}
      <path 
        d="M16 8L24 14V22L16 28L8 22V14L16 8Z" 
        stroke={COLORS.primary} 
        strokeWidth="1.5" 
        fill="none"
      />
      
      {/* Center hexagon */}
      <path 
        d="M16 12L20 16V20L16 24L12 20V16L16 12Z" 
        stroke={COLORS.primary} 
        strokeWidth="1.5" 
        fill="none"
      />
    </svg>
  );
}; 