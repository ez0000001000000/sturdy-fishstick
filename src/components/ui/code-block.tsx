"use client";

import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ 
  code, 
  language = 'tsx', 
  className = '' 
}: CodeBlockProps) {
  return (
    <pre className={`bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed ${className}`}>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}
