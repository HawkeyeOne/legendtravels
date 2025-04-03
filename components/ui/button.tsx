import React from 'react';

export const Button = ({ children, className = '', ...props }: any) => {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};