import React from 'react';
import { cn } from '../../utils/formatters';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  className 
}) => {
  return (
    <div className={cn(
      'relative rounded-full overflow-hidden bg-gray-200',
      sizeClasses[size],
      className
    )}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover" 
        onError={(e) => {
          // Fallback to a generic avatar if image fails to load
          (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&w=800';
        }}
      />
    </div>
  );
};

export default Avatar;