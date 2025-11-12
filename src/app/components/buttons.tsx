/* eslint-disable */
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ size = 'md', children, ...props }) => {
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      {...props}
      className={`bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition ${sizes[size]} ${props.className ?? ''}`}
    >
      {children}
    </button>
  );
};
