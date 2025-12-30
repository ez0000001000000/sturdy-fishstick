"use client";

import React from 'react';

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({ 
  children, 
  className = '' 
}: ComponentPreviewProps) {
  return (
    <div className={`border-2 border-gray-200 rounded-3xl bg-white dark:bg-gray-900 p-4 max-h-[calc(100vh-200px)] overflow-auto pt-16 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 ${className}`}>
      {children}
    </div>
  );
}
