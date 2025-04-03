import React from 'react';

export const Card = ({ children }: any) => (
  <div className="border rounded-2xl shadow-md bg-white">{children}</div>
);

export const CardContent = ({ children, className = '' }: any) => (
  <div className={`p-4 ${className}`}>{children}</div>
);